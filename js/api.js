const getData = () => fetch(
  'https://31.javascript.htmlacademy.pro/code-and-magick/data')
  .then((response) => response.json());

const sendData = (body) => {};

export {getData, sendData};
