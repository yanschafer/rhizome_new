<script>
import { defineComponent, ref } from "vue";
import PrintUtil from "@/utils/localization/print.util";
import { IconWorld } from "@tabler/icons-vue";
import { useRouter } from "vue-router";
import LangChangePreloader from "@/App.vue"; // Импортируйте useRouter

export default defineComponent({
  name: "LangChangerComponent",
  components: {LangChangePreloader, IconWorld },
  setup() {
    const router = useRouter(); // Используйте useRouter для доступа к экземпляру роутера
    const selectedLang = ref(PrintUtil.getSelectedLang());
    const isCountdownActive = ref(false);
    const showOverlay = ref(false);

    const localize = (key, module = "langChangerComponent") => {
      return PrintUtil.localize(key, module);
    };

    const switchLang = (locale) => {
      let currentPath = router.currentRoute.value.path;
      // Adjust the currentPath based on the selected language
      // For example, if the current path is '/psyreply-en' and the user switches to 'ru',
      // change the path to '/psyreply-ru'. Adapt this logic to your routing structure.
      if (locale === 'en' && currentPath.includes('-ru')) {
        currentPath = currentPath.replace('-ru', '-en');
      } else if (locale === 'ru' && currentPath.includes('-en')) {
        currentPath = currentPath.replace('-en', '-ru');
      }

      localStorage.setItem('lastPath', currentPath);
      PrintUtil.switchTo(locale);
      showOverlay.value = true;
      selectedLang.value = locale;
      isCountdownActive.value = true;

      setTimeout(() => {
        // Since the path is updated in localStorage, after reload,
        // you should have a mechanism to read from localStorage and navigate to lastPath
        location.reload();
      }, 2500);
    };

    return { selectedLang, isCountdownActive, switchLang, showOverlay, localize };
  },
});
</script>


<template>
  <button class="lang-btn" v-if="selectedLang !== 'eng' && !isCountdownActive" @click="switchLang('eng')"><IconWorld />RU</button>
  <button class="lang-btn" v-if="selectedLang !== 'ru' && !isCountdownActive" @click="switchLang('ru')"><IconWorld />EN</button>
  <button class="loading loading-spinner" v-if="isCountdownActive" disabled></button>
</template>

<style scoped>
@media only screen and (max-width: 600px) and (min-width: 300px) {
  .lang-btn {
    font-size: 1rem!important;
  }
}
.lang-btn {
  opacity: 0.5;
  transition: all 0.3s ease-in-out;
}
.lang-btn:hover, .lang-btn:focus {
  opacity: 1;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: 600;
  background-color: white;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;
}
</style>
