<script setup>
import NavBar from "./NavBar.vue";
import SiteFooter from "./Footer.vue";
import { RouterView } from "vue-router";

const skillHeading = "Header";
const skillText = "text";
</script>

<template>
  <div class="mainContainer">
    <NavBar />

    <RouterView />

    <SiteFooter />
  </div>
</template>

<style scoped>
.mainContainer {
  position: relative;
  width: 100dvw;
  padding: 1%;
  padding-bottom: 36rem;
  text-align: center;
  min-height: 1400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  border-radius: none;

  background-color: black;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 9)),
    url("/sky2.jpg");
  background-size: 110% 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  animation-name: shiftSideways;
  animation-timing-function: linear;
  animation-duration: 12s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>
