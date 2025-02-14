import "./about.css";

import arrowIcon from "/src/assets/icons/arrow.svg";
import stache1 from "/src/assets/photos/stache1.jpg";
import stache2 from "/src/assets/photos/stache2.jpg";
import stache3 from "/src/assets/photos/stache3.jpg";
import stache4 from "/src/assets/photos/stache4.jpg";

// Time between photo changes in milliseconds
const photoRotationInterval = 2000;

const stacheArray = [
    stache1,
    stache2,
    stache3,
    stache4
];

export default function buildAboutPage() {
    const appContainer = document.querySelector("#app");

    const photoSlider = document.createElement("img");
    photoSlider.classList.add("aboutPhotoSlider");

    appContainer.appendChild(photoSlider);
    loopPhotos();

    const title = document.createElement("h1");
    title.classList.add("aboutTitle");
    title.textContent = "It's a me! Matteo!";

    appContainer.append(title);

    const description = document.createElement("div");
    description.classList.add("aboutDescription");
    description.innerHTML = `
    <h2>Born with a love for logic<hr></h2>
    
    <p>\tI've loved solving puzzles and building things since I was a child. I fondly remember pouring through a "DOS for Dummies" book as a kid, trying to figure out what commands were needed to run DOOM on my family's first computer. I would tear apart RC cars and Christmas lights to make simple circuits with motors and bulbs. In high school I gott <i>really</i> into the Rubik's cube; my fastest time was 1 minute and 6 seconds. To say that I'm something of a nerd would be a profound understatement.\n\n\n</p>

    <h2>The softer side<hr></h2>
    
    <p>\tHaving worked with, built, and repaired computers for most of my life, I waited far too long to get into the software side of things. Several years ago, I finally decided to learn <a href="https://www.python.org/" target="_blank">Python</a>, and I quickly fell in love with the rigorous logic of conditionals and functions. A friend of mine, who was himself a software developer, told me about <a href="https://projecteuler.net/" target="_blank">Project Euler</a>, and I delighted in using Python to solve interesting math problems!\n
    \tAfter learning programming basics through an extensive <a href="https://www.udemy.com/course/python-the-complete-python-developer-course/" target="_blank">Python course</a> on Udemy, I started looking around for recommendations on solid courses through which to learn how to build web pages. I found <a href="https://www.theodinproject.com/" target="_blank">The Odin Project</a>, which was exactly what I was looking for, and started learning web design and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>.\n\n\n</p>

    <h2>Back to school<hr></h2>
    
    <p>\tI've built a number of progressively more difficult projects through and outside of Odin, some of which are featured on this site! After a couple of years of intensively studying online courses, reading several programming books, and writing thousands of lines of code, I realized I should be studying computer science in school.\n
    \tSo that's where I currently am in my journey: a computer science student at <a href="https://cwi.edu/" target="_blank">CWI</a>, with a decent background in programming and a handful of amateur projects under my belt.
    </p>`;

    appContainer.append(description);

}

function loopPhotos() {
    rotatePhoto();
    setTimeout(() => {
        loopPhotos();
    }, photoRotationInterval);
}

function rotatePhoto() {
    const photoSlider = document.querySelector(".aboutPhotoSlider");
    let currentPhoto = stacheArray.shift();
    photoSlider.src = currentPhoto;
    stacheArray.push(currentPhoto);
}