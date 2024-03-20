const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imageContainer = document.querySelector('.img-upload__preview');
const image = imageContainer.querySelector('img');
const inputValue = document.querySelector('.scale__control--value');
const STEP = 25;
const minValue = 25;
const maxValue = 100;
scaleValue.value = 100;
let value = parseInt(scaleValue.value,10);

btnSmaller.addEventListener('click', () => {

  if (scaleValue.value > minValue) {

    value -= STEP;

    image.style.transform = `scale(${value / 100})`;
    scaleValue.value = value;
    // scaleValue.value = `${value}%`;
    inputValue.value = value;
  }
});
btnBigger.addEventListener('click', () => {

  if (scaleValue.value < maxValue) {
    value += STEP;
    image.style.transform = `scale(${value / 100})`;
    scaleValue.value = value;
    inputValue.value = value;

  }
});
export {image};
