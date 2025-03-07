<script setup>
    const props = defineProps(['icon', 'name', 'description'])
</script>

<template>
    <div class="skillContainer">
    <img class="skillIcon" :src="icon">
    <h2>{{ props.name  }}</h2>
    <p>{{ props.description }}</p>
    </div>

</template>

<style>
.skillContainer {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
}

.skillIcon {
    height: 3rem;
    width: 3rem;
}
</style>
