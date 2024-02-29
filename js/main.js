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
const MAX_NUMBERS_OF_COMMENTS = 30;
const MIN_LIKES = 15;
const MAX_LIKES = 200;


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomId = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};
const randomElement = (elem) => elem[getRandomInteger(0, elem.length - 1)];


const getComments = () => {


  const arrayOfComments = [];
  for(let i = 1; i <= MAX_NUMBERS_OF_COMMENTS; i++) {
    arrayOfComments.push({
      id: i,
      avatar: `img/avatar-${ getRandomInteger(1,6)}.svg`,
      message: randomElement(MESSAGES),
      name: randomElement(NAMES),
    });
  }
  return arrayOfComments;
};

// const similarComments = Array.from({length: 30}, getComments);

const describePhotos = () => {
  const randomIdIndex = createRandomId(ID_START,ID_END);


  return {
    id: randomIdIndex(),
    url: `photos/${ randomIdIndex() }.jpg`,
    description: randomElement(DESCRIPTION),
    likes: getRandomInteger(MIN_LIKES,MAX_LIKES),
    comments: getComments()
  };
};
const similarPhotos = Array.from({length: 25}, describePhotos);

similarPhotos();
// console.log(similarPhotos);
// console.log(similarComments);
// console.log(getComments());


