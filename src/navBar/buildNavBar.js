import "./navBar.css";

import arrowIcon from "src/assets/icons/arrow.svg";


const navBarContainer = document.querySelector('#navBar');


export default function buildNavBar() {
    navBarContainer.appendChild(homePageIcon());
    navBarContainer.appendChild(aboutLink("About Me"));
    // navBarContainer.appendChild(projectDropDown());
}

function homePageIcon() {
    const homeButton = document.createElement("button");
    homeButton.classList.add("navBarHomeButton");

    homeButton.addEventListener("click", () => {
        window.location.href = `${import.meta.env.BASE_URL}index.html`;
    });

    return homeButton;
}

function aboutLink(text) {
    const title = document.createElement("div");
    title.classList.add("navBarAbout");
    title.textContent = text;
    title.addEventListener("click", () => {
        window.location.href = `${import.meta.env.BASE_URL}about.html`;
    });

    return title;
}

function projectDropDown() {
    const container = document.createElement("div");
    container.classList.add("dropdownContainer", "smallContainer");

    const label = document.createElement("p");
    label.textContent = "Project List";

    const arrow = document.createElement("div");
    arrow.classList.add("icon", "iconSmall", "reverseColor");
    arrow.style.backgroundImage = `url("${arrowIcon}")`;
    arrow.style.transform = `rotate(90deg)`;

    container.appendChild(label);
    container.appendChild(arrow);

    return container;
}

function showDropDownList() {

}

// NavBar Elements
//
// LEFT:
// Home Icon - Home 

// RIGHT:
// Projects (drop-down)
// Resources
// About

// PROJECTS:
//
// Lifting School Website
// Lifting App
// Battleship
// NSCA Quizzer
// Calculator
// Minesweeper
// Weather App
// Pixel Art
// Tip Tracker
// Plate Counter