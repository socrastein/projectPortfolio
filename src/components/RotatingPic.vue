<script setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  picArray: {
    type: Array,
    required: true,
    validator: (value) => value.length > 0,
  },
  interval: {
    type: Number,
    default: 3000,
  },
});

let currentIndex = ref(0);

console.log(props.interval);

function loopPhotos() {
  rotatePhoto();
  setTimeout(() => {
    loopPhotos();
  }, props.interval);
}

function rotatePhoto() {
  currentIndex.value = (currentIndex.value + 1) % props.picArray.length;
}

onMounted(() => {
  loopPhotos();
});
</script>

<template>
  <img class="rotatingPic" :src="props.picArray[currentIndex]" />
</template>

<style>
.rotatingPic {
  height: 20rem;
  width: 20rem;
  border-radius: 10%;
}
</style>
