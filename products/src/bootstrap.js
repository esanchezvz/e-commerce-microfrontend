import faker from 'faker';

/**
 *
 * @param {HTMLElement} el
 */
export const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();

    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  // Assuming our container does not have an element with same id
  if (el) {
    // only run in isolation
    mount(el);
  }
}
