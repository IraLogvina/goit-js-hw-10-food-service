
import template from './template.hbs';
import menuItem from './menu.json';

const menu = document.querySelector('.js-menu');
const buildMenu = template(menuItem);

menu.insertAdjacentHTML('beforeend', buildMenu);
