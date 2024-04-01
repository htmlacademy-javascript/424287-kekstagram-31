import './create-miniatures.js';
import './popup.js';
import './form-validate.js';
import './photo-resize.js';
import './effect-slider.js';
import './api.js';
import './avatar.js';

import {setFilter} from './create-miniatures.js';
import {setUserFormSubmit, closeUserModal} from './form-validate.js';
import {getData} from './api.js';
import {showErrorDataMessage} from './util.js';
import {openPopUp} from './popup.js';
getData()
  .then((photos) => {
    setFilter(photos);
    openPopUp(photos);
  })
  .catch(() => {
    showErrorDataMessage();
  });

setUserFormSubmit(closeUserModal);

