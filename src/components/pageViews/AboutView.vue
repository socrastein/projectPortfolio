<script setup>
import RotatingPic from "../RotatingPic.vue";

import stache1 from "@/assets/photos/stache1.jpg";
import stache2 from "@/assets/photos/stache2.jpg";
import stache3 from "@/assets/photos/stache3.jpg";
import stache4 from "@/assets/photos/stache4.jpg";

const pics = [stache1, stache2, stache3, stache4];
</script>

<template>
  <h1>About</h1>
  <div class="mainContainer">
    <h2>
      Born with a love for logic
      <hr />
    </h2>

    <p>
      I’m a budding developer and lifelong learner with a passion for building
      practical, well-thought-out solutions. I've loved solving puzzles and
      building things since I was a child, and have always been especially
      fascinated by computers. I fondly remember pouring through a "DOS for
      Dummies" book as a kid, trying to figure out what commands were needed to
      run DOOM on my family's first computer.
    </p>
    <p>
      In high school, I had the opportunity to take my first classes on computer
      repair and networking. This unlocked a burning passion for building and
      troubleshooting PCs. Since then, I've built dozens of rigs for myself,
      friends, and family, and I used to work as a computer repair technician
      too.
    </p>

    <h2>
      The softer side
      <hr />
    </h2>
    <p>
      A few years ago, I decided it was time to dive into the software side of
      things, so I took a
      <a
        href="https://www.udemy.com/course/python-the-complete-python-developer-course/"
        target="_blank"
        >Python course</a
      >
      and started applying what I learned to simple projects and math problems
      on <a href="https://projecteuler.net/" target="_blank">Project Euler</a>.
    </p>
    <p>
      While reading about suggestions for beginner programmers, I kept hearing
      about
      <a href="https://www.theodinproject.com/" target="_blank"
        >The Odin Project</a
      >, and I loved their project-focused approach to teaching, so I worked
      through their
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        >JavaScript</a
      >
      course to learn web design. I’m currently focusing on building intuitive,
      dynamic, user interfaces using
      <a href="https://vuejs.org/" target="_blank">Vue.js</a>, having developed
      a solid foundation in vanilla JavaScript and Python.
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
    <h2>
      What I Can Do
      <hr />
    </h2>
    <ul>
      <li>
        <span class="bold">Front-End Development:</span><br />I specialize in
        creating responsive, user-friendly interfaces using Vue.js, CSS, and
        JavaScript. My goal is to build clean, clear designs that are intuitive
        and performant, and I want the code itself to similarly be easy to understand and work with. 
      </li>
      <br>
      <li>
        <span class="bold">Problem Solving:</span><br />
        I enjoy breaking down complex issues into manageable parts and finding
        practical, elegant solutions. Calculus is one of my favorite courses for
        the same reason. My focus is on
        <span class="italic">understanding</span> the problem before jumping to
        the solution. I enjoy researching new challenges and reading
        documentation to learn new ways to tackle problems.
      </li>
      <br>
      <li>
        <span class="bold">Project Management:</span><br />
        I’m a strong communicator and value collaboration, whether I’m working
        on a team or managing my own projects. I believe good leadership means
        working alongside people, giving credit to the team for their success
        and taking ownership when the team falls short. 
      </li>
    </ul>
    <br />
    <h2>
      What Drives Me
      <hr />
    </h2>
    <p>
      I’m passionate about creating software that does something meaningful and
      that people can rely on. My goal is to continue developing my skills in
      front-end development while learning more about back-end systems to
      eventually build full-stack applications that solve interesting problems.
      I’m excited to join a team that values curiosity, creative
      problem-solving, and continuous learning.
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
  align-items: center;
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

h2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2, 2, 2, 2, var(--themeColor);
}

hr {
  width: 100%;
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
