const soundMap = {
    w: 'sounds/crash.mp3',
    a: 'sounds/kick-bass.mp3',
    s: 'sounds/snare.mp3',
    d: 'sounds/tom-1.mp3',
    j: 'sounds/tom-2.mp3',
    k: 'sounds/tom-3.mp3',
    l: 'sounds/tom-4.mp3'
  };

  // Select all drum buttons
  const drumButtons = document.querySelectorAll('.drum');

  // Function to play sound based on button class
  function playSound(buttonClass) {
    const soundFile = soundMap[buttonClass];
    if (soundFile) {
      const audio = new Audio(soundFile);
      audio.play();
    }
  }

  // Add event listeners to each button
  drumButtons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonClass = button.classList[0];
      playSound(buttonClass);
    });
  });

  // Capture keystrokes
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase(); // Get the key pressed
    if (soundMap[key]) {
      playSound(key); // Play sound if the key corresponds to a button
    }
  });