export default class PopupModal {
  static managePopups() {
    const popup = document.querySelector('.popup-modal');
    const reservationDiv = document.querySelectorAll('.Reservations');
    const bodydiv = document.getElementById('popup-body-id');
    reservationDiv.forEach((div) => {
      div.addEventListener('click', () => {
        const id = parseInt(div.getAttribute('id'), 10);
        popup.style.display = 'block';
        bodydiv.style.overflowY = 'none';
        popup.innerHTML += `
            <div class="inner-div">
              <div class="popup-close" onclick="document.querySelector('.popup-modal').style.display = 'none';">&times;</div>
              <div class="image-div">
                <picture>
                  <img src="./img.JPG" alt="${id}" srcset="" class="actual-image">
                </picture>
              </div>
              <div class="popup-body-content">
                <p class="popup-title"><span>id labore ex et quam laborum</span></p>
                <section class="content-body">
                  <p>laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium</p>
                </section>
                <p class="popup-title-2"><span>Comments (2)</span></p>
                <div class="comments-div">
                  <div class="single-comment">
                    <p>laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium</p>
                    <div-footer>
                      <span class="person-name">By: id labore ex et quam laborum</span> <span class="email"> ( Eliseo@gardner.biz )</span>
                    </div-footer>
                  </div>          
                  <div class="single-comment">
                    <p>laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium</p>
                    <div-footer>
                      <span class="person-name">By: id labore ex et quam laborum</span> <span class="email"> ( Eliseo@gardner.biz )</span>
                    </div-footer>
                  </div>
                </div>
              </div>
              <div class="form-body">
                <p class="popup-title-2"><span>Submit your comment</span></p>
                <form action="" method="post" class="comment-form">
                  <input type="text" id="name" placeholder="Enter your name" required class="input">
                  <input type="email" id="email" placeholder="Enter your email" required class="input">
                  <textarea id="comment" placeholder="Enter your name" required class="comment-textarea"></textarea>
                  <input type="button" value="Submit" class="input-btn">
                </form>
              </div>
            </div>
        `;
      });
    });
  }
}
