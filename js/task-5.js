function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const clrButton = document.querySelector('.change-color');
const clrSpan = document.querySelector('.color');
const changeClr = event => {
  const valueOfColor = getRandomHexColor();
  clrSpan.textContent = valueOfColor;
  body.style.backgroundColor = valueOfColor;
};
clrButton.addEventListener('click', changeClr);
