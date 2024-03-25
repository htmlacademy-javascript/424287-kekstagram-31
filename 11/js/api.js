// import {showErrorDataMessage} from './util.js';
// const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
// const Route = {
//   GET_DATA: '/data',
//   SEND_DATA: '/',
// };
// const Method = {
//   GET: 'GET',
//   POST: 'POST',
// };
// const load = (route, errorText, method = Method.GET, body = null) =>
//   fetch(`${BASE_URL}${route}`, {method, body})
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error();
//       }
//       return response.json();
//     })
//     .catch(() => {
//       throw new Error(errorText);
//     });

// const getData = () => fetch(`${BASE_URL}${Route.GET_DATA}`)

//   .then((response) => {
//     if(response.ok) {
//       return response.json();
//     } else {
//       showErrorDataMessage();
//     }
//   });

// const sendData = (body) => {
//   fetch(`${BASE_URL}${Route.SEND_DATA}`,
//     {
//       method: 'POST',
//       body: ,
//     },
//   )
//     .then((response) => {
//       if (response.ok) {
//         onSuccess();
//       } else {
//         showErrorMessage();
//       }
//     })
//     .catch(() => {
//       showErrorMessage();
//     })
//     .finally(unblockSubmitButton);
// };

// export {getData, sendData};
