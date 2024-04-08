const ALERT_SHOW_TIME = 5000;
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomId = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= max - min + 1) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};
const randomElement = (elem) => elem[getRandomInteger(0, elem.length - 1)];
const showErrorDataMessage = () => {
  const errorMessageTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
  const errorMessageFragment = document.createDocumentFragment();
  const message = errorMessageTemplate.cloneNode(true);
  errorMessageFragment.appendChild(message);
  document.body.appendChild(errorMessageFragment);
  setTimeout(() => {
    message.classList.add('hidden');
  }, ALERT_SHOW_TIME);
};

const errorTemplate = document.querySelector('#error').content;
const successTemplate = document.querySelector('#success').content;
const OnButtonKeydown = (evt) => {
  evt.stopPropagation();
  const existElement = document.querySelector('.error') || document.querySelector('.success');
  if (evt.key === 'Escape') {
    existElement.remove();
    document.body.removeEventListener('keydown', OnButtonKeydown);

  }
};
const OnButtonClick = (evt) => {
  const existElement = document.querySelector('.error') || document.querySelector('.success');
  const closeModalBtn = existElement.querySelector('button');
  if (evt.target === existElement || evt.target === closeModalBtn) {
    existElement.remove();
    document.body.removeEventListener('click', OnButtonClick);
  }
};
const showNotice = (template, trigger = null) => {
  trigger?.();
  const message = template.cloneNode(true);
  document.body.append(message);
  document.body.addEventListener('click', OnButtonClick);
  document.body.addEventListener('keydown', OnButtonKeydown);

};

const debounce = (callback, timeoutDelay = 500) => {

  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
export {randomElement};
export {getRandomInteger};
export {createRandomId};
export {showErrorDataMessage,debounce,showNotice,errorTemplate,successTemplate};
