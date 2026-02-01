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
        }, 100);
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
