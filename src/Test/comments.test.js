const CommentsPopup = require('../../__MOCK__/popup.js');

describe('Testing Comments', () => {
  it('Post', () => {
    // Arrange
    const comment = {
      item_id: 2,
      name: 'Amanuel',
      comment: 'Hello',
    };

    // Act
    const addComment = CommentsPopup.postComment(JSON.stringify(comment));

    // Assert
    expect(addComment).toBe(2);
  });

  it('Get Blog Topic By ID', () => {
    // Arrange
    const blogId = 2;

    // Act
    const getBlogBody = CommentsPopup.getBlogTopicByID(blogId);

    // Assert
    expect(getBlogBody).toEqual({
      id: 2,
      name: 'Marcus Garvey',
      email: 'marcus.garvey@gmail.com',
      body: 'Lorem ipsum dolor sit amet',
    });
  });

  it('Get all comments', () => {
    // Arrange
    const blogId = 2;

    // Act
    const result = CommentsPopup.getReservations(blogId);

    // Assert
    expect(result).toBe(2);
  });
});
