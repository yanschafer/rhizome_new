<template>
  <HeaderMobileComponent id="navbar-mobile" />
  <HeaderComponent />
  <section class="animate__animated animate__fadeIn animate__delay-1s">
    <section class="animate__animated animate__fadeIn section1 flex flex-col items-center align-center justify-center p-10">
      <div class="flex flex-row gap-5">
        <div class="flex flex-col col-auto justify-center align-center">
          <a class="arrow-wrapper" @click="goBack"><IconArrowLeft size="2rem" color="var(--rhizome)" /></a>
        </div>
        <div class="flex flex-col col-auto">
          <h1 class="case-heading"><span class="rhizome">Ecosystem</span> for reducing staff turnover and company expenses by more than 30%</h1>
        </div>
      </div>
      <div class="flex flex-row text-row">
        <div class="flex flex-col items-center">
          <p class="text">
            The project is a comprehensive ecosystem for analyzing the psychological state of line staff, managers, and independent specialists. As part of Reply, employees undergo weekly surveys. The collected information is analyzed, including comparisons with previous periods, and visualized on an online dashboard. Based on the results, a list of recommendations is formed for each specialist. A separate personal account is created for the management of organizations, where the final dashboard of staff conditions is placed, with the ability to divide employees into groups, a general characteristic of the psychological climate, and a list of recommendations. All specialists have access to an individual chat with a psychologist for personal work and normalization of the psychological state. Special attention in this project is given to data security and confidentiality, so all passwords and internal dialogs are encrypted.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex flex-col container right-text gap-10">
            <div class="flex flex-col">
              <span class="subheading">For whom</span>
              <p>The startup project Reply is a personal development of the Rhizome studio</p>
            </div>
            <div class="flex flex-col">
              <span class="subheading">Technologies</span>
              <p>Telegram Webapp/Vue3</p>
            </div>
            <div class="flex flex-col">
              <span class="subheading">Tasks</span>
              <p>Create a <span class="rhizome">scalable service</span> that will increase the productivity level of employees, reduce staff turnover, by working on the psychological climate in the team and the condition of each employee in the company.</p>
            </div>
          </div>
        </div>
      </div>
      <aos-vue animation="fade-up">
        <div class="bg-container container flex flex-col">
          <IconAsterisk ref="icon" class="icon"  color="#274c77" :size="48" stroke-width="2" />
          <h1 class="case-heading">
            The entire ecosystem's creation and testing process was conducted by the <b>Rhizome</b> team:
          </h1>
          <ul class="mt-5">
            <li class="list-item">
              • <span class="rhizome">market analysis</span>;
            </li>
            <li class="list-item">
              • <span class="rhizome">development</span> of the optimal market <span class="rhizome">product concept</span>;
            </li>
            <li class="list-item">
              • <span class="rhizome">development of the Reply app</span> <span class="rhizome">and chat-bot</span> for employee notifications;
            </li>
            <li class="list-item">
              • creation of <span class="rhizome">design elements</span>;
            </li>
            <li class="list-item">
              • <span class="rhizome">MVP testing</span> in real market conditions;
            </li>
            <li class="list-item">
              • <span class="rhizome">improvement and optimization</span>, based on testing results on target groups.
            </li>
          </ul>
          <p class="subtext mt-5">All activities were implemented within 6 months.</p>
          <router-link to="/form" class="btn btn-accent btn-offer mt-5">get a consultation</router-link>
        </div>
      </aos-vue>
    </section>
    <aos-vue animation="fade-up">
      <h1 class="heading-big text-center"><span class="rhizome">Demo</span> of work</h1>
    </aos-vue>
    <section class="video-demo-section">
      <aos-vue animation="fade-up">
        <Splide :options="options" aria-label="My Favorite Images">
          <SplideSlide class="slide">
            <div class="video-wrapper">
              <video muted loop autoplay src="@/assets/videos/case-reply/reply-demo-1.mp4"></video>
            </div>
          </SplideSlide>
          <!-- Additional SplideSlides here -->
        </Splide>
      </aos-vue>
    </section>
    <section class="section section5 flex flex-col items-center align-center justify-center p-10">
      <aos-vue animation="fade-up">
        <div class="bg-container container flex flex-col">
          <IconPresentationAnalytics class="icon"  color="#274c77" :size="48" stroke-width="2" />
          <h1 class="case-heading">Result</h1>
          <p class="subtext mt-5">In just six months, a unique application was created that meets the set task and market requirements: accessibility for both organizations and independent specialists, flexibility, and evident effectiveness.</p>
          <router-link to="/form" class="btn btn-accent btn-offer mt-5">get a consultation</router-link>
        </div>
      </aos-vue>
    </section>
    <section class="section section-result flex flex-col p-10">
      <aos-vue animation="fade-up">
        <h1 class="case-heading mb-10">Project development</h1>
      </aos-vue>
      <aos-vue animation="fade-up">
        <p class="subtext">
          After implementing Reply in the company Agava, which is engaged in computer game development, it was possible to reduce expenses by 30%, while employee engagement was over 70% for 6 months. Agava employs over 60 IT specialists aged 16-37 years.
          <br><br>
          The results of working with HR managers of mass recruitment company GreenPers were also positive - it was possible to reduce staff turnover by 30%. Employee engagement over 3 months exceeded 80%, the main segment being women aged 20 to 37 years.
          <br><br>
          An additional case is the implementation of Reply in AliveBe, a service for conducting online competitions. As a result of the collaboration, it was possible to reduce the stress level of participants by more than 30% in just two weeks.
          <br><br>
          The described cases confirm the effectiveness of the entire product management cycle by the Rhizome studio from creation to tangible business results for your company.
        </p>
        <router-link to="/form" class="btn btn-accent btn-offer btn-last mt-5">get a consultation</router-link>
      </aos-vue>
    </section>
  </section>
  <FooterComponent class="animate__animated animate__fadeIn animate__delay-2s" />
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import HeaderMobileComponent from "@/components/HeaderMobileComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {IconArrowLeft, IconAsterisk, IconPresentationAnalytics} from "@tabler/icons-vue";
import gsap from "gsap";
import { ref, onMounted } from 'vue';
import {useRouter} from "vue-router";
import PreloaderComponent from "@/components/UI/PreloaderComponent.vue";
export default {
  name: "PsyReplyEnView",
  components: {
    PreloaderComponent,
    IconArrowLeft,
    FooterComponent,
    HeaderComponent,
    HeaderMobileComponent,
    Splide,
    SplideSlide,
    IconAsterisk,
    IconPresentationAnalytics
  },
  setup() {
    const icon = ref(null);

    const router = useRouter();
    const goBack = () => {
      router.back();
    };

    onMounted(() => {
      setTimeout(() => {
        window.scrollTo(0,0);
      }, 400);
      gsap.to(icon.value, {
        rotation: '360',
        duration: 2,
        repeat: -1,
        ease: 'linear',
      });
    });

    return {
      icon, goBack
    };
  },
}
</script>

<style scoped>
@media only screen and (max-width: 600px) and (min-width: 300px) {
  .case-heading {
    font-size: 30px !important;
    font-weight: 600;
    line-height: 25px!important;
  }
  .text {
    width: auto!important;
  }
  .right-text {
    width: auto!important;
  }
  .section5 {
    padding: 0.3rem!important;
  }
  .video-wrapper {
    width: 20rem!important;
    border-radius: 1rem!important;
    padding-bottom: 0!important;
  }
  .slide {
  }
  .right-text {
    flex-direction: column!important;
  }
  .heading-row {
    flex-direction: column!important;
  }
  .arrow-wrapper {
    width: 2.3rem;
  }
  .section1 {
    padding-top: 5rem!important;
    padding-left: 0.3rem!important;
    padding-right: 0.3rem!important;
  }
  .text-row {
    flex-direction: column!important;
  }
  .section2 {
    padding: 0.5rem!important;
    padding-top: 5rem!important;
  }
  .bg-container {
    padding: 0.8rem!important;
    border-radius: 1rem!important;
  }
  .subtext {
    font-size: 18px!important;
    line-height: 20px!important;
  }
  .bg-container:first-child {
    margin-top: 3rem!important;
  }
  .bg-container-dark {
    padding: 0.5rem!important;
    border-radius: 1rem!important;
    margin-top: 1rem!important;
  }
  .heading-big {
    font-size: 40px!important;
    margin-top: 1rem!important;
  }
  .section1 {
    gap: 0.5rem!important;
  }
  .section-result {
    margin-top: 5rem;
  }
}
  .section-result {
    padding-top: 3rem;
    background-color: #e7ecef;
    border-bottom: 1px solid #c8d8e0;
}
  .video-demo-section {
    top: -8rem;
    position: relative;
  }
  .section1 {
    padding-top: 10rem;
    gap: 5rem;
  }
  .case-heading {
    font-size: 60px;
    line-height: 60px;
  }
  .subheading {
    color: #afafaf;
    line-height: 20px;
    text-transform: lowercase;
    font-size: 28px;
    margin-bottom: 1rem;
  }
  .text {
    width: 40rem;
    color: #4f4f4f;
    font-size: 16px;
  }
  .rhizome {
    color: var(--rhizome);
    font-weight: 700;
  }
  .text-row {
    gap: 3rem!important;
    width: 100%;
    justify-content: center;
  }
  .right-text {
    width: 45rem;
  }
  .bg-container {
    border-radius: 40px;
    background-image: linear-gradient(135deg,#f5f7fa,#c3cfe2);
    background-size: cover;
    background-position: 50%;
    width: 100%;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    padding: 3rem 3rem 2rem 3rem;
    box-shadow: -47px 82px 119px -32px rgba(230,235,243,1),
    251px -77px 66px -37px rgba(210,219,233,0.64);
  }
  .list-item {
    font-size: 18px;
  }
  .subtext {
    font-size: 20px;
  }
  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
    padding-bottom: 9rem;
  }
  .video-wrapper {
    width: 60rem;
    box-shadow: -34px 62px 68px 0px rgba(13,120,255,0.3),
    57px 39px 44px -24px rgba(14,95,255,0.22),
    42px -59px 79px -44px rgba(202,0,255,0.22);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 2rem;
    overflow: hidden;
  }
  :deep(.splide__pagination__page.is-active) {
    background: var(--rhizome);
  }
  .overlay {
    z-index: 99999;
    position: fixed;
    padding-left: 2rem;
    padding-right: 2rem;
    backdrop-filter: blur(20px);
    border-radius: 2rem 2rem 0 0;
    top: 10.05rem;
    background-color: rgba(255, 255, 255, 0.7);
    height: 5rem;
    width: 77.9%;
    overflow: hidden;
  }
  :deep(.splide__arrow) {
    background: var(--rhizome);
    color: white;
  }
  :deep(.splide__arrow svg) {
    fill: white;
  }
  .btn-last {
    max-width: 20rem;
  }
  .arrow-wrapper {
    border: 2px solid var(--rhizome);
    border-radius: 50%;
  }
</style>