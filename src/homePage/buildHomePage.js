const appContainer = document.querySelector('#app');

export default function buildHomePage() {
    appContainer.innerHTML = '';
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("pageMainContainer");

    mainContainer.innerHTML = '<h1>This is my portfolio home page</h1>';

    appContainer.appendChild(mainContainer);
};

function buildHeading() {
    const container = document.createElement("div");
}

function buildProjectCards() {
    const container = document.createElement("div");
}

function buildResourceCard() {
    const container = document.createElement("div");
}