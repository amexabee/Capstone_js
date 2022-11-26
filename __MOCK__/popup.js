class PopupModal {
  static postReservation(newPost) {
    const reservations = [
      {
        item_id: 1,
        username: 'Jenipher Hudson',
        date_start: '2022-11-23',
        date_end: '2022-11-24',
      },
    ];
    reservations.push(JSON.parse(newPost));
    return reservations.length;
  }

  static postComment(newPost) {
    const comments = [
      {
        item_id: 1,
        name: 'Jenipher Hudson',
        comment: 'Hello',
      },
    ];
    comments.push(JSON.parse(newPost));
    return comments.length;
  }

  static getBlogTopicByID(index) {
    const blogTopics = [
      {
        id: 1,
        name: 'Jenipher Hudson',
        email: 'jenipher@gmail.com',
        body: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 2,
        name: 'Marcus Garvey',
        email: 'marcus.garvey@gmail.com',
        body: 'Lorem ipsum dolor sit amet',
      },
    ];

    let BlogBody = null;

    for (let i = 0; i < blogTopics.length; i += 1) {
      if (blogTopics[i].id === index) {
        BlogBody = blogTopics[i];
      }
    }

    return BlogBody;
  }

  static getReservations(index) {
    const reservations = [
      {
        item_id: 1,
        username: 'Jenipher Hudson',
        date_start: '2022-11-23',
        date_end: '2022-11-24',
      },
      {
        item_id: 2,
        username: 'Marcus Garvey',
        date_start: '2022-11-24',
        date_end: '2022-11-26',
      },
      {
        item_id: 2,
        username: 'Collins Marley',
        date_start: '2022-11-24',
        date_end: '2022-11-26',
      },
    ];

    let sum = 0;
    for (let i = 0; i < reservations.length; i += 1) {
      if (reservations[i].item_id === index) {
        sum += 1;
      }
    }

    return sum;
  }

  static getComments(index) {
    const comments = [
      {
        item_id: 1,
        name: 'Jenipher Hudson',
        comment: 'Hello',
      },
      {
        item_id: 2,
        username: 'Marcus Garvey',
        comment: 'Hi',
      },
    ];

    let sum = 0;
    for (let i = 0; i < comments.length; i += 1) {
      if (comments[i].item_id === index) {
        sum += 1;
      }
    }

    return sum;
  }
}

module.exports = PopupModal;
