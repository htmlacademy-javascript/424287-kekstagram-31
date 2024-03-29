
const similarPictures = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content.querySelector('.picture');
const filterForm = document.querySelector('.img-filters__form');
const buttonChangeFilter = document.querySelector('img-filters__button');
const getLike = (photo) => {
  const like = photo.likes;
  return like;
};
const compareLikes = (photoA, photoB) => {
  const likeA = getLike(photoA);
  const likeB = getLike(photoB);
  return likeB - likeA;
};

const renderSimilarPhotos = (similarMiniatures) => {

  const miniaturesFragment = document.createDocumentFragment();
  similarMiniatures
    // .slice()
    // .sort(compareLikes)
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
  filterForm.addEventListener('click', (evt) => {

    if(evt.target.id === 'filter-discussed') {
      evt.target.classList.add('img-filters__button--active');
      const newPosts = [...posts];
      renderSimilarPhotos(newPosts.sort((a,b) => b.likes - a.likes));
    }
  });
};
const setFilter = (posts) => {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  renderSimilarPhotos(posts);
  changeFilter(posts);
};

export {renderSimilarPhotos, similarPictures,setFilter};

