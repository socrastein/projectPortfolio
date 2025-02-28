import "./colorTheme.css";

// Change to match :root theme color variable
const rootColorVariable = `--themeColor`;

const themeColors = {
    blue: "#646cff", //"76, 91, 141"
    green: "#728461", //"114, 132, 97"
    orange: "#9d7751", //"157, 119, 81"
    purple: "#6c5a91", //"108, 90, 145"
    pink: "#8f5173", //"143, 81, 115"
    yellow: "#c8ac69", //"200, 172, 105"
    red: "#c15b58", //"193, 91, 88"
    grey: "#9d9d9d", //"157, 157, 157"
};

function changeThemeColor(newColor) {
    document.documentElement.style.setProperty(rootColorVariable, newColor);
}

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
        const colorContainer = document.createElement("div");
        colorContainer.classList.add("colorThemeMenuColorOption");

        // Show which theme color is currently selected
        if (currentThemeColor === value) {
            colorContainer.classList.add("colorThemeMenuColorOptionHighlight");
        }

        colorContainer.addEventListener("click", (event) => {
            changeThemeColor(value);
            document.querySelector(".colorThemeMenuColorOptionHighlight").classList.remove("colorThemeMenuColorOptionHighlight");
            console.log(event);
            event.target.closest(".colorThemeMenuColorOption").classList.add("colorThemeMenuColorOptionHighlight");
        });

        const colorLabel = document.createElement("p");
        colorLabel.classList.add("colorThemeMenuColorLabel");
        colorLabel.textContent = key.charAt(0).toUpperCase() + key.slice(1);

        const colorPreview = document.createElement("div");
        colorPreview.classList.add("colorThemeMenuColorPreview");
        colorPreview.style.backgroundColor = value;

        colorContainer.appendChild(colorLabel);
        colorContainer.appendChild(colorPreview);

        container.appendChild(colorContainer);
    }

    window.addEventListener("click", () => {
        container.style.visibility = "hidden";
    });

    parentElement.style.position = "relative";
    parentElement.appendChild(container);
}