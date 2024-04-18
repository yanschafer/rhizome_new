<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const progress = ref(0);

const updateScrollProgress = () => {
  const scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
  const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollDistance / totalHeight) * 100;
  progress.value = scrolled;
};

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress);
});
</script>

<template>
  <progress class="progress progress-accent w-full fixed top-0 z-50" :value="progress" max="100"></progress>
</template>

<style scoped>
.progress {
  height: 2px;
}
</style>