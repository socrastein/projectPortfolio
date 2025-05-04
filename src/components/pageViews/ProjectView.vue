<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { getAllProjects } from "../../projectPage/projectClass";
import NavBarButton from "../NavBarButton.vue";

const props = defineProps({
  project: Object,
});

const route = useRoute();
const projectName = route.params.projectName;

const project = computed(() => {
  return getAllProjects().find((p) => p.path === projectName);
});

const allProjects = getAllProjects();

const openWindow = function (targetURL) {
  window.open(targetURL, "_blank");
};
</script>

<template>
  <div v-if="project" class="mainContainer">
    <div class="header">
      <div class="title">
        <img class="icon" :src="project.icon" />
        <h1>{{ project.name }}</h1>
      </div>
      <h2>{{ project.descriptionShort }}</h2>
    </div>

    <ul>
      <li v-for="feature in project.listOfFeatures">{{ feature }}</li>
    </ul>
    <h3>{{ project.descriptionLong }}</h3>
    <NavBarButton text="View Site" @click="openWindow(project.link)" />
    <img :src="project.image" class="projectImage" />
    <br />
    <br />
  </div>
  <div v-else>
    <h1>Project not found!</h1>
  </div>
</template>

<style scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(600px, 95%);

  gap: 2rem;
}

img {
  width: 100%;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

h1 {
  text-align: left;
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

h3 {
  text-align: left;
}

.projectImage {
  border-radius: 1rem;
}

ul {
  padding-left: 1rem;
}

li {
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
}

li::marker {
  color: var(--themeColor);
}
</style>
