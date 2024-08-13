document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const light = document.querySelector('.light');
  const groundLight = document.querySelector('.ground-light');
  const houseLight = document.querySelector('.house-light');
  const buildings = document.querySelector('.buildings');
  const body = document.body;
  const lightOnSound = document.getElementById('light-on-sound');
  const lightOffSound = document.getElementById('light-off-sound');

  const colors = [
    'linear-gradient(180deg, #111, #330033)',
    'linear-gradient(180deg, #002b36, #073642)',
    'linear-gradient(180deg, #1b1b2f, #162447)',
    'linear-gradient(180deg, #240b36, #c31432)',
    'linear-gradient(180deg, #3a1c71, #d76d77, #ffaf7b)',
    'linear-gradient(180deg, #ff7e5f, #feb47b)',
    'linear-gradient(180deg, #6a11cb, #2575fc)',
    'linear-gradient(180deg, #f953c6, #b91d73)',
    'linear-gradient(180deg, #12c2e9, #c471ed, #f64f59)',
    'linear-gradient(180deg, #fdcbf1, #e6dee9)',
    'linear-gradient(180deg, #43cea2, #185a9d)',
    'linear-gradient(180deg, #ff9966, #ff5e62)',
    'linear-gradient(180deg, #8e2de2, #4a00e0)',
    'linear-gradient(180deg, #0f2027, #203a43, #2c5364)'
  ];

  let colorIndex = 0;

  btn.addEventListener('change', () => {
    if (btn.checked) {
      light.classList.add('on');
      groundLight.classList.add('on');
      buildings.classList.add('on');
      houseLight.classList.add('on'); // Toggle house light
      changeBackground();
      playSound(lightOnSound);
    } else {
      light.classList.remove('on');
      groundLight.classList.remove('on');
      buildings.classList.remove('on');
      houseLight.classList.remove('on'); // Toggle house light
      playSound(lightOffSound);
    }
  });

  function playSound(sound) {
    sound.currentTime = 0;
    sound.play().catch(error => {
      console.error('Error playing sound:', error);
    });
  }

  function changeBackground() {
    body.style.background = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }

  setInterval(() => {
    if (!btn.checked) return; // Only change background if the light is on
    changeBackground();
  }, 5000); // Change color every 5 seconds
});
