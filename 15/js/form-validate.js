import {imageContainer} from './photo-resize.js';
import {effectLevelContainer,effectsInput} from './effect-slider.js';
import {showErrorMessage} from './util.js';
import {sendData} from './api.js';

const COMMENT_LENGTH = 140;
const NUMBER_HASHTAGS = 5;
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};
const submitButton = document.querySelector('.img-upload__submit');
const uploadImg = document.querySelector('.img-upload__input');
const closeButton = document.querySelector('.img-upload__cancel');
const popupEditPhoto = document.querySelector('.img-upload__overlay');
const uploadPhoto = document.querySelector('.img-upload__input');
const uploadForm = document.querySelector('.img-upload__form');
const tagText = uploadForm.querySelector('.text__hashtags');
const commentText = uploadForm.querySelector('.text__description');
const imagePreview = uploadForm.querySelector('.img-upload__preview img');


const showSuccessMessage = () => {
  const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
  const successMessageFragment = document.createDocumentFragment();
  const message = successMessageTemplate.cloneNode(true);
  message.classList.add('hidden');
  successMessageFragment.appendChild(message);
  document.body.appendChild(successMessageFragment);
};
const closeModal = () => {
  // if (evt.target === tagText || evt.target === commentText || evt.target.closest('.effects__list') || evt.target.closest('.img-upload__effect-level') || evt.target.closest('.img-upload__submit')) {
  //   evt.stopPropagation();
  // } else {
  popupEditPhoto.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  uploadPhoto.value = '';
  imageContainer.style.transform = 'unset';
  imageContainer.style.filter = 'none';
  effectLevelContainer.classList.add('hidden');
  effectsInput.value = 'none';
  imageContainer.style.transform = 'scale(1)';
  imagePreview.style.transform = 'scale(1)';
  uploadForm.reset();


  // }
  // document.removeEventListener('keydown', onDocumentKeydown);
};
const closeSuccessMessage = () => {
  document.querySelector('.success').classList.add('hidden');
  closeModal();
};

const onDocumentKeydown = (evt) => {

  if(evt.key === 'Escape') {
    evt.preventDefault();
    if (evt.target === tagText || evt.target === commentText) {
      evt.stopPropagation();
    } else {
      closeModal();
      closeSuccessMessage();
    }
  }
};


uploadImg.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
});


//Условия для валидности
const pristine = new Pristine(uploadForm,{
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'

});
const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;
const validateHashtag = (value) => {
  if(value === '') {
    return true;
  }
  const arr = value.trim().split(' ');
  return arr.every((elem) => hashtag.test(elem));
};

function validateCountOfHashtags (value) {
  const arr = value.trim().split(' ');
  if(arr.length <= NUMBER_HASHTAGS) {
    return true;
  }
}
const validateComment = (value) =>
  value.length <= COMMENT_LENGTH;


const validateRepeatHashes = (value) => {
  const arr = value.trim().split(' ');
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }

  return !duplicates.length > 0;


};
// Проверка формы на валидность
pristine.addValidator(tagText, validateHashtag,'Введите валидный хэштег');
pristine.addValidator(tagText, validateCountOfHashtags,'Нельзя указывать больше пяти хэштегов');
pristine.addValidator(tagText, validateRepeatHashes,'Нельзя указывать одинаковые хэштеги');

pristine.addValidator(commentText, validateComment,'Длина комментария не должна быть больше 140 символов');
showSuccessMessage();
// createErrorMessage();

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};
const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(uploadForm))
        .then(onSuccess)
        .catch(() => {
          showErrorMessage();
        })
        .finally(unblockSubmitButton);
    }
  });
};
const closeUserModal = () => {
  document.querySelector('.success').classList.remove('hidden');
  const closeBtn = document.querySelector('.success__button');
  closeBtn.addEventListener('click', closeSuccessMessage);

};
document.addEventListener('keydown', onDocumentKeydown);

closeButton.addEventListener('click', closeModal);
// closeModalBtn.addEventListener('click',closeModal);
// document.querySelector('.img-upload__overlay').addEventListener('click', closeModal);
export {setUserFormSubmit, closeUserModal};
