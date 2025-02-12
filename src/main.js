import './style.css';

import buildNavBar from './navBar/buildNavBar.js';
import buildHomePage from './homePage/buildHomePage.js';
import buildFooter from './footer/buildFooter.js';



//Build each major piece of the home page and append it to the main #app container
buildNavBar();
buildHomePage();
buildFooter();

