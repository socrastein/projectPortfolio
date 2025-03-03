import './style.css';

import { setThemeColorFromLocalStorage } from './colorTheme/colorTheme.js';

import buildNavBar from './navBar/buildNavBar.js';
import buildHomePage from './homePage/buildHomePage.js';
import { buildProjectCards } from './homePage/buildHomePage.js';
import buildProjectPage from './projectPage/buildProjectPage.js';
import buildAboutPage from './about/aboutPage.js';
import buildFooter from './footer/buildFooter.js';

// Build header and footer on every page
// Build main page content depending on window.location

setThemeColorFromLocalStorage();
buildNavBar();

switch (window.location.pathname) {
    case `/projectPortfolio/index.html`:
        console.log("Home page");
        buildHomePage();
        break;

    case `/projectPortfolio/projects.html`:
        console.log("Projects page");
        buildProjectCards();
        break;

    case `/projectPortfolio/project.html`:
        console.log("Project page");
        const storedProject = loadProjectObject();
        console.log(storedProject);
        buildProjectPage(storedProject);
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

function loadProjectObject() {
    const storedProject = sessionStorage.getItem("storedProject");
    const parsedObject = JSON.parse(storedProject);
    return parsedObject;
}