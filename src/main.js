import './style.css';

import buildNavBar from './navBar/buildNavBar.js';
import buildHomePage from './homePage/buildHomePage.js';
import buildFooter from './footer/buildFooter.js';

const navBarContainer = document.querySelector('#navBar');
const appContainer = document.querySelector('#app');
const footerContainer = document.querySelector('#footer');

//Build each major piece of the home page and append it to the main #app container
navBarContainer.appendChild(buildNavBar());
appContainer.appendChild(buildHomePage());
footerContainer.appendChild(buildFooter());

setupCounter(document.querySelector('#counter'));
