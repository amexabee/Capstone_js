export default class Comments {
  static postDate() {
    const fullDate = new Date();
    return ''.concat(
      fullDate.getFullYear(),
      '-',
      fullDate.getMonth() + 1,
      '-',
      fullDate.getDate(),
    );
  }

  static childCounter(id) {
    const allReservationsDivs = document.querySelectorAll('.single-comment');
    const reservationCounters = document.getElementById('reservation-totals');
    if (id === 1) reservationCounters.innerHTML = 0;
    else reservationCounters.innerHTML = allReservationsDivs.length;
  }

  static async postNewComment(data) {
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qvkLjRRWATbZfhQ7TGpS/comments';
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok === true) {
          const div = document.querySelector('.comments-all');
          div.innerHTML += `<div class="single-comment"><p><span class="date-posted">${this.postDate()}</span>  ${
            data.username
          } : ${data.comment}</p></div>`;
          this.childCounter(0);
          document.querySelector('.comment-form').reset();
        }
      })
      .then((data) => data);
    return result;
  }

  static async getAllComments(id) {
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qvkLjRRWATbZfhQ7TGpS/comments';
    const results = await fetch(url.concat('?item_id=', id), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => this.displayAllComments(data))
      .catch(() => this.childCounter(1));
    return results;
  }

  static displayAllComments(data) {
    const div = document.querySelector('.comments-all');
    data.forEach((element) => {
      const comdiv = document.createElement('div');
      comdiv.setAttribute('class', 'single-comment');
      const comp = document.createElement('p');
      comp.innerHTML = `<span class="date-posted">${element.creation_date}</span>  ${element.username} : ${element.comment}`;
      comdiv.appendChild(comp);
      div.appendChild(comdiv);
    });
    this.childCounter(0);
  }

  static async getCommentsByID(id) {
    const url = 'https://jsonplaceholder.typicode.com/comments/';
    const data = await fetch(url.concat(id), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => this.displayComments(data));
    return data;
  }

  static displayComments(data) {
    const div = document.querySelector('.comment-headers');

    const nameP = document.createElement('p');
    nameP.setAttribute('class', 'popup-title');
    nameP.innerHTML = `<span>${data.name}</span>`;
    div.appendChild(nameP);

    const secBody = document.createElement('section');
    secBody.setAttribute('class', 'content-body');
    const bod = document.createElement('p');
    bod.innerHTML = `${data.body} <br> <span class="email">by ${data.email}</span>`;
    secBody.appendChild(bod);
    div.appendChild(secBody);
  }

  static comments() {
    const popup = document.querySelector('.popup-modal');
    const comment = document.querySelectorAll('.comment');
    const bodydiv = document.getElementById('popup-body-id');
    comment.forEach((div) => {
      div.addEventListener('click', () => {
        const id = parseInt(div.getAttribute('id'), 10);
        popup.style.display = 'block';
        bodydiv.style.overflowY = 'none';
        popup.innerHTML += `
              <div class="inner-div">
                <div class="popup-close" onclick="document.querySelector('.popup-modal').style.display = 'none'; window.location.reload();
                document.getElementById('popup-body-id').style.overflowY = 'visible';">&times;</div>
                <div class="image-div">
                  Blog <br> ${id}
                </div>
                <div class="popup-body-content">
                  <div class="comment-headers"></div>
                  <div class="comments-div">
                    <p class="popup-title-2"><span>Comments (<span id="reservation-totals"></span>)</span></p>
                    <div class="comments-all"></div>
                  </div>
                </div>
                <div class="form-body">
                  <p class="popup-title-2"><span>Submit your comment</span></p>
                  <form action="" method="post" class="comment-form">
                    <input type="hidden" id="item_id" value="${id}">
                    <input type="text" id="name" placeholder="Enter your name" required class="input">
                    <textarea id="comment" placeholder="Enter your comment" required class="comment-textarea"></textarea>
                    <input type="button" value="Submit" id="submitBtn" class="input-btn">
                  </form>
                </div>
              </div>
          `;
        this.getCommentsByID(id);
        this.getAllComments(id);
        const addNewComment = document.getElementById('submitBtn');
        addNewComment.addEventListener('click', (e) => {
          e.preventDefault();
          const itemId = document.getElementById('item_id').value;
          const username = document.getElementById('name').value;
          const newComment = document.getElementById('comment').value;
          const data = {
            item_id: itemId,
            username: username,
            comment: newComment,
          };
          if (itemId) {
            this.postNewComment(data);
            document.querySelector('.comment-form').reset();
          }
        });
      });
    });
  }
}
