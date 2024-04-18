<script>
import PrintUtil from "@/utils/localization/print.util";
import LangChangerComponent from "@/components/UI/LangChangerComponent.vue";
export default {
  name: "HeaderComponent",
  components: {LangChangerComponent},
  methods: {
    localize(key, module = "headerComponent") {
      return PrintUtil.localize(key, module);
    },
    localizeBtn(key, module = "heroComponent") {
      return PrintUtil.localize(key, module);
    },
    scrollToAnchor(anchor) {
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          this.$nextTick(() => {
            this.scrollTo(anchor);
          });
        });
      } else {
        this.scrollTo(anchor);
      }
    },
    scrollTo(anchor) {
      const targetElement = document.querySelector(anchor);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<template>
  <div class="navbar flex flex-row">
    <div class="navbar-start">
      <a href="/"><img class="logo" src="@/assets/logo.svg" /></a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><span>/<a @click.prevent="scrollToAnchor('#cases')">{{localize("headerCases")}}</a></span></li>
        <li><span>/<a @click.prevent="scrollToAnchor('#offers')">{{localize("headerOffers")}}</a></span></li>
        <li><span>/<a @click.prevent="scrollToAnchor('#team')">{{localize("headerTeam")}}</a></span></li>
        <li><span>/<a @click.prevent="scrollToAnchor('#contacts')">{{localize("headerContacts")}}</a></span></li>
      </ul>
    </div>
    <div class="navbar-end flex flex-row gap-5">
      <router-link to="/form" class="btn btn-accent btn-offer">{{localizeBtn("consultBtn")}}</router-link>
      <LangChangerComponent />
    </div>
  </div>
</template>

<style scoped>
  .navbar {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid #eaeaea;
    z-index: 9999;
    padding-left: 3rem;
    padding-right: 3rem;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }
  .menu {
    font-weight: 700;
  }
</style>