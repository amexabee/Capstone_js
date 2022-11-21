import './style.css';

const addbtn = document.querySelector('.add');
const headerhidden = document.querySelector('.header');

addbtn.addEventListener('click', () => {
  headerhidden.classList.add('headerhidden');
});