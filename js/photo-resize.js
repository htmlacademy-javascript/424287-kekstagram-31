const STEP = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;
const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imageContainer = document.querySelector('.img-upload__preview');
const imageUpload = document.querySelector('.img-upload__preview img');
const inputValue = document.querySelector('.scale__control--value');
let value = parseInt(scaleValue.value, 10);

btnSmaller.addEventListener('click', () => {
  value = scaleValue.value.replace('%', ' ');

  if (value > MIN_VALUE) {

    value -= STEP;

    imageUpload.style.transform = `scale(${value / 100})`;
    inputValue.value = value;
    scaleValue.value = `${value}%`;

  }
});
btnBigger.addEventListener('click', () => {
  value = parseInt(scaleValue.value, 10);


  if (value < MAX_VALUE) {
    value += STEP;
    imageUpload.style.transform = `scale(${value / 100})`;
    inputValue.value = value;
    scaleValue.value = `${value}%`;

  }
});
export {imageUpload,imageContainer};
