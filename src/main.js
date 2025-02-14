import './style.css';

import buildNavBar from './navBar/buildNavBar.js';
import buildHomePage from './homePage/buildHomePage.js';
import buildProjectPage from './projectPage/buildProjectPage.js';
import buildAboutPage from './about/aboutPage.js';
import buildFooter from './footer/buildFooter.js';

// Build header and footer on every page
// Build main page content depending on window.location

console.log(window.location.pathname);

buildNavBar();

switch (window.location.pathname) {
    case `/projectPortfolio/index.html`:
        buildHomePage();
        break;
    case `/projectPortfolio/project.html`:
        buildProjectPage();
        break;
    case `/projectPortfolio/about.html`:
        buildAboutPage();
        break;

    default:
        buildHomePage();
        break;
}

buildFooter();