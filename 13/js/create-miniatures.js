import { debounce } from './util.js';
const TIME_OF_DELAY = 500;
const similarPictures = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content.querySelector('.picture');
const filterForm = document.querySelector('.img-filters__form');
const buttonsChangeFilter = document.querySelectorAll('.img-filters__button');

const renderSimilarPhotos = (similarMiniatures) => {

  const miniaturesFragment = document.createDocumentFragment();
  const pictures = document.querySelectorAll('.picture');

  for (const img of pictures) {
    similarPictures.removeChild(img);
  }


  similarMiniatures
    .forEach(({id,url,description,likes,comments}) => {
      const photo = photosTemplate.cloneNode(true);
      photo.querySelector('.picture__img').src = url;
      photo.querySelector('.picture__img').alt = description;
      photo.querySelector('.picture__likes').textContent = likes;
      photo.querySelector('.picture__comments').textContent = comments.length;
      photo.querySelector('.picture__img').dataset.id = id;

      miniaturesFragment.appendChild(photo);

    });
  similarPictures.appendChild(miniaturesFragment);

};
const changeFilter = (posts) => {

  filterForm.addEventListener('click', debounce(
    (evt) => {
      for (const btn of buttonsChangeFilter) {
        btn.classList.remove('img-filters__button--active');
      }
      evt.target.classList.add('img-filters__button--active');

      if(evt.target.id === 'filter-discussed') {
        const newPosts = [...posts];
        renderSimilarPhotos(newPosts.sort((a,b) => b.likes - a.likes));
      } else if (evt.target.id === 'filter-random'){
        const newPosts = [...posts];
        renderSimilarPhotos(newPosts.splice(0,10).sort(() => 0.5 - Math.random()));
      } else{
        renderSimilarPhotos(posts);
      }
    }), TIME_OF_DELAY);
};

const setFilter = (posts) => {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  renderSimilarPhotos(posts);
  changeFilter(posts);
};

export {renderSimilarPhotos, similarPictures,setFilter};
