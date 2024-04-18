<script>
export default {
  name: "LangChangePreloader"
}
</script>

<template>
  <section class="animate__animated animate__slideInUp preloader-section flex flex-col justify-center items-center content-center">
    <img class="rhizome-logo mb-5" src="@/assets/logo.svg" />
    <p class="preloader-text">Language is changed <br> You will be redirected shortly</p>
  </section>
</template>

<style scoped>
.preloader-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 9999999999;
}
.preloader-text {
  text-align: center;
  font-weight: 600;
}
</style>