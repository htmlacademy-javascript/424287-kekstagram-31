import {similarPictures,similarMiniatures} from './create-miniatures.js';
import {similarComments} from './data.js';

const popup = document.querySelector('.big-picture');
const likeCounter = popup.querySelector('.likes-count');
const closeButton = popup.querySelector('#picture-cancel');
const fullPhoto = document.querySelector('.big-picture__img');
const photoUrl = fullPhoto.querySelector('img');
const numberOfComments = document.querySelector('.social__comment-total-count');
const photoDescription = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const miniatures = similarMiniatures;

const openModal = () => {

  popup.classList.remove('hidden');

};
/* ------*/
const commentsFragment = document.createDocumentFragment();
const commentArray = similarComments();
const commentsList = document.querySelector('.social__comments');
commentsList.innerHTML = '';
const list = document.createElement('li');
const commentAvatar = document.createElement('img');
const commentText = document.createElement('p');

const createCommentTemplate = () => {
  list.classList.add('social__comment');
  commentAvatar.classList.add('social__picture');
  commentAvatar.width = 35;
  commentAvatar.height = 35;
  commentText.classList.add('social__text');
  list.appendChild(commentAvatar);
  list.appendChild(commentText);
  commentAvatar.width = 35;
  commentAvatar.height = 35;
};
const comment = () => {
  commentArray.forEach(({avatar,message,name}) => {

    createCommentTemplate();
    commentText.textContent = message;
    commentAvatar.src = avatar;
    commentAvatar.alt = name;

    commentsFragment.appendChild(list);

  });

};


similarPictures.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')){
    evt.preventDefault();
    openModal();
    miniatures.forEach(({id,url,likes,comments,description}) => {
      if(Number(evt.target.dataset.id) === id) {
        photoUrl.src = url;
        likeCounter.textContent = likes;
        numberOfComments.textContent = comments.length;
        photoDescription.textContent = description;

        comment();


      }
    });
    commentsList.appendChild(commentsFragment);

    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');
  }
});
/* ------*/
const closeModal = () => {
  popup.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  // document.removeEventListener('keydown', onDocumentKeydown);

};
const onDocumentKeydown = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};

document.addEventListener('keydown', onDocumentKeydown);

closeButton.addEventListener('click', closeModal);
document.querySelector('.overlay').addEventListener('click', closeModal);


