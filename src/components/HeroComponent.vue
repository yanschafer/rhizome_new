<template>
  <section class="animate__animated animate__fadeIn hero-section flex flex-col justify-center">
    <div class="flex flex-row">
      <div class="flex flex-col">
        <h1 class="hero-heading text-neutral">{{ localize("heroHeading") }}</h1>
        <div class="hero-subheading-wrapper">
          <span class="hero-subheading typing-text"></span>
          <span class="console-cursor">|</span>
        </div>
      </div>
    </div>
    <p class="hero-description">{{ localize("heroSubtext") }}</p>
    <div class="flex flex-row gap-3 button-row">
      <a @click.prevent="scrollToAnchor('#cases')" class="btn btn-outline btn-accent">{{ localize("casesBtn") }}</a>
      <button class="btn btn-accent btn-offer" @click="goToDefaultForm">{{ localize("consultBtn") }}</button>
    </div>
  </section>
  <router-view />
</template>

<script>
import {useRouter} from "vue-router";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import PrintUtil from "@/utils/localization/print.util";
export default {
  name: 'HeroComponent',
  mounted() {
    gsap.registerPlugin(TextPlugin);
    gsap.defaults({ease: "none"});

    const localizedSubheadingText = this.localize("typingText");

    const tl = gsap.timeline({repeat: 0, repeatDelay:1, yoyo:false});
    tl.to(".typing-text", {duration: 1.5, text: localizedSubheadingText})
        .to(".typing-text", {x:100})
        .to(".console-cursor", { opacity: 0, repeat: -1, yoyo: true, duration: 0.5 })
        .to(".cursor-small", { opacity: 0, repeat: -1, yoyo: true, duration: 0.5 });
    this.animationsPlayed = true;
  },
  methods: {
    localize(key, module = "heroComponent") {
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
    },
  },
  setup() {
    const router = useRouter();
    const goToDefaultForm = () => {
      router.push({ name: 'form' });
    };

    return {
      goToDefaultForm
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 600px) and (min-width: 300px)   {
 .hero-section {
   padding: 0.5rem!important;
   height: 88vh!important;
 }
  .button-row {
    flex-direction: column!important;
  }
  .hero-heading {
    font-size: 2.5rem!important;
    line-height: 37px!important;
    font-weight: 700!important;
  }
  .hero-subheading-wrapper {
    min-height: 8rem!important;
  }
  .hero-subheading {
    font-size: 3rem!important;
    line-height: 37px!important;
  }
  .console-cursor {
    font-size: 3rem!important;
  }
  .hero-description {
    margin-top: 2rem!important;
  }
}
.hero-section {
  padding: calc(16px + 64 * (100vw - 320px) / 880);
  height: 100vh;
}
.hero-heading {
  font-size: calc(40px + 56 * (100vw - 320px) / 880);
  line-height: calc(40px + 56 * (100vw - 320px) / 880);
  color: #274c77;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  height: 35%;
}
.hero-subheading-wrapper {
  height: 100%;
  min-height: 11rem;
  margin-bottom: 1rem;
}
.hero-subheading {
  text-transform: lowercase;
  font-size: calc(40px + 56 * (100vw - 320px) / 880);
  color: #3a3a3a;
  font-weight: 400;
  line-height: calc(40px + 56 * (100vw - 320px) / 880);
  margin-top: 1vh;
}
.hero-description {
  font-size: 1.6rem;
  margin-bottom: 2rem;
}
.console-cursor {
  line-height: calc(40px + 56 * (100vw - 320px) / 880);
  margin-left: 3px;
  font-size: calc(40px + 56 * (100vw - 320px) / 880);
  color: var(--rhizome);
  animation: blink 0.8s infinite;
  width: 7px;
  height: 15px;
}

</style>

