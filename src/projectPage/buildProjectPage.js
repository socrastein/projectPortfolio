import "./projectPage.css";

export default function buildProjectPage(projectObj) {
  const appContainer = document.querySelector("#app");
  appContainer.innerHTML = "";

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projectPageMainContainer");

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("projectPageTitleContainer");

  const icon = document.createElement("img");
  icon.classList.add("projectPageIcon");
  icon.src = projectObj.icon;

  const title = document.createElement("h1");
  title.classList.add("projectPageTitle");
  title.textContent = projectObj.name;

  titleContainer.append(icon);
  titleContainer.append(title);

  const featuresContainer = document.createElement("div");
  featuresContainer.classList.add("projectPageFeaturesContainer");

  const featureList = document.createElement("ul");
  featureList.classList.add("projectPageFeatureList");

  projectObj.listOfFeatures.forEach((feature) => {
    if (feature !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = feature;
      featureList.append(listItem);
    }
  });

  featuresContainer.appendChild(featureList);

  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("projectPageDescription");
  descriptionContainer.textContent = projectObj.descriptionLong;

  const linkToProject = document.createElement("button");
  linkToProject.classList.add("projectPageButton");
  linkToProject.textContent = "Check It Out";
  linkToProject.addEventListener("click", () => {
    window.open(`${projectObj.link}`, "_blank");
  });

  const screenShot = document.createElement("img");
  screenShot.classList.add("projectPageScreenShot");
  screenShot.src = projectObj.image;

  projectContainer.appendChild(titleContainer);
  projectContainer.appendChild(featuresContainer);
  projectContainer.append(descriptionContainer);
  projectContainer.append(linkToProject);
  projectContainer.append(screenShot);

  appContainer.appendChild(projectContainer);
}

// const videoContainer = document.createElement("div");
// videoContainer.innerHTML =
//   '<iframe src="https://drive.google.com/file/d/166DNUGfodhgaeYB_yTEHiqg_KJnk3x0L/preview" width="640" height="480" allow="autoplay"></iframe>';
