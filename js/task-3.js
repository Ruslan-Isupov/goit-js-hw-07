const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
const addSpanText = event => {
  span.textContent = event.currentTarget.value.trim() || 'Anonymous';
};

input.addEventListener('input', addSpanText);
