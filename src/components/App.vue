<script setup>
import Skill from "./Skill.vue";
import vueIcon from "../assets/icons/vue.svg";
import jsIcon from "../assets/icons/javascript.svg";
import viteIcon from "../assets/icons/vite.svg";
import webpackIcon from "../assets/icons/webpack.svg";
import pythonIcon from "../assets/icons/python.svg";
import githubIcon from "../assets/icons/githubInverted.svg";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
</script>

<template>
  <Skill :icon="htmlIcon" name="HTML" description="Description" />
  <Skill :icon="cssIcon" name="CSS" description="Description" />
  <Skill :icon="jsIcon" name="JavaScript" description="Description" />
  <Skill :icon="pythonIcon" name="Python" description="Description" />
  <Skill :icon="webpackIcon" name="Webpack" description="Description" />
  <Skill :icon="viteIcon" name="Vite" description="Description" />
  <Skill :icon="vueIcon" name="Vue" description="Description" />
  <Skill :icon="githubIcon" name="GitHub" description="Description" />
</template>

<style scoped></style>
