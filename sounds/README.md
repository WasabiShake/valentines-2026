# Sound Effects Guide

This folder contains the audio files for the Valentine's Day app. You'll need to add the following sound effect files:

## Required Sound Files

### 1. **click.mp3** (and click.ogg)
- **Purpose**: Button click feedback
- **Suggested sound**: Short, crisp "pop" or "click"
- **Duration**: 0.1-0.3 seconds
- **Sources**:
  - Search "UI click" on Freesound.org
  - Generate with jfxr.frozenfractal.com (square wave, short decay)

### 2. **whoosh.mp3** (and whoosh.ogg)
- **Purpose**: Hearts appearing, transitions
- **Suggested sound**: Soft, gentle "whoosh" or "swoosh"
- **Duration**: 0.3-0.8 seconds
- **Sources**:
  - Search "whoosh soft" on Freesound.org
  - Mixkit.co → "whoosh transitions"

### 3. **pop.mp3** (and pop.ogg)
- **Purpose**: Clicking/popping hearts
- **Suggested sound**: Bubble pop or heart pop
- **Duration**: 0.2-0.4 seconds
- **Sources**:
  - Search "bubble pop" on Freesound.org
  - Generate with jfxr.frozenfractal.com (sine wave, quick)

### 4. **ambient.mp3** (and ambient.ogg)
- **Purpose**: Background loop during counter phase
- **Suggested sound**: Dreamy, romantic ambient pad or heartbeat
- **Duration**: 5-20 seconds (loops)
- **Sources**:
  - Search "ambient romantic" on Freesound.org
  - Search "heartbeat loop" on Zapsplat.com

### 5. **shake.mp3** (and shake.ogg)
- **Purpose**: Rumble during shaking phases
- **Suggested sound**: Low rumble or bass hit
- **Duration**: 0.3-0.8 seconds
- **Sources**:
  - Search "rumble" or "bass hit" on Freesound.org
  - Generate with jfxr.frozenfractal.com (sawtooth wave, low pitch)

### 6. **overload.mp3** (and overload.ogg)
- **Purpose**: Explosion when infinity is reached
- **Suggested sound**: Glitch explosion or "boom"
- **Duration**: 1-3 seconds
- **Sources**:
  - Search "glitch explosion" on Freesound.org
  - Search "digital explosion" on Zapsplat.com

### 7. **argument.mp3** (and argument.ogg)
- **Purpose**: Chaotic background loop during argument phase
- **Suggested sound**: Distorted, intense music or glitch sounds
- **Duration**: 5-20 seconds (loops)
- **Sources**:
  - Search "glitch loop" or "chaotic music" on Freesound.org
  - Layer multiple distorted sounds

### 8. **rising.mp3** (and rising.ogg)
- **Purpose**: Dynamic rising tension sound during counter (0 to 1 million)
- **Suggested sound**: Ascending tone, siren, or building tension
- **Duration**: 5-15 seconds (loops, pitch controlled by code)
- **Sources**:
  - Search "rising tone" or "ascending pitch" on Freesound.org
  - Search "siren rise" or "tension build" on Zapsplat.com
  - Generate with jfxr.frozenfractal.com (sawtooth wave, rising pitch)
- **Note**: The pitch will be dynamically controlled (0.5x to 2.5x speed)

## Quick Setup Steps

1. **Download sounds** from the sources above
2. **Convert to multiple formats** for browser compatibility:
   - Use online converter: cloudconvert.com
   - Convert each sound to both `.mp3` and `.ogg` formats
3. **Place files** in this `sounds/` folder
4. **Test** by opening the app and listening for sounds at:
   - Button click
   - Hearts appearing (occasionally)
   - Heart pops (when clicking hearts)
   - Shaking phases (500, 2000, 10000 count)
   - Overload explosion (reaching infinity)
   - Argument phase loop

## Free Sound Sources

- **Freesound.org** - Largest free sound library (CC licensed)
- **Zapsplat.com** - Free with attribution
- **Mixkit.co** - Royalty-free sound effects
- **jfxr.frozenfractal.com** - Generate retro game sounds
- **sfxr.me** - Generate 8-bit style sounds

## Pro Tips

- Keep file sizes small (under 500KB each)
- Use MP3 for wider compatibility
- Add OGG for better compression in modern browsers
- Keep UI sounds short (under 1 second)
- Volume is controlled in code, so don't worry about normalizing
