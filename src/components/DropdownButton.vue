<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  text: String,
  items: Array,
});

const isOpen = ref(false);
const menuRef = ref(null);

// Close menu when clicking outside
onClickOutside(menuRef, () => (isOpen.value = false));

function saveThemeColorToLocalStorage(color) {
  localStorage.setItem("themeColor", color);
}
</script>

<template>
  <div class="relative" ref="menuRef">
    <button @click="isOpen = !isOpen" class="colorButton">
      {{ text }}
    </button>

    <ul v-if="isOpen" class="dropdownMenu">
      <li
        v-for="(item, index) in items"
        :key="index"
        @click="
          () => {
            item.action(item.color);
            saveThemeColorToLocalStorage(item.color);
          }
        "
      >
        <div
          class="colorPreview"
          :style="{ backgroundColor: item.color }"
        ></div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.relative {
  position: relative;
}

.colorButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.5rem;
  height: 2rem;
  padding: 0;

}

.dropdownMenu {
  position: absolute;
  top: 110%;
  right: 0;
  background: var(--backgroundDark);
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
}
.dropdownMenu li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 8px 12px;
  cursor: pointer;
  z-index: 50;
}

.dropdownMenu li:hover {
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
}

.colorPreview {
  height: 1rem;
  width: 4rem;
  border-radius: 0.25rem;
  border: 1px solid #00000040;
}
</style>
