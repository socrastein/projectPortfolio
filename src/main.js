import './styles/base.css';
import './styles/buttons.css';
import './styles/containers.css';
import './styles/picsAndIcons.css';
import './styles/animations.css';
import './styles/text.css';

import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './components/App.vue';

// These are the different pageView components that load main content for a page
import HomeView from './components/pageViews/HomeView.vue';
import AboutView from './components/pageViews/AboutView.vue';
import ProjectsView from './components/pageViews/ProjectsView.vue';
import ProjectView from './components/pageViews/ProjectView.vue';

// Set pathing and components to load for each page
const routes = [

    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/projects/:projectName', component: ProjectView }

];
const router = createRouter(
    {
        
        history: createWebHashHistory(), routes: [

            { path: '/', name: 'home', component: HomeView },
            { path: '/about', name: 'about', component: AboutView },
            { path: '/projects', name: 'projects', component: ProjectsView },
            { path: '/projects/:projectName', component: ProjectView, props: true },

        ],

        scrollBehavior(to, from, savedPosition) {
            // Scroll to top of page
            return { top: 0 };
        }
    }
);
//

import { setThemeColorFromLocalStorage } from './colorTheme/colorTheme.js';
// Changes the --themeColor root variable to the locally stored value
setThemeColorFromLocalStorage();

// import buildNavBar from './navBar/buildNavBar.js';
// import buildHomePage from './homePage/buildHomePage.js';
// import { buildProjectCards } from './homePage/buildHomePage.js';
// import buildProjectPage from './projectPage/buildProjectPage.js';
// import buildAboutPage from './about/aboutPage.js';
// import buildFooter from './footer/buildFooter.js';

// Build header and footer on every page
// Build main page content depending on window.location


// buildNavBar();

const app = createApp(App).use(router);
app.mount('#app');



// buildFooter();

function loadProjectObject() {
    const storedProject = sessionStorage.getItem("storedProject");
    const parsedObject = JSON.parse(storedProject);
    return parsedObject;
}