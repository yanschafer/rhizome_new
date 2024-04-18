<script setup>
import CursorComponent from "@/components/UI/CursorComponent.vue";
import Lenis from '@studio-freight/lenis'
import LangChangePreloader from "@/components/UI/LangChangePreloader.vue";

const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
console.log('Powered by Rhizome 🤖')
</script>

<template>
  <CursorComponent :color="'blue'" :dotColor="'blue'" :outline="true" />
  <router-view />
</template>

<style>
@media only screen and (max-width: 600px) {
  .navbar {
    display: none;
  }
}
@media only screen and (min-width: 650px) {
  #navbar-mobile {
    display: none;
  }
}
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--rhizome) #ffffff;
}
html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--rhizome);
  border-radius: 10px;
  border: 2px none #ffffff;
}
@media only screen and (max-width: 600px) and (min-width: 300px) {
  width: 10rem!important;
  max-width: 10rem!important;
}
.p-tooltip-text {
  width: 30rem;
  max-width: 30rem;
}

</style>
