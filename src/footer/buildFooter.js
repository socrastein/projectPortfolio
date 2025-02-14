import "./footer.css";
import gitHubSVG from "/src/assets/icons/github.svg";

const footerContainer = document.querySelector('#footer');

export default function buildFooter() {

    const attributionContainer = document.createElement("div");
    attributionContainer.classList.add("footerAttributionContainer");

    const siteAttribution = document.createElement("p");
    siteAttribution.classList.add("footerSiteAttribution");
    siteAttribution.textContent = "Built by Matt Talley ©2025";

    const gitHubIcon = document.createElement("img");
    gitHubIcon.classList.add("footerGitHubIcon");
    gitHubIcon.src = gitHubSVG;
    gitHubIcon.addEventListener("click", () => {
        window.open("https://github.com/socrastein", '_blank')
    })

    attributionContainer.append(siteAttribution);
    attributionContainer.append(gitHubIcon);

    const photoAttribution = document.createElement("div");
    photoAttribution.classList.add("footerPhotoAttribution");
    photoAttribution.innerHTML = `Background image by <a href="https://unsplash.com/@wilstewart3?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Wil Stewart</a> on <a href="https://unsplash.com/photos/trees-under-blue-sky-and-stars-during-nighttime-photo-T26KCgCPsCI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a>
      `;

    footerContainer.appendChild(attributionContainer);
    footerContainer.appendChild(photoAttribution);
}




