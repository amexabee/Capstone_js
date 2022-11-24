import './asset/css/style.css';
import Main from './js/main.js';
import MakeApicall from './js/Todo.js';
import MakePopups from './modules/popup.js';
import Comments from './modules/comments.js';

const scorelist = document.querySelector('.scorelist');
const api = new MakeApicall();

const refresher = async () => {
  scorelist.innerHTML = '';
  const res = await api.getmethod();
  const main = new Main(res);

  main.username.forEach((usernames) => {
    if (usernames.id < 7) {
      scorelist.innerHTML += `
        <div class=outline>
        <div class="score">
        <p class="paragraph_url"><span>${
  usernames.id === 1
    ? 'First'
    : usernames.id === 2
      ? 'Second'
      : usernames.id === 3
        ? 'Third'
        : usernames.id === 4
          ? 'Fourth'
          : usernames.id === 5
            ? 'Fifth'
            : usernames.id === 6
              ? 'Sixth'
              : ''
}
        </span><span>Blog</span></p>
        </div>
        <div  class="title_url"> 
          <p class="paragraph_url"><span>${usernames.name}</span></p>
          <p class="paragraph_url"><span>Likes:</span></p>
        </div>
        <div class="like_comment">
        <button class="likes">Like</button>
          <button class="comment" id="${usernames.id}">Comment</button>
        </div>
        <div class="like_comment">
            <button class="Reservations" id="${
  usernames.id
}">Reservations</button>
        </div>
        </div>
      `;
    }
  });
  Comments.comments();
  MakePopups.reservationPopups();
};

document.addEventListener('DOMContentLoaded', refresher, false);
