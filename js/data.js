import {randomElement} from './util.js';
import {getRandomInteger} from './util.js';
import {createRandomId} from './util.js';
const DESCRIPTION = [
  'Фотография сделана ранней осенью.',
  'Выложенная плиткой дорожка усыпана опавшими жёлтыми листьями.',
  'Вдоль дорожки с обеих сторон стройными рядами стоят деревья, ещё сохранившие летний наряд.',
  'Снимок вызывает чувство радости и беззаботности'
];
const NAMES = [
  'Иван',
  'Петр',
  'Мария',
  'Константин',
  'Виктор',
  'Юлия',
  'Лариса',
  'Василий'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const ID_START = 1;
const ID_END = 25;
// const MAX_NUMBERS_OF_COMMENTS = getRandomInteger(0,30);
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const NUMBER_OF_PHOTOS = 25;


// const generateCommentId = createRandomId(ID_START,ID_END);
const getNumberPhoto = createRandomId(ID_START,ID_END);
let j = 0;
const getComments = () => ({
  // id: generateCommentId(),
  id: j++,

  avatar: `img/avatar-${ getRandomInteger(1,6)}.svg`,
  message: randomElement(MESSAGES),
  name: randomElement(NAMES),
});
const similarComments = () =>
  Array.from({length: getRandomInteger(0,30)}, getComments);
let i = 0;
const describePhotos = () => ({
  // id: generateCommentId(),
  id: i++,
  url: `photos/${getNumberPhoto()}.jpg`,
  description: randomElement(DESCRIPTION),
  likes: getRandomInteger(MIN_LIKES,MAX_LIKES),
  comments: similarComments(),
});
const similarPhotos = () =>
  Array.from({length: NUMBER_OF_PHOTOS}, describePhotos);
export {similarPhotos,similarComments};


