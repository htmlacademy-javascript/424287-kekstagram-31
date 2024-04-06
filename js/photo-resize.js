const STEP = 25;
const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imageContainer = document.querySelector('.img-upload__preview');
const imageUpload = document.querySelector('.img-upload__preview img');
const inputValue = document.querySelector('.scale__control--value');
const minValue = 25;
const maxValue = 100;
let value = parseInt(scaleValue.value, 10);

btnSmaller.addEventListener('click', () => {
  value = scaleValue.value.replace('%', ' ');

  if (value > minValue) {

    value -= STEP;

    imageUpload.style.transform = `scale(${value / 100})`;
    inputValue.value = value;
    scaleValue.value = `${value}%`;

  }
});
btnBigger.addEventListener('click', () => {
  value = parseInt(scaleValue.value, 10);


  if (value < maxValue) {
    value += STEP;
    imageUpload.style.transform = `scale(${value / 100})`;
    inputValue.value = value;
    scaleValue.value = `${value}%`;

  }
});
export {scaleValue,imageUpload,imageContainer};
