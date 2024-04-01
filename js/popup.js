import {similarPictures} from './create-miniatures.js';

const popup = document.querySelector('.big-picture');
const likeCounter = popup.querySelector('.likes-count');
const closeButton = popup.querySelector('#picture-cancel');
const fullPhoto = document.querySelector('.big-picture__img');
const photoUrl = fullPhoto.querySelector('img');
const numberOfComments = document.querySelector('.social__comment-total-count');
const photoDescription = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-shown-count');
const commentsList = document.querySelector('.social__comments');
// const commentsSet = document.querySelectorAll('.social__comment');
const commentsFragment = document.createDocumentFragment();
const ButtonNextComment = document.querySelector('.comments-loader');
const COUNT_COMMENTS = 5;
const currentCount = 0;


const openModal = () => {
  popup.classList.remove('hidden');
};
/* ------*/
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
          // console.log(comments);

          const ttt = () => {
            const arr = comments.slice(currentCount,currentCount + COUNT_COMMENTS);
            // console.log(arr);

            arr.forEach(({avatar,message,name}) => {

              createComment({avatar,message,name});
              socialCommentCount.textContent = arr.length;

              commentsList.innerHTML = '';

              if (comments.length > COUNT_COMMENTS) {
                ButtonNextComment.classList.remove('hidden');
              } else {
                ButtonNextComment.classList.add('hidden');
              }
            });
            // currentCount += COUNT_COMMENTS;
          };
          ttt();

        }
        // ButtonNextComment.addEventListener('click', ttt);

      });
    }
    commentsList.appendChild(commentsFragment);
    document.querySelector('body').classList.add('modal-open');
  }
  );
};

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
// document.querySelector('.overlay').addEventListener('click', closeModal);

export {openPopUp};
