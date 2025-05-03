<script setup>
import NavBarButton from "./NavBarButton.vue";
import DropdownButton from "./DropdownButton.vue";

const changeColor = (color) => {
  document.documentElement.style.setProperty("--themeColor", color);
};

const themeColors = [
  {
    text: "Blue",
    color: "#646cff",
    action(color) {
      changeColor(color);
    },
  },
  {
    text: "Purple",
    color: "#6c5a91",
    action(color) {
      changeColor(color);
    },
  },
  {
    text: "Pink",
    color: "#8f5173",
    action(color) {
      changeColor(color);
    },
  },
  {
    text: "Red",
    color: "#c15b58",
    action(color) {
      changeColor(color);
    },
  },
  {
    text: "Orange",
    color: "#b7613f",
    action(color) {
      changeColor(color);
    },
  },
  {
    text: "Yellow",
    color: "#c8ac69",
    action(color) {
      changeColor(color);
    },
  },
  {
    text: "Green",
    color: "#378e3c",
    action(color) {
      changeColor(color);
    },
  },
];


</script>

<template>
  <div class="navBarContainer">
    <NavBarButton text="Home" @click="$router.push('/')" />
    <NavBarButton text="Projects" @click="$router.push('/projects')" />
    <NavBarButton text="About" @click="$router.push('/about')" />
    <DropdownButton text="Theme" :items="themeColors" />
  </div>
</template>

<style scoped>
.navBarContainer {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}
</style>
