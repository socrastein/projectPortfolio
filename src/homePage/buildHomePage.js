import { getAllProjects } from "../projectPage/projectClass";
import { buildProjectCard } from "./buildProjectCard";

const appContainer = document.querySelector('#app');

export default function buildHomePage() {
    appContainer.innerHTML = '';
    appContainer.innerHTML += '<h1>This is my portfolio home page</h1>';

    buildProjectCards();
};

function buildHeading() {
    const container = document.createElement("div");
}

function buildProjectCards() {
    const projectsArray = getAllProjects();
    projectsArray.forEach((projectObject, index) => {
        setTimeout(() => {
            const projectElement = buildProjectCard(projectObject);
            appContainer.appendChild(projectElement);
        }, "300" * (index));

    });
}

function buildResourceCard() {
    const container = document.createElement("div");
}