import './avatar.js';
import {setFilter} from './create-miniatures.js';
import {setUserFormSubmit,closeModal} from './form-validate.js';
import {getData} from './api.js';
import {showErrorDataMessage,successTemplate,showNotice} from './util.js';
import {openPopUp} from './popup.js';
getData()
  .then((photos) => {
    setFilter(photos);
    openPopUp(photos);
  })
  .catch(() => {
    showErrorDataMessage();
  });

setUserFormSubmit(() => {
  showNotice(successTemplate, () => closeModal());
});

