<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

import NavBarButton from "./NavBarButton.vue";

const props = defineProps({
  project: Object,
});

const openWindow = function (targetURL) {
  window.open(targetURL, "_blank");
};
</script>

<template>
  <div class="cardContainer">
    <div class="title">
      <img class="icon" :src="props.project.icon" />
      <h2>{{ props.project.name }}</h2>
    </div>
    <h3>{{ props.project.descriptionShort }}</h3>
    <div class="buttonContainer">
      <NavBarButton text="View Site" @click="openWindow(props.project.link)" />
      <NavBarButton
        text="Read More"
        @click="router.push('/projects/' + props.project.path)"
      />
    </div>
  </div>
</template>

<style scoped>
.cardContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: solid white 1px;
  border-radius: 1rem;
  padding: 1rem;
  gap: 1rem;

  text-align: left;

  background-color: var(--backgroundLight);
  box-shadow: 2px 2px 4px var(--themeColor);
}

.title {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  border-bottom: solid 1px var(--themeColor);
  border-radius: 0;
}

.icon {
  height: 2.5rem;
  width: 2.5rem;
  padding: 0.25rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: var(--themeColor);
}

.buttonContainer {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}
</style>
