import {imageContainer} from './photo-resize';
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelContainer = document.querySelector('.img-upload__effect-level');
const effectList = document.querySelector('.effects__list');
const valueElement = document.querySelector('.effect-level__value');
const effectsInput = document.querySelector('.effects__radio');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
});

const EFFECTS = [
  {
    name: 'chrome',
    min: 0,
    max: 1,
    step: 0.1,
    style: 'grayscale',
    unit: ''
  },
  {
    name: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    style: 'sepia',
    unit: ''
  },
  {name: 'marvin',
    min: 0,
    max: 100,
    step: 1,
    style: 'invert',
    unit: '%'
  },
  {name: 'phobos',
    min: 0,
    max: 3,
    step: 0.1,
    style: 'blur',
    unit: 'px'
  },
  {name:'heat',
    min: 1,
    max: 3,
    step: 0.1,
    style: 'brightness',
    unit: ''
  },
  {
    name: 'none',
    min: 0,
    max: 1,
    style: 'none',
    unit: ''
  }
];
effectLevelContainer.classList.add('hidden');

effectList.addEventListener('change', (evt) => {

  const selectedEffect = EFFECTS.find((effect) => effect.name === evt.target.value);

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: selectedEffect.min,
      max: selectedEffect.max
    },
    step: selectedEffect.step,
    start: selectedEffect.min
  });
  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    imageContainer.style.filter = `${selectedEffect.style}(${valueElement.value}${selectedEffect.unit})`;
    if(selectedEffect.name === 'none') {
      effectLevelContainer.classList.add('hidden');
      imageContainer.style.filter = `${selectedEffect.style}`;

    } else {
      effectLevelContainer.classList.remove('hidden');
      effectsInput.value = imageContainer.style.filter;
    }
  });
});

export {effectsInput,effectLevelContainer};
