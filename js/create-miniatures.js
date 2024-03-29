
const similarPictures = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content.querySelector('.picture');
const btnDiscussed = document.getElementById('filter-discussed');
const getLike = (photo) => {
  const like = photo.likes;
  return like;
};
const compareLikes = (photoA, photoB) => {
  const likeA = getLike(photoA);
  const likeB = getLike(photoB);
  return likeB - likeA;
};
const setFilter = (similarMiniatures) => {
  btnDiscussed.addEventListener('click', () => {

    console.log(similarMiniatures);
    // cb());
    // console.log(cb);
  });
};

const renderSimilarPhotos = (similarMiniatures) => {

  const miniaturesFragment = document.createDocumentFragment();

  similarMiniatures
    .slice()
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
const showFilter = () =>
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');


export {renderSimilarPhotos, similarPictures,showFilter,setFilter};

