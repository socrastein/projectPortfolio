

export default function buildNavBar() {
    const mainContainer = document.createElement("div");
    mainContainer.id = "navBarMainContainer";
    mainContainer.classList.add("navBarContainer");

    mainContainer.textContent = "This is the nav bar";

    return mainContainer;
}

function homePageLink() {
    const container = document.createElement("div");
    container.classList.add("navBarContainer");

    const logo = document.createElement("div");
    logo.classList.add("logoSmall");

    logo.addEventListener("click", ()=> {
        
    })
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