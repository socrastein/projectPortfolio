<script setup>
import Skill from "../Skill.vue";

import mattPhoto from "@/assets/photos/matt.jpg";

import vueIcon from "@/assets/icons/vue.svg";
import jsIcon from "@/assets/icons/javascript.svg";
import viteIcon from "@/assets/icons/vite.svg";
import webpackIcon from "@/assets/icons/webpack.svg";
import pythonIcon from "@/assets/icons/python.svg";
import githubIcon from "@/assets/icons/githubInverted.svg";
import htmlIcon from "@/assets/icons/html.svg";
import cssIcon from "@/assets/icons/css.svg";
import linuxIcon from "@/assets/icons/linux.svg";
import excelIcon from "@/assets/icons/excel.svg";
import codeIcon from "@/assets/icons/vscode.svg";
import gimpIcon from "@/assets/icons/gimp.svg";
</script>

<template>
  <div class="headingContainer">
    <!-- <img class="largePhoto" :src="mattPhoto" @click="$router.push('/about')" /> -->
    <h1>Hi, I’m Matt 👋<br /><br />I love to build things!</h1>
  </div>

  <div class="skillsMainContainer">
    <h2>
      I'm currently studying Computer Science. I spend much of my time
      sharpening my programming skills and building personal projects.
    </h2>
    <hr />
    <h3>
      <ul>
        <h2 class="leftAlign">Hard skills:</h2>
        <li>Computer diagnostics and repair (Windows & Linux)</li>
        <li>JavaScript & Python programming</li>
        <li>Responsive website design & SPA development</li>
        <li>Git/GitHub version control</li>
        <li>Project management (scheduling, budgeting, documentation)</li>
        <li>Professional document writing and editing</li>
        <li>Accounting, data entry, and report generation</li>
        <li>Graphic design & photo editing (GIMP)</li>
      </ul>

      <br />
      <br />

      <ul>
        <h2 class="leftAlign">Soft skills:</h2>
        <li>Calm, patient, and friendly demeanor</li>
        <li>Analytical and creative problem-solver</li>
        <li>Meticulous attention to detail</li>
        <li>Passion for learning and clear technical writing</li>
        <li>Collaborative, assertive team leader</li>
      </ul>
    </h3>
    <hr />
    <br />
    <h2>I am comfortable with all of these tools:</h2>
    <div class="skillsContainer">
      <Skill :icon="htmlIcon" name="HTML" />
      <Skill :icon="cssIcon" name="CSS" />
      <Skill :icon="jsIcon" name="JavaScript" />
      <Skill :icon="pythonIcon" name="Python" />
      <Skill :icon="webpackIcon" name="Webpack" />
      <Skill :icon="viteIcon" name="Vite" />
      <Skill :icon="vueIcon" name="Vue" />
      <Skill :icon="githubIcon" name="GitHub" />
      <Skill :icon="codeIcon" name="VS Code" />
      <Skill :icon="linuxIcon" name="Linux" />
      <Skill :icon="excelIcon" name="Excel" />
      <Skill :icon="gimpIcon" name="GIMP" />
    </div>
    <h2>
      I'm always exploring new technologies and building projects to expand my
      toolkit.
      <br />
      <br />
      <RouterLink to="/projects">Check out my work here!</RouterLink>
    </h2>
  </div>
</template>

<style scoped>
.headingContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: space-evenly;
}

.skillsMainContainer {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.skillsContainer {
  width: min(100%, 40rem);
  padding: 1rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 16rem);
  gap: 2rem;

  background-image: linear-gradient(rgba(0, 0, 0, 0.5));

  border: solid 2px grey;
  border-radius: 2rem;
}

h1 {
  font-size: 3rem;
  font-weight: 800;
  background-image: linear-gradient(
    135deg,
    rgb(108, 142, 255),
    rgb(107, 189, 107)
  );
  color: transparent;
  background-clip: text;
}

h2 {
  width: min(100%, 40rem);
}

.italic {
  font-style: italic;
}

hr {
  width: min(24rem, 90%);
}

ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

li {
  text-align: left;
}

li::marker {
  color: var(--themeColor);
}
</style>
