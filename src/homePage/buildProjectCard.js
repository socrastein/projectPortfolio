import "./projectCard.css";

import buildProjectPage from "../projectPage/buildProjectPage";

export function buildProjectCard(projectObject) {
    const container = document.createElement("div");
    container.classList.add("projectCardContainer");

    // Create header title with icon and name of project
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("projectCardTitleContainer");

    const titleIcon = document.createElement("img");
    titleIcon.classList.add("projectCardTitleIcon");
    titleIcon.src = projectObject.icon;

    const titleText = document.createElement("h3");
    titleText.classList.add("projectCardTitleText");
    titleText.textContent = projectObject.name;

    titleContainer.appendChild(titleIcon);
    titleContainer.appendChild(titleText);


    // Create container with short and long description of project
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("projectCardDescriptionContainer");

    const descriptionShort = document.createElement("h4");
    descriptionShort.classList.add("projectCardDescriptionShort");
    descriptionShort.textContent = projectObject.descriptionShort;

    const descriptionLong = document.createElement("p");
    descriptionLong.classList.add("projectCardDescriptionLong");
    descriptionLong.textContent = projectObject.descriptionLong;

    descriptionContainer.appendChild(descriptionShort);
    // descriptionContainer.appendChild(descriptionLong);

    // Create container with button links to project site and project page
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("projectCardButtonsContainer");

    const linkToProject = document.createElement("button");
    linkToProject.classList.add("projectCardButton");
    linkToProject.textContent = "Check It Out";
    linkToProject.addEventListener("click", () => {
        window.open(`${projectObject.link}`, '_blank');
    });

    const linkToProjectPage = document.createElement("button");
    linkToProjectPage.classList.add("projectCardButton");
    linkToProjectPage.textContent = "Read More";
    linkToProjectPage.addEventListener("click", () => {
        window.location.href = `${import.meta.env.BASE_URL}project.html`
        buildProjectPage(projectObject);
    });

    buttonsContainer.appendChild(linkToProject);
    buttonsContainer.appendChild(linkToProjectPage);

    // Append each section of the card to the main container
    // You can change the layout order by rearranging these

    container.appendChild(titleContainer);
    container.appendChild(descriptionContainer);
    container.appendChild(buttonsContainer);

    return container;
}