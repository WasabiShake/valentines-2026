document.addEventListener('DOMContentLoaded', () => {
    const loveValue = document.getElementById('love-counter');
    const loveBtn = document.getElementById('love-btn');
    const mainCard = document.getElementById('main-card');
    const overloadMsg = document.getElementById('overload-msg');
    const heartsContainer = document.getElementById('hearts-container');
    const messageContainer = document.getElementById('message-container');
    const body = document.body;

    const messages = [
        "Heart racing! 💓",
        "Temperature rising! 🌡️",
        "System overheating! 🔥",
        "Too much love! 😵‍💫",
        "Critical levels! 🚨",
        "Love overload imminent! ⚡",
        "Universe expanding! 🌌",
        "Physics breaking! ⚛️",
        "Butterflies going wild! 🦋",
        "Maximum affection! 💖"
    ];

    let count = 0;
    let clickValue = 1;
    let isAutoRunning = false;
    let autoInterval = null;
    let messageTimeout = null;
    let speed = 200;
    let argumentRound = 0;

    // Background Hearts Generator
    function createHearts() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 4 + 's'; // 4-7s
        heart.style.fontSize = Math.random() * 1.5 + 1 + 'rem';

        // Make heart clickable
        heart.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering other things
            popHeart(heart);
        });

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }

    setInterval(createHearts, 500);

    loveBtn.addEventListener('click', () => {
        if (isAutoRunning) return;

        // Start the automated chaos on first click
        isAutoRunning = true;
        loveBtn.textContent = "Hold on tight! ❤️";
        runChaos();
    });

    function runChaos() {
        autoInterval = setTimeout(() => {
            increaseLove();

            // Accelerate
            if (speed > 10) {
                speed *= 0.95; // Get faster
            } else if (speed > 1) {
                speed *= 0.98; // Super fast acceleration
            }

            // Continue unless overloaded
            if (count < 999999) {
                runChaos();
            } else {
                triggerOverload();
            }

        }, speed);
    }

    function increaseLove() {
        // Exponential growth
        if (count < 100) clickValue = 1;
        else if (count < 1000) clickValue = 15;
        else if (count < 10000) clickValue = 150;
        else clickValue = 1500;

        count += clickValue;
        loveValue.textContent = count.toLocaleString();

        // Add random hearts on increment
        createHearts();

        // Apply effects based on count
        applyEffects();

        // Randomly show messages
        if (Math.random() > 0.95 && count > 100) {
            showMessage();
        }
    }

    function applyEffects() {
        if (count > 500) {
            mainCard.classList.add('shaking');
        }
        if (count > 2000) {
            mainCard.classList.remove('shaking');
            mainCard.classList.add('intense-shake');
            body.style.background = `linear-gradient(135deg, #4a0404 0%, #2b0c14 100%)`; // Darker red
        }
        if (count > 10000) {
            mainCard.classList.remove('intense-shake');
            mainCard.classList.add('critical-shake');
            loveValue.style.color = '#fff';
        }
    }

    function triggerOverload() {
        clearTimeout(autoInterval);

        // Final state
        loveValue.textContent = "∞";
        loveBtn.style.display = "none";

        // Flash effect
        body.style.backgroundColor = "white";
        setTimeout(() => {
            body.style.background = "black";
            mainCard.style.border = "2px solid red";
            mainCard.style.boxShadow = "0 0 50px red";
            mainCard.classList.remove('critical-shake'); // Stop shaking to read text

            // Show message
            document.querySelector('.love-meter-container').classList.add('hidden');
            document.querySelector('.subtitle').classList.add('hidden');
            document.querySelector('h1').classList.add('hidden');

            overloadMsg.classList.remove('hidden');

            overloadMsg.classList.remove('hidden');

            // Setup new input interaction
            const inputContainer = document.getElementById('super-input-container');
            const superInput = document.getElementById('super-love-input');
            const submitBtn = document.getElementById('super-love-submit');

            inputContainer.classList.remove('hidden');
            superInput.focus();

            argumentRound = 0;

            const checkAndSubmit = () => {
                const val = superInput.value.toLowerCase();
                // Flexible regex to match 'love you more' or 'love you most'
                const pattern = /l+o+v+e+.*y+o+u+.*(m+o+r+e+|m+o+s+t+)/i;
                const isLoveMatch = pattern.test(val);

                if (argumentRound === 0) {
                    // Initial unlock
                    if (isLoveMatch) {
                        argumentRound++;
                        startArgument();
                    } else {
                        // Shake if wrong on first try (password protect vibes)
                        superInput.style.border = "2px solid red";
                        superInput.classList.add('shaking');
                        setTimeout(() => superInput.classList.remove('shaking'), 500);
                    }
                } else {
                    // In string argument flow
                    if (isLoveMatch) {
                        argumentRound++;
                        if (argumentRound > 3) {
                            userWins();
                        } else {
                            advanceArgument();
                        }
                    } else {
                        // User gave up or typed something else
                        appWins();
                    }
                }
            };

            superInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    checkAndSubmit();
                }
            });

            submitBtn.addEventListener('click', checkAndSubmit);
        }, 100);
    }

    function startArgument() {
        const overloadMsg = document.getElementById('overload-msg');
        // Hide initial overload text but keep container for our new drama
        overloadMsg.querySelector('h2').style.display = 'none';
        overloadMsg.querySelectorAll('p').forEach(p => p.style.display = 'none');

        // Start visuals
        document.body.classList.add('universe-break');
        document.getElementById('main-card').classList.add('cosmic-shake');

        // Setup chaos loop
        startChaosEffects();

        // Trigger first retort
        advanceArgument();
    }

    function advanceArgument() {
        // Clear input for rebuttal
        const superInput = document.getElementById('super-love-input');
        superInput.value = "";
        superInput.focus();
        superInput.placeholder = "Retort here...";

        // Create or update argument message
        let argMsg = document.getElementById('argument-message');
        if (!argMsg) {
            argMsg = document.createElement('h2');
            argMsg.id = "argument-message";
            argMsg.style.color = "#ff0055";
            argMsg.style.fontSize = "2rem";
            argMsg.style.marginBottom = "20px";
            argMsg.classList.add('glitch');
            const container = document.getElementById('super-input-container');
            container.parentNode.insertBefore(argMsg, container);
        }

        // Intensity increases
        const messages = [
            "I LOVE YOU MOREEEE!!!! 😤❤️",
            "NO, I LOVE YOU THE MOST!!!! 😤😤😤😤😤❤️❤️❤️❤️❤️",
            "NOOOO! I LOVE YOU MOSTESTESTESTEST!!!! ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️"
        ];

        argMsg.innerText = messages[argumentRound - 1] || "NO! I LOVE YOU MORE!!!!";
        argMsg.setAttribute('data-text', argMsg.innerText);

        // Intensify shake
        const mainCard = document.getElementById('main-card');
        mainCard.style.animationDuration = (0.2 - (argumentRound * 0.05)) + 's';

        // 3D "Pop Out" Effect for numbers
        const loveValue = document.getElementById('love-counter');
        const depth = Math.min(20, argumentRound * 5 + 3); // Reduced: 8px, 13px, 18px...
        let shadow = '';
        for (let i = 1; i <= depth; i++) {
            shadow += `0 ${i}px ${Math.ceil(i / 2)}px #cc0033${i < depth ? ',' : ''}`;
        }
        // Add glow at the end
        shadow += `, 0 0 20px rgba(255, 0, 85, 0.8)`;

        loveValue.style.textShadow = shadow;
        loveValue.style.transform = `scale(${1 + argumentRound * 0.2})`;
        loveValue.style.transition = "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)"; // Bouncy pop

        // Push the % symbol away from the numbers to prevent overlap
        const loveLabel = document.querySelector('.love-label');
        if (loveLabel) {
            // Specific translations for each round (move right and scale up)
            const translations = [5, 50, 120, 230];
            const scales = [1, 1.2, 1.4, 1.6];
            const translateX = translations[argumentRound] || translations[translations.length - 1];
            const scale = scales[argumentRound] || scales[scales.length - 1];
            loveLabel.style.transform = `translateX(${translateX}px) scale(${scale})`;
            loveLabel.style.transition = "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        }

        // Intensify hearts multiplicatively (faster spawn rate + multiple hearts)
        if (chaosInterval) clearInterval(chaosInterval);

        // Spawn interval gets faster
        const heartRate = Math.max(20, 100 / (argumentRound + 1));

        // Number of hearts per tick increases
        const heartsPerTick = Math.pow(2, argumentRound); // 2, 4, 8, 16...

        chaosInterval = setInterval(() => {
            for (let i = 0; i < heartsPerTick; i++) {
                createHearts();
            }
        }, heartRate);
    }

    function userWins() {
        stopChaos();
        document.getElementById('super-input-container').style.display = 'none';
        const argMsg = document.getElementById('argument-message');
        argMsg.classList.remove('glitch'); // Remove glitch for readability
        argMsg.innerText = "FIIINNNEEE, YOU WIN... 😑😒💖";
        argMsg.setAttribute('data-text', "FINE, YOU WIN...");
        argMsg.style.color = "#ff4d6d";

        const subMsg = document.createElement('p');
        subMsg.innerText = "(But I still love you a lot!)";
        subMsg.style.fontSize = "1.5rem";
        subMsg.style.marginTop = "20px";
        argMsg.parentNode.appendChild(subMsg);

        // Calm down
        document.body.classList.remove('universe-break');
        document.body.style.background = "#pink";
        document.getElementById('main-card').classList.remove('cosmic-shake');
    }

    function appWins() {
        stopChaos();
        document.getElementById('super-input-container').style.display = 'none';
        const argMsg = document.getElementById('argument-message');
        argMsg.classList.remove('glitch'); // Remove glitch for readability
        argMsg.innerText = "HEHEHE! I WIN! 🤭🤭🤭";
        argMsg.setAttribute('data-text', "I WIN!");
        argMsg.style.color = "#ffd700"; // Gold

        const subMsg = document.createElement('p');
        subMsg.innerText = "I love you moreee! 🤭🤭🤭🤗🤗🤗";
        subMsg.style.fontSize = "1.5rem";
        subMsg.style.marginTop = "20px";
        argMsg.parentNode.appendChild(subMsg);

        document.getElementById('main-card').classList.remove('cosmic-shake');
    }

    let chaosInterval;
    let msgInterval;
    let updateInterval;

    function startChaosEffects() {
        const loveValue = document.getElementById('love-counter');
        const mainCard = document.getElementById('main-card');

        // Restore displays but in a broken state
        document.querySelector('.love-meter-container').classList.remove('hidden');
        const loveLabel = document.querySelector('.love-label');
        loveLabel.style.display = 'inline'; // Show % label again
        loveLabel.innerText = "%";

        loveValue.classList.add('glitch');

        // Chaotic number update
        updateInterval = setInterval(() => {
            // Scale based on argument round: 1M -> 1B -> 1T
            const power = argumentRound || 1;
            const min = Math.pow(1000, power + 1);
            const max = Math.pow(1000, power + 2);

            const val = Math.floor(Math.random() * (max - min)) + min;
            loveValue.textContent = val.toLocaleString();
        }, 50);

        chaosInterval = setInterval(createHearts, 100);
    }

    function stopChaos() {
        clearInterval(chaosInterval);
        clearInterval(updateInterval);
        document.body.classList.remove('universe-break');
    }
    function popHeart(heart) {
        heart.classList.add('pop');
        // Add points for popping hearts!
        count += 50;
        loveValue.textContent = count.toLocaleString();

        setTimeout(() => {
            heart.remove();
        }, 300);
    }

    function showMessage() {
        // Clear previous timeout to prevent premature hiding
        if (messageTimeout) clearTimeout(messageTimeout);

        // Show random message
        const msg = messages[Math.floor(Math.random() * messages.length)];
        messageContainer.textContent = msg;
        messageContainer.classList.add('show');

        messageTimeout = setTimeout(() => {
            messageContainer.classList.remove('show');
        }, 4000);
    }
});
