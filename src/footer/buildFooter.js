const footerContainer = document.querySelector('#footer');

export default function buildFooter() {
    const mainContainer = document.createElement("div");
    mainContainer.id = "footerMainContainer";

    mainContainer.textContent = "This is the footer";

    footerContainer.appendChild(mainContainer);
}




