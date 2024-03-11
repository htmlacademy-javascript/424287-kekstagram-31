const commentsList = document.querySelector('.social__comments');
const socialComment = document.createElement('li');
const commentAvatar = document.createElement('img');
const commentText = document.createElement('p');
socialComment.classList.add('social__comment');
commentAvatar.classList.add('social__picture');
commentAvatar.src = {}
commentAvatar.alt = {}
commentAvatar.width = 35;
commentAvatar.height = 35;
commentText.textContent = {}
commentText.classList.add('social__text');
commentsList.appendChild(socialComment);
socialComment.appendChild(commentAvatar);
socialComment.appendChild(commentText);


const commentsFragment = document.createDocumentFragment();


// similarMiniatures.forEach(({id,url,description,likes,comments}) => {

//   commentsFragment.appendChild(photo);

// });


{/* <li class="social__comment">
  <img
    class="social__picture"
    src="{{аватар}}"
    alt="{{имя комментатора}}"
    width="35" height="35">
  <p class="social__text">{{текст комментария}}</p>
</li> */}
