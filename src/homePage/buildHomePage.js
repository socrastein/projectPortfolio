import "./homePage.css";

import { getAllProjects } from "../projectPage/projectClass";
import { buildProjectCard } from "./buildProjectCard";
import mattPhoto from "src/assets/photos/matt.jpg";

export default function buildHomePage() {
  const appContainer = document.querySelector("#app");
  appContainer.innerHTML = "";

  buildHeading();
  buildProjectCards();
}

function buildHeading() {
  const appContainer = document.querySelector("#app");
  const container = document.createElement("div");
  container.classList.add("homeHeaderContainer");

  const titleAndPicContainer = document.createElement("div");
  titleAndPicContainer.classList.add("homeHeaderTitleAndPicContainer");

  const headerPicture = document.createElement("img");
  headerPicture.classList.add("homeHeaderPicture");
  headerPicture.src = mattPhoto;
  headerPicture.addEventListener("click", () => {
    window.location.href = `${import.meta.env.BASE_URL}about.html`;
  });

  const title = document.createElement("h1");
  title.classList.add("homeHeaderTitle");
  title.textContent =
    "Hi! I'm Matt\n\nThese are some of the coding projects I've built";

  titleAndPicContainer.appendChild(headerPicture);
  titleAndPicContainer.appendChild(title);

  container.appendChild(titleAndPicContainer);

  appContainer.appendChild(container);
}

export function buildProjectCards() {
  const appContainer = document.querySelector("#app");

  const projectCardsContainer = document.createElement("div");
  projectCardsContainer.classList.add("projectCardsMainContainer");
  appContainer.appendChild(projectCardsContainer);

  const projectsArray = getAllProjects();
  projectsArray.forEach((projectObject, index) => {
    const projectElement = buildProjectCard(projectObject);
    projectCardsContainer.appendChild(projectElement);
    // setTimeout(() => {
    // }, "300" * index);
  });
}

function buildResourceCard() {
  const container = document.createElement("div");
}
