function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector('#boxes');
const inputAmount = document.querySelector('[type = "number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

const size = {
  width: 20,
  height: 20,
};

const createBoxes = amount => {
  if (amount > 0 && amount <= 100) {
    for (let i = 0; i < amount; i += 1) {
      size.width += 10;
      size.height += 10;
      const creation = `<div  style = " width:${size.width}px; height :${
        size.height
      }px; background-color:${getRandomHexColor()}"> </div> `;
      boxes.insertAdjacentHTML('beforeend', creation);
    }
  }
  inputAmount.value = '';
};
btnCreate.addEventListener('click', e => {
  const amount = inputAmount.value;
  getRandomHexColor();
  createBoxes(amount);
});

const destroyBoxes = event => {
  boxes.innerHTML = '';
};

btnDestroy.addEventListener('click', e => {
  destroyBoxes(e);
  size.width = 20;
  size.height = 20;
});
