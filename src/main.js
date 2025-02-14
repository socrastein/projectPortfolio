import './style.css';

import buildNavBar from './navBar/buildNavBar.js';
import buildHomePage from './homePage/buildHomePage.js';
import buildProjectPage from './projectPage/buildProjectPage.js';
import buildAboutPage from './about/aboutPage.js';
import buildFooter from './footer/buildFooter.js';

// Build header and footer on every page
// Build main page content depending on window.location

buildNavBar();

switch (window.location.pathname) {
    case `/projectPortfolio/index.html`:
        console.log("Home page");
        buildHomePage();
        break;
    case `/projectPortfolio/project.html`:
        console.log("Project page");
        // buildProjectPage() needs the project class object passed to it,
        // so this is handled within the eventListener for the project page link
        break;
    case `/projectPortfolio/about.html`:
        console.log("About page");
        buildAboutPage();
        break;

    default:
        console.log("Defaulting to home page");
        buildHomePage();
        break;
}

buildFooter();