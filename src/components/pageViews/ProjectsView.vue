<script setup>
import { computed } from "vue";
import { getAllProjects } from "../../projectPage/projectClass";
import ProjectCard from "../ProjectCard.vue";
const props = defineProps(["prop1", "prop2"]);

const projectsData = getAllProjects();

// const project = computed(() => {
//   return projectsData.find((p) => p.path === props.projectName);
// });
</script>

<template>
  <div class="projectsContainer">
    <h1>Projects</h1>
    <h2>
      These are some of the sites and webapps I've built. Several of them were
      part of
      <a href="https://www.theodinproject.com" target="_blank"
        >The Odin Project</a
      >
    </h2>
    <div v-for="project in projectsData">
      <ProjectCard :project="project" />
    </div>
  </div>
</template>

<style scoped>
.projectsContainer {
  display: flex;
  flex-direction: column;
  width: min(600px, 95%);

  gap: 4rem;
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

a {
  font-weight: bold;
}
</style>
