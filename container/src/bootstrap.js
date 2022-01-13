import { mount as mountProducts } from 'products/list';
import { mount as mountCart } from 'cart/text';

mountProducts(document.querySelector('#my-products'));
mountCart(document.querySelector('#my-cart'));
