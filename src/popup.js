export default class PopupModal {
  constructor() {
    this.test = null;
  }

  static childCounter(id) {
    const allReservationsDivs = document.querySelectorAll('.single-comment');
    const reservationCounters = document.getElementById('reservation-totals');
    if (id === 1) {
      reservationCounters.innerHTML = 0;
    } else {
      reservationCounters.innerHTML = allReservationsDivs.length;
    }
  }

  static async postReservation(data) {
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qvkLjRRWATbZfhQ7TGpS/reservations';
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
          div.innerHTML += `<div class="single-comment"><p>${data.date_start} - ${data.date_end} by ${data.username}</p></div>`;
          this.childCounter(0);
          document.querySelector('.comment-form').reset();
        }
      })
      .then((data) => data);
    return result;
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
      .then((data) => this.displayAllReservations(data))
      .catch(() => this.childCounter(1));
    return data;
  }

  static displayAllReservations(data) {
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

  static async getReservations(id) {
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qvkLjRRWATbZfhQ7TGpS/reservations';
    const results = await fetch(url.concat('?item_id=', id), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => this.displayReservetions(data));
    return results;
  }

  static displayReservetions(data) {
    const div = document.querySelector('.comments-all');
    data.forEach((element) => {
      const comdiv = document.createElement('div');
      comdiv.setAttribute('class', 'single-comment');
      const comp = document.createElement('p');
      comp.innerHTML = `${element.date_start} - ${element.date_end} by ${element.username}`;
      comdiv.appendChild(comp);
      div.appendChild(comdiv);
    });
    this.childCounter(0);
  }

  static reservationPopups() {
    const popup = document.querySelector('.popup-modal');
    const reservationDiv = document.querySelectorAll('.Reservations');
    const bodydiv = document.getElementById('popup-body-id');
    reservationDiv.forEach((div) => {
      div.addEventListener('click', () => {
        const id = parseInt(div.getAttribute('id'), 10);
        popup.style.display = 'block';
        bodydiv.style.overflowY = 'hidden';
        popup.innerHTML += `
            <div class="inner-div">
              <div class="popup-close" onclick="document.querySelector('.popup-modal').style.display = 'none'; window.location.reload();document.getElementById('popup-body-id').style.overflowY = 'visible';">&times;</div>
              <div class="image-div">
                 Blog <br> ${id}
              </div>
              <div class="popup-body-content">
                <div class="comment-headers"></div>
                <div class="comments-div">
                  <p class="popup-title-2"><span>Reservations (<span id="reservation-totals"></span>)</span></p>
                  <div class="comments-all"></div>
                </div>
              </div>
              <div class="form-body">
                <p class="popup-title-2"><span>Make your reservation</span></p>
                <div class="result"></div>
                <form action="#" method="post" class="comment-form">
                  <input type="hidden" id="item_id" value="${id}">
                  <input type="text" id="name" placeholder="Enter your name" required class="input">
                  <label for="datefrom" class="label">Reserve From</label>
                  <input type="date" id="datefrom" required class="input">
                  <label for="datefrom" class="label">Reserve From</label>
                  <input type="date" id="dateto" required class="input">
                  <input type="submit" value="Submit" class="input-btn" id="submitBtn">
                </form>
              </div>
            </div>
        `;
        this.getCommentsByID(id);
        this.getReservations(id);
        const addReserve = document.getElementById('submitBtn');
        addReserve.addEventListener('click', (e) => {
          e.preventDefault();
          const itemId = document.getElementById('item_id').value;
          const username = document.getElementById('name').value;
          const dateS = document.getElementById('datefrom').value;
          const dateT = document.getElementById('dateto').value;
          const data = {
            item_id: itemId,
            username: username,
            date_start: dateS,
            date_end: dateT,
          };
          if (itemId) {
            this.postReservation(data);
            document.querySelector('.comment-form').reset();
          }
        });
      });
    });
  }
}
