import './create-miniatures.js';
// import './popup.js';
import './comments-list.js';
import './form-validate.js';
import './photo-resize.js';
import './effect-slider.js';
import './api.js';

import {renderSimilarPhotos} from './create-miniatures.js';
import {setUserFormSubmit, closeUserModal} from './form-validate.js';
import {showErrorDataMessage} from './util.js';
// import {openBigPhoto} from './popup.js';
fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if(response.ok) {
      return response.json();
    } else {
      showErrorDataMessage();
    }
  })
  .then((photos) => {
    renderSimilarPhotos(photos);
  })
  .catch(() => {
    showErrorDataMessage();
  });

setUserFormSubmit(closeUserModal);

