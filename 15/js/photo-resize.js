const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imageContainer = document.querySelector('.img-upload__preview');
const inputValue = document.querySelector('.scale__control--value');
const STEP = 25;
const minValue = 25;
const maxValue = 100;
let value = parseInt(scaleValue.value, 10);

btnSmaller.addEventListener('click', () => {
  value = scaleValue.value.replace('%', ' ');

  if (value > minValue) {

    value -= STEP;

    imageContainer.style.transform = `scale(${value / 100})`;
    inputValue.value = value;
    scaleValue.value = `${value}%`;

  }
});
btnBigger.addEventListener('click', () => {
  value = parseInt(scaleValue.value, 10);

  // value = scaleValue.value.replace('%', ' ');

  if (value < maxValue) {
    value += STEP;
    imageContainer.style.transform = `scale(${value / 100})`;
    inputValue.value = value;
    scaleValue.value = `${value}%`;

  }
});
export {imageContainer,scaleValue};
