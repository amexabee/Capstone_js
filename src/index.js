import './asset/css/style.css';
// base class and api call
import Main from './js/main.js';
import MakeApicall from './js/Todo.js';

import addBtn from './js/Likes/addBtn.js';
// Likes api and class
import LikesApi from './js/Likes/LikesApi.js';

import MakePopups from './modules/popup.js';
import Comments from './modules/comments.js';


// header
const header = document.querySelector('.div_header');
// container
const scorelist = document.querySelector('.scorelist');
// MakeApicall to object
const api = new MakeApicall();
// Like class to object
const apilike = new LikesApi();

const refresher = async () => {
  header.innerHTML = '';
  scorelist.innerHTML = '';

  // main api call
  const res = await api.getmethod();
  const main = new Main(res);
  // api likes
  const mainlike = await apilike.getmethod();
  for (let i = 0; i < mainlike.length; i += 1) {
    main.username.forEach((usernames) => {
      if (usernames.id < 7) {
        if (mainlike[i].item_id === usernames.id) {
          header.innerHTML = `
          <a class="logo"> <span>Blog</span> <span>logo</span> </a>
          <a class="Spaceships active"><span>Blogs(${usernames.id})</span></a>
          <a class="planets"> <span>comments</span> </a>
          <div></div>
          <a class="race"> <span>Login</span> </a>
          `;
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
    <p class="paragraph_url">  <span>Likes: ${mainlike[i].likes}</span></p>
   </div>
   <div class="like_comment">
   <button class="likes">Like</button>
     <button class="comment" id="${usernames.id}}">Comment</button>
   </div>

   <div class="like_comment">
   <button class="Reservations" id="${usernames.id}}">Reservations</button>
   </div>
  </div>

  `;
        }
      }
    });
  }

  for (let i = 0; i < document.querySelectorAll('.likes').length; i += 1) {
    document.querySelectorAll('.likes')[i].addEventListener('click', (e) => {
      e.preventDefault();

      addBtn(i);
      setTimeout(() => {
        refresher();
      }, 500);
    });
  }

  Comments.comments();
  MakePopups.reservationPopups();

};

document.addEventListener('DOMContentLoaded', refresher, false);