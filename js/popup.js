import {similarPictures} from './create-miniatures.js';
const COUNT_COMMENTS = 5;
const popup = document.querySelector('.big-picture');
const likeCounter = popup.querySelector('.likes-count');
const closeButton = popup.querySelector('#picture-cancel');
const fullPhoto = document.querySelector('.big-picture__img');
const photoUrl = fullPhoto.querySelector('img');
const numberOfComments = document.querySelector('.social__comment-total-count');
const photoDescription = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-shown-count');
const commentsList = document.querySelector('.social__comments');
const commentsFragment = document.createDocumentFragment();
const buttonNextComment = document.querySelector('.comments-loader');
let currentCount = 0;
let arrOfcomments = [];

const openModal = () => {
  popup.classList.remove('hidden');
};
const clearListOfComments = () => {
  currentCount = 0;
  commentsList.innerHTML = '';

};
const closeModal = () => {
  clearListOfComments();
  popup.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

};

const onDocumentKeydown = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
    clearListOfComments();

  }
};
const createComment = (comment) => {

  const list = document.createElement('li');
  const commentAvatar = document.createElement('img');
  const commentText = document.createElement('p');
  list.classList.add('social__comment');
  commentAvatar.classList.add('social__picture');
  commentAvatar.width = 35;
  commentAvatar.height = 35;
  commentText.classList.add('social__text');
  list.appendChild(commentAvatar);
  list.appendChild(commentText);

  commentText.textContent = comment.message;
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;

  commentsFragment.appendChild(list);

};
const renderNewComments = () => {

  const arr = arrOfcomments.slice(currentCount,currentCount + COUNT_COMMENTS);

  arr.forEach(({avatar,message,name}) => {

    createComment({avatar,message,name});

    socialCommentCount.textContent = arr.length + currentCount;

    if (arr.length + currentCount < arrOfcomments.length) {
      buttonNextComment.classList.remove('hidden');
    } else {
      buttonNextComment.classList.add('hidden');
    }
    commentsList.appendChild(commentsFragment);

  });
  currentCount += COUNT_COMMENTS;
};
const renderComments = (currentComments) => {
  arrOfcomments = currentComments;
  renderNewComments();
  buttonNextComment.addEventListener('click', renderNewComments);

};
commentsList.innerHTML = '';
const openPopUp = (miniatures) => {
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


          renderComments(comments);

        }

      });
    }
    document.querySelector('body').classList.add('modal-open');
  }
  );
  document.addEventListener('keydown', onDocumentKeydown);

};

closeButton.addEventListener('click', closeModal);

export {openPopUp};
