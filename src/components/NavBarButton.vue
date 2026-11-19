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
  width: 8rem;
  height: 2rem;
  padding: 0.25rem;
}
</style>
