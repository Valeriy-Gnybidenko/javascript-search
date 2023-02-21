import './template.html';
import './assets/styles/index.scss';

const input = document.querySelector('.search__input');
const products = document.querySelectorAll('.search__product');

const onInput = (e) => {
  let inputData = e.target.value.toLowerCase().trim();

  products.forEach((product) => {
    let name = product
      .querySelector('.search__product-name')
      .innerHTML.toLowerCase()
      .trim();

    console.log(name);
    if (!name.includes(inputData)) {
      product.style.display = 'none';
    } else {
      product.style.display = 'flex';
    }
  });
};

input.addEventListener('input', onInput);
