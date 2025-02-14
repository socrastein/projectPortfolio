import "./homePage.css"

import { getAllProjects } from "../projectPage/projectClass";
import { buildProjectCard } from "./buildProjectCard";
import mattPhoto from "src/assets/photos/matt.jpg";

const appContainer = document.querySelector("#app");

export default function buildHomePage() {
  appContainer.innerHTML = "";

  buildHeading();
  buildProjectCards();
}

function buildHeading() {
  const container = document.createElement("div");
  container.classList.add("homeHeaderContainer");

  const titleAndPicContainer = document.createElement("div");
  titleAndPicContainer.classList.add("homeHeaderTitleAndPicContainer");

  const headerPicture = document.createElement("img");
  headerPicture.classList.add("homeHeaderPicture");
  headerPicture.src = mattPhoto;
  headerPicture.addEventListener("click", () => {
    window.location.href = `${import.meta.env.BASE_URL}about.html`
  })

  const title = document.createElement("h1");
  title.classList.add("homeHeaderTitle");
  title.textContent =
    "Hi! I'm Matt\n\nThese are some of the coding projects I've built";

  titleAndPicContainer.appendChild(headerPicture);
  titleAndPicContainer.appendChild(title);

  container.appendChild(titleAndPicContainer);

  appContainer.appendChild(container);
}

function buildProjectCards() {
  const projectsArray = getAllProjects();
  projectsArray.forEach((projectObject, index) => {
    setTimeout(() => {
      const projectElement = buildProjectCard(projectObject);
      appContainer.appendChild(projectElement);
    }, "300" * index);
  });
}

function buildResourceCard() {
  const container = document.createElement("div");
}
