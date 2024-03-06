import {similarPhotos} from './data.js';
const similarPictures = document.querySelector('.pictures');
const similarMiniatures = similarPhotos;

const photosTemplate = document.querySelector('#picture').content.querySelector('.picture');

const miniaturesFragment = document.createDocumentFragment();


similarMiniatures.forEach(({url,description,likes,comments}) => {
  const photo = photosTemplate.cloneNode(true);
  photo.querySelector('.picture__img').src = url;
  photo.querySelector('.picture__img').alt = description;
  photo.querySelector('.picture__likes').textContent = likes;
  photo.querySelector('.picture__comments').textContent = comments.length;

  miniaturesFragment.appendChild(photo);

});


similarPictures.appendChild(miniaturesFragment);
