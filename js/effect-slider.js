import {image} from './resize-photo';
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelContainer = document.querySelector('.img-upload__effect-level');
const effectValueInput = document.querySelector('.effect-level__value');
const effectItem = document.querySelectorAll('.effects__item');
effectValueInput.value = 0;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  effectValueInput.value = sliderElement.noUiSlider.get();

});

for (let i = 0; i < effectItem.length;i++) {
  effectItem[i].addEventListener('click', () => {
    switch (i) {
      case 1:
        effectLevelContainer.classList.remove('hidden');

        image.style.filter = `scale(${effectValueInput.value})`;
        break;
      case 2:
        effectLevelContainer.classList.remove('hidden');

        image.style.filter = `sepia(${effectValueInput.value})`;
        break;
      case 3:
        effectLevelContainer.classList.remove('hidden');

        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100,
          },
          step: 1,
        });
        image.style.filter = `invert(${`${effectValueInput.value}%`})`;
        break;
      case 4:
        effectLevelContainer.classList.remove('hidden');

        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3,
          },
          step: 0.1,
        });
        image.style.filter = `blur(${`${effectValueInput.value}px`})`;
        break;
      case 5:
        effectLevelContainer.classList.remove('hidden');

        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          step: 0.1,
        });
        image.style.filter = `brightness(${effectValueInput.value})`;
        break;
      default:
        image.style.filter = 'unset';
        effectLevelContainer.classList.add('hidden');
    }

  });
}
