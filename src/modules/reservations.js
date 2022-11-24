export default class MakeReservations {
  constructor() {
    this.BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qvkLjRRWATbZfhQ7TGpS/reservations';
  }

  static async getReservations(id) {
    const scores = await fetch(this.BASE_URL.concat('?item_id=', id), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => this.displayReservations(json.result));
    return scores;
  }

  static displayReservations(data) {
    const ul = document.getElementById('ul');
    data.forEach((element) => {
      const li = document.createElement('li');
      li.setAttribute('class', 'score-li');
      li.innerHTML = `<span>${element.user}</span> : <span>${element.score}</span>`;
      ul.appendChild(li);
    });
  }
}