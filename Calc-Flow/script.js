document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', function(event) {
      const value = event.target.value;
      const display = document.calc.display;

      if (value === '=') {
        try {
          display.value = eval(display.value);
        } catch (e) {
          display.value = 'Error';
        }
      } else if (value === 'C') {
        display.value = '';
      } else {
        display.value += value;
      }
    });
  });
});
