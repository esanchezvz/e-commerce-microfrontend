import faker from 'faker';

/**
 *
 * @param {HTMLElement} el
 */
export const mount = (el) => {
  const text = `<div>You have ${faker.random.number(25)} items in your cart.</div>`;

  el.innerHTML = text;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');
  // Assuming our container does not have an element with same id
  if (el) {
    // only run in isolation
    mount(el);
  }
}
