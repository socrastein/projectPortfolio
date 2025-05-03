<script setup>
const photographerLink = "https://www.pexels.com/@philippedonn/";
const siteLink = "https://www.pexels.com/photo/milky-way-illustration-1169754/";

const vueLink = "https://vuejs.org/";
const viteLink = "https://vite.dev/";

import gitHubIcon from "@/assets/icons/githubInverted.svg";
const gitHubLink = "https://github.com/socrastein";
</script>

<template>
  <div class="footerContainer">
    <div class="siteAttribution">
      <p class="smallText">©2025</p>
      <p>
        Site built with <a :href="viteLink" target="_blank">Vite</a> &
        <a :href="vueLink" target="_blank">Vue</a> by Matt Talley
      </p>
      <img :src="gitHubIcon" />
    </div>
    <div class="photoAttribution">
      <p>
        Background image by
        <a :href="photographerLink" target="_blank">Philippe Donn</a>
        on
        <a :href="siteLink" target="_blank">Pexels</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.footerContainer {
  font-size: 0.9rem;
  position: absolute;
  bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.smallText {
  font-size: 0.8rem;
}

.siteAttribution {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
}

.photoAttribution {
  font-size: 0.8rem;
}

img {
  height: 1.75rem;
  width: 1.75rem;
  transition: transform 500ms;
}
img:hover {
  cursor: pointer;
  transform: scale(1.2) rotate(720deg);
  transition: transform 750ms;
}
</style>
