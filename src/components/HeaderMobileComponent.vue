<script>
import router from "@/router/index.js";
import {IconMenu2} from "@tabler/icons-vue";
import PrintUtil from "@/utils/localization/print.util";
import LangChangerComponent from "@/components/UI/LangChangerComponent.vue";
export default {
  name: "HeaderMobileComponent",
  components: {LangChangerComponent, IconMenu2},
  data() {
    return {
      isSidebarOpen: false,
      sections: {
        'cases': 'cases',
        'offers': 'offers',
        'contacts': 'contacts',
        'team': 'team',
      },
    }
  },
  methods: {
    localize(key, module = "headerComponent") {
      return PrintUtil.localize(key, module);
    },
    localizeBtn(key, module = "heroComponent") {
      return PrintUtil.localize(key, module);
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
    scrollToAnchor(anchor) {
      this.closeSidebar()
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
      this.closeSidebar()
      const targetElement = document.querySelector(anchor);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    },
    goToDefaultForm() {
      this.isSidebarOpen = false;
      router.push({ name: 'form' });
    }
  }
}
</script>

<template>
  <div class="navbar-mobile animate__animated animate__fadeInDown">
    <div @click="toggleSidebar" class="burger-icon">
      <IconMenu2 />
    </div>
    <transition name="fade">
      <div v-if="isSidebarOpen" class="sidebar-overlay" @click="closeSidebar"></div>
    </transition>
    <transition name="slide">
      <div v-if="isSidebarOpen" class="mobile-sidebar">
        <a href="/"><img src="@/assets/logo.svg" alt="Logo" class="logo-mobile" /></a>
        <a @click.prevent="scrollToAnchor('#cases')" class="mobile-item">> {{localize("headerCases")}}</a>
        <a @click.prevent="scrollToAnchor('#offers')" class="mobile-item">> {{localize("headerOffers")}}</a>
        <a @click.prevent="scrollToAnchor('#team')" class="mobile-item">> {{localize("headerTeam")}}</a>
        <a @click.prevent="scrollToAnchor('#contacts')" class="mobile-item">> {{localize("headerContacts")}}</a>
        <div class="flex flex-row gap-5">
          <router-link to="/form" @click="closeSidebar" class="btn btn-accent btn-offer">{{localizeBtn("consultBtn")}}</router-link>
          <LangChangerComponent />
        </div>

      </div>
    </transition>
  </div>
</template>

<style scoped>
.navbar-mobile {
  height: 3rem;
  position: fixed;
  gap: 1rem;
  padding-right: 0;
  z-index: 9999;
  background-color: rgba(252, 252, 252, 0.9);
  backdrop-filter: blur(20px);
  color: black;
  border-bottom: 1px solid #f6f6f6;
  width: 100%;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.burger-icon {
  font-size: 20px;
  font-weight: 800;
  color: #274c77;
  cursor: pointer;
}
.console-element {
  font-weight: 800;
  opacity: .3;
  color: black;
}
.cursor {
  line-height: 17px;
  margin-left: 3px;
  color: black;
  animation: blink 0.8s infinite;
  width: 7px;
  height: 15px;
}
.menu-h3 {
  text-align: center;
  margin: 0;
  color: black!important;
  padding-right: 2rem;
  font-weight: 400;
}
.sidebar-overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(47, 47, 47, 0.9);
  backdrop-filter: blur(20px);
  z-index: 1;
}
.logo-mobile {
  height: 100%;
  max-height: 9rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  float: left;
}
.mobile-item {
  color: black;
  font-weight: 400;
  padding-left: 1rem;
  font-size: 1.5rem;
  font-family: "Ubuntu Mono", monospace;
  width: 100%;
  text-decoration: none;
}
.mobile-sidebar {
  position: fixed;
  font-size: 2rem;
  left: 0;
  top:0;
  gap: 1rem;
  display: flex;
  width: 80%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 1rem;
  z-index: 2;
  overflow-y: auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding-bottom: 6rem;
}
.slide-enter-active,
.slide-leave-active
{
  transition: transform 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.btn-offer {
  font-size: 0.8rem!important;
}
</style>