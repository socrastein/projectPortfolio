import buildHomePage from "../homePage/buildHomePage";
import homeIcon from "src/assets/icons/home.svg";
import arrowIcon from "src/assets/icons/arrow.svg";


const navBarContainer = document.querySelector('#navBar');


export default function buildNavBar() {
    navBarContainer.appendChild(homePageIcon());
    navBarContainer.appendChild(centerTitle("Matt Talley's Portfolio"))
    // navBarContainer.appendChild(projectDropDown());
}

function homePageIcon() {
    const logo = document.createElement("button");
    logo.classList.add("icon", "iconLarge", "reverseColor");
    logo.style.backgroundImage = `url("${homeIcon}")`;

    logo.addEventListener("click", () => {
        buildHomePage();
    });

    return logo;
}

function centerTitle(text) {
    const title = document.createElement("h3");
    title.classList.add("navBarTitle");
    title.textContent = text;

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