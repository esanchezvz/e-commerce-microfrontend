import faker from 'faker';

const text = `<div>You have ${faker.random.number(25)} items in your cart.</div>`;

document.querySelector('#dev-cart').innerHTML = text;
