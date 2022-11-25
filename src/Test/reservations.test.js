const ReservationsPopup = require('../../__MOCK__/popup.js');

describe('Testing Reservations Module', () => {
  it('Post Reservation', () => {
    // Arrange
    const reservation = {
      item_id: 2,
      username: 'Marcus Garvey',
      date_start: '2022-11-24',
      date_end: '2022-11-26',
    };
    const jsonifyData = JSON.stringify(reservation);

    // Act
    const addReservation = ReservationsPopup.postReservation(jsonifyData);

    // Assert
    expect(addReservation).toBe(2);
  });

  it('Get Blog Topic By ID', () => {
    // Arrange
    const blogId = 2;

    // Act
    const getBlogBody = ReservationsPopup.getBlogTopicByID(blogId);

    // Assert
    expect(getBlogBody).toEqual({
      id: 2, name: 'Marcus Garvey', email: 'marcus.garvey@gmail.com', body: 'Lorem ipsum dolor sit amet',
    });
  });

  it('Get all Blog Topic Reservations', () => {
    // Arrange
    const blogId = 2;

    // Act
    const result = ReservationsPopup.getReservations(blogId);

    // Assert
    expect(result).toBe(2);
  });
});
