import './create-miniatures.js';
import './popup.js';
import './form-validate.js';
import './photo-resize.js';
import './effect-slider.js';
import './api.js';
import './avatar.js';

import {renderSimilarPhotos,showFilter,setFilter} from './create-miniatures.js';
import {setUserFormSubmit, closeUserModal} from './form-validate.js';
import {getData} from './api.js';

import {showErrorDataMessage} from './util.js';
import {openPopUp} from './popup.js';

getData()
  .then((photos) => {
    renderSimilarPhotos(photos);
    setFilter(()=>{
      renderSimilarPhotos(photos);
    });
    openPopUp(photos);
  })
  .then(() => {
    showFilter();
  })
  .catch(() => {
    showErrorDataMessage();
  });

setUserFormSubmit(closeUserModal);
