// import {similarPhotos} from './data.js';
// console.log(miniatures);
// console.log(miniatures[0].url);
// const per = similarPictures.children;
// const per = document.querySelectorAll('.picture');
// console.log(per);
import {similarPictures,similarMiniatures} from './create-miniatures.js';
const popup = document.querySelector('.big-picture');
const likeCounter = popup.querySelector('.likes-count');
const closeButton = popup.querySelector('#picture-cancel');
const fullPhoto = document.querySelector('.big-picture__img');
const photoUrl = fullPhoto.querySelector('img');
const numberOfComments = document.querySelector('.social__comment-total-count');
const photoDescription = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
// const photos = similarPhotos();
const miniatures = similarMiniatures;

const openModal = () => {

  popup.classList.remove('hidden');

};
similarPictures.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')){
    evt.preventDefault();
    openModal();
    miniatures.forEach(({id,url,likes,comments,description}) => {
      if(Number(evt.target.dataset.id) === id) {
        console.log('hello');
      }
      photoUrl.src = evt.target.src;
      // photoUrl.src = url;
      likeCounter.textContent = likes;
      numberOfComments.textContent = comments.length;
      photoDescription.textContent = description;
    });
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');
  }
});
// similarPictures.addEventListener('click', (evt) => {
//   if (evt.target.closest('.picture')){
//     evt.preventDefault();
//     openModal();
//     miniatures.forEach(({url,likes,comments,description}) => {
//       photoUrl.src = evt.target.src;
//       // photoUrl.src = url;
//       likeCounter.textContent = likes;
//       numberOfComments.textContent = comments.length;
//       photoDescription.textContent = description;
//     });
//     socialCommentCount.classList.add('hidden');
//     commentsLoader.classList.add('hidden');
//     document.querySelector('body').classList.add('modal-open');
//   }
// });
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


closeButton.addEventListener('click', closeModal);

document.addEventListener('keydown', onDocumentKeydown);

