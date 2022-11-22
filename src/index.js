import './style.css';
import Leaderboard from './main.js';
import MakeApicall from './Todo.js';
import './img/heart.svg';

const scorelist = document.querySelector('.scorelist');
const api = new MakeApicall();

const refresher = async () => {
  scorelist.innerHTML = '';
  const res = await api.getmethod();
  const Leaderboards = new Leaderboard(res);

  Leaderboards.username.forEach((usernames) => {
    if (usernames.id < 7) {
      scorelist.innerHTML += `
  
  <div>
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
   <div>
    <p class="paragraph_url"><span>${usernames.name}</span></p>
   </div>
   <div class="like_comment">
   <button class="likes">Like</button>
     <button class="comment">Comment</button>
   </div>

   <div class="like_comment">
   <button class="Reservations">Reservations</button>
   </div>
  </div>

  `;
    }
  });
};

document.addEventListener('DOMContentLoaded', refresher, false);
