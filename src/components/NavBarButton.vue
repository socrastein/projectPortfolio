<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <button>{{ text }}</button>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.5rem;
  height: 2rem;
  padding: 0;
}
</style>
