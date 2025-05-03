<script setup>
import RotatingPic from "../RotatingPic.vue";

import stache1 from "@/assets/photos/stache1.jpg";
import stache2 from "@/assets/photos/stache2.jpg";
import stache3 from "@/assets/photos/stache3.jpg";
import stache4 from "@/assets/photos/stache4.jpg";

const pics = [stache1, stache2, stache3, stache4];
</script>

<template>
  <div class="mainContainer">
    <h1>About</h1>
    <p>
      I’m a developer and lifelong learner with a passion for building
      practical, well-thought-out solutions. My journey started with a love for
      fitness, which I translated into building custom tools for personal
      training, and it’s evolved into a deep interest in web development. I’m
      currently focusing on building intuitive, dynamic user interfaces using
      Vue.js, with a solid foundation in vanilla JavaScript and Python.
    </p>
    <p>
      I thrive on solving problems with clean, efficient code, and I’m driven by
      a desire to create meaningful impact, whether that’s helping clients
      achieve their fitness goals or building software that improves people’s
      day-to-day experience.
    </p>
    <p>
      I believe in the power of
      <span class="italic">empirical thinking</span> and approach every project
      with a focus on understanding the why behind each decision. Whether I’m
      writing a new feature or refactoring an existing one, I’m always looking
      for ways to optimize, improve, and iterate.
    </p>
    <p>
      When I’m not coding, you can usually find me diving into new tech,
      experimenting with different frameworks, reading programming books or
      discussing ideas with my wife (who’s also a student, so we’re both
      constantly learning together). I’m also working on blending my passions
      for fitness and tech into projects that help others.
    </p>
    <br />
    <h2>What I Can Do:</h2>
    <ul>
      <li>
        <span class="bold">Front-End Development:</span> I specialize in
        creating responsive, user-friendly interfaces using Vue.js, CSS, and
        JavaScript. I focus on clarity, usability, and performance to make every
        interaction smooth.
      </li>
      <li>
        <span class="bold">Problem Solving:</span> I enjoy breaking down complex
        issues into manageable parts and finding practical, elegant solutions.
        My focus is on <span class="italic">understanding</span> the problem
        before jumping to the solution.
      </li>
      <li>
        <span class="bold">Project Management & Collaboration:</span> I’m a
        strong communicator and value collaboration, whether I’m working on a
        team or managing my own projects.
      </li>
    </ul>
    <br />
    <h2>What Drives Me:</h2>
    <p>
      I’m passionate about creating software that does something meaningful and
      that people can rely on. My goal is to continue developing my skills in
      front-end development while learning more about back-end systems to
      eventually build full-stack applications. I’m excited to join a team that
      values curiosity, innovation, and continuous learning.
    </p>
    <p>
      If you’re looking for a developer who cares about clean code, user
      experience, and long-term solutions, I’d love to chat!
    </p>
  </div>
</template>

<style scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  width: min(600px, 95%);

  gap: 2rem;
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
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

p {
  font-size: 1.2rem;
  text-align: left;
}
ul {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  gap: 1rem;
}

li {
  text-align: left;
  font-size: 1.2rem;
}

li::marker {
  color: var(--themeColor);
}
</style>
