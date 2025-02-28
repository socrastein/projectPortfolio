import "./colorTheme.css";

// Change to match :root theme color variable
const rootColorVariable = `--themeColor`;

const themeColors = {
    blue: "#646cff", //"76, 91, 141"
    purple: "#6c5a91", //"108, 90, 145"
    pink: "#8f5173", //"143, 81, 115"
    red: "#c15b58", //"193, 91, 88"
    orange: "#b7613f", //"157, 119, 81"
    yellow: "#c8ac69", //"200, 172, 105"
    green: "#378e3c", //"114, 132, 97"
};

function changeThemeColor(newColor) {
    document.documentElement.style.setProperty(rootColorVariable, newColor);
}

// Make sure to add "stop event propagation" eventListener to parentElement
export function createThemeColorMenu(parentElement, colorArray) {
    if (colorArray === undefined) {
        colorArray = themeColors;
    }

    const currentThemeColor = getComputedStyle(document.documentElement).getPropertyValue(rootColorVariable);

    const container = document.createElement("div");
    container.classList.add("colorThemeMenuContainer");

    container.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    for (const [key, value] of Object.entries(themeColors)) {
        const colorContainer = createColorOption(key, value);

        // Show which theme color is currently selected
        if (currentThemeColor === value) {
            colorContainer.classList.add("colorThemeMenuColorOptionHighlight");
        }
        container.appendChild(colorContainer);
    }

    window.addEventListener("click", () => {
        container.remove();
    });

    //Menu pops up just under the parent element with absolute position
    parentElement.style.position = "relative";
    parentElement.appendChild(container);
}

function createColorOption(name, color) {
    const container = document.createElement("div");
    container.classList.add("colorThemeMenuColorOption");

    container.addEventListener("click", (event) => {
        changeThemeColor(color);
        removeColorHighlight();
        event.target.closest(".colorThemeMenuColorOption").classList.add("colorThemeMenuColorOptionHighlight");
        saveThemeColorToLocalStorage(color);
    });

    const colorLabel = document.createElement("p");
    colorLabel.classList.add("colorThemeMenuColorLabel");
    colorLabel.textContent = name.charAt(0).toUpperCase() + name.slice(1);

    const colorPreview = document.createElement("div");
    colorPreview.classList.add("colorThemeMenuColorPreview");
    colorPreview.style.backgroundColor = color;

    container.appendChild(colorLabel);
    container.appendChild(colorPreview);

    return container;
}

function removeColorHighlight() {
    const currentHighlight = document.querySelector(".colorThemeMenuColorOptionHighlight");
    console.log(currentHighlight);
    currentHighlight.classList.remove("colorThemeMenuColorOptionHighlight");
}

function saveThemeColorToLocalStorage(color){
    localStorage.setItem("themeColor", color);
}

export function setThemeColorFromLocalStorage(){
    const color = localStorage.getItem("themeColor");
    if(color){
        changeThemeColor(color);
    }
}
