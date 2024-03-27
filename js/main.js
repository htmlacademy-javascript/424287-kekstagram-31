import './create-miniatures.js';
import './popup.js';
import './comments-list.js';
import './form-validate.js';
import './photo-resize.js';
import './effect-slider.js';
import './api.js';

import {renderSimilarPhotos} from './create-miniatures.js';
import {setUserFormSubmit, closeUserModal} from './form-validate.js';
import {getData} from './api.js';

import {showErrorDataMessage} from './util.js';
import {openPopUp} from './popup.js';

getData()
  .then((photos) => {
    renderSimilarPhotos(photos);
    openPopUp(photos);

  })

  .catch(() => {
    showErrorDataMessage();
  });

setUserFormSubmit(closeUserModal);
