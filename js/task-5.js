function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector('.widget');
const clrButton = document.querySelector('.change-color');
const clrSpan = document.querySelector('.color');
const changeClr = event => {
  widget.parentNode.style.backgroundColor = getRandomHexColor();
  clrSpan.textContent = getRandomHexColor();
};
clrButton.addEventListener('click', changeClr);
