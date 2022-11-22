import './style.css';
import Main from './main.js';
import MakeApicall from './Todo.js';
import './img/heart.svg';
import MakePopups from './popup.js';

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
          <button class="comment">Comment</button>
        </div>
        <div class="like_comment">
            <button class="Reservations" id="${usernames.id}">Reservations</button>
        </div>
        </div>
      `;
    }
  });
};

document.addEventListener('DOMContentLoaded', refresher, false);

window.onload = () => {
  setTimeout(MakePopups.managePopups(), 5000);
};
