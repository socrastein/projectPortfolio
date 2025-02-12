const appContainer = document.querySelector("#app");

export default function buildProjectPage(projectObj) {
    appContainer.innerHTML = '';

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("pageMainContainer");

    mainContainer.innerHTML = '<h1>This is one of my projects</h1>';

    appContainer.appendChild(mainContainer);
};

function projectTitle(text) {
    const title = document.createElement("h1");
    title.classList.add("projectTitle");
    title.textContent = text;

    return title;
}