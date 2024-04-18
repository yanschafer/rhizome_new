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
          <h1 class="case-heading"><span class="rhizome">Information System</span> for a Medical Clinic</h1>
        </div>
      </div>
      <div class="flex flex-row text-row">
        <div class="flex flex-col items-center justify-center">
          <p class="text">
            Increasing revenue for a medical clinic by 5.5% through the implementation of an information system <br><br>
            The information system was developed for the <span class="rhizome">Maternity Hospital (Saint Petersburg)</span> with the aim of optimizing patient data management.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex flex-col container right-text gap-5">
            <div class="flex flex-row gap-5">
              <div class="flex flex-col">
                <span class="subheading">For Whom</span>
                <p>Birth Center and Maternity Period</p>
              </div>
              <div class="flex flex-col">
                <span class="subheading">Technologies</span>
                <p>Web Interface / Vue3</p>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="subheading">Objectives</span>
              <p><span class="rhizome">Simplify and systematize working with patient data:</span> managing appointments, keeping records, generating discharge summaries and findings</p>
            </div>
          </div>
        </div>
      </div>
      <aos-vue animation="fade-up">
        <div class="bg-container container flex flex-col">
          <IconAsterisk ref="icon" class="icon"  color="#274c77" :size="48" stroke-width="2" />
          <h1 class="case-heading mb-5">
            Collaboration
          </h1>
          <p class="subtext">
            As a result of negotiations with the clinic, a decision was made to create a unified patient management system for the clinic. This was necessary for a partial move away from paper-based document management, to increase the productivity of medical staff by reducing the time spent on routine tasks, and to systematize data management between clinic departments and medical staff.
            <br><br>
            Within 3 months, an information system was created and implemented, allowing to:
          </p>
          <ul class="mt-5">
            <li class="list-item">
              •  Keep electronic records of patient appointments;
            </li>
            <li class="list-item">
              •  Track the full history of interactions with each client;
            </li>
            <li class="list-item">
              •  Generate discharge summaries and findings in electronic patient records;
            </li>
          </ul>
          <p class="subtext mt-5" >All patient information is completely confidential, thanks to data encryption, and is accessible exclusively to the clinic's medical staff.<br>
            <b>Rhizome studio</b> specialists were involved in analyzing internal processes, creating the external interface, and developing the logic of the information system's operation.</p>
          <router-link to="/form" class="btn btn-accent btn-offer mt-5">Get a consultation</router-link>
        </div>
      </aos-vue>
    </section>
    <aos-vue animation="fade-up">
      <h1 class="heading-big text-center"><span class="rhizome">System Interface</span></h1>
    </aos-vue>
    <section class="video-demo-section">
      <aos-vue animation="fade-up">
        <Splide :options="options" aria-label="My Favorite Images">
          <SplideSlide class="slide">
            <div class="video-wrapper">
              <img class="case-img" src="@/assets/items/med-clinic/med-interface-1.png" />
            </div>
          </SplideSlide>
          <SplideSlide class="slide">
            <div class="video-wrapper">
              <img class="case-img" src="@/assets/items/med-clinic/med-interface-2.png" />
            </div>
          </SplideSlide>
        </Splide>
      </aos-vue>
    </section>
    <section class="section section5 flex flex-col items-center align-center justify-center p-10">
      <aos-vue animation="fade-up">
        <div class="bg-container container flex flex-col">
          <IconPresentationAnalytics class="icon"  color="#274c77" :size="48" stroke-width="2" />
          <h1 class="case-heading">
            Result
          </h1>
          <p class="subtext mt-5" >
            Thanks to the implementation of the information system in the Maternity Hospital, the time to create medical conclusions and search for patient information on average <span class="rhizome">reduced by 68% - from 10 to 3 minutes</span>.<br>
            Such a significant reduction in time positively affected the labor productivity indicator, and, consequently, the final financial results. <br><br><span class="rhizome">The company's revenue growth over 3 months was 5.5%.</span><br><br>
            Moreover, the error rate in patient record management significantly decreased, thanks to dual access to the system by the registration department and medical staff, which also influenced the above-mentioned financial result.
          </p>
          <router-link to="/form" class="btn btn-accent btn-offer mt-5">Get a consultation</router-link>
        </div>
      </aos-vue>
    </section>
    <section class="section section-result flex flex-col p-10">
      <aos-vue animation="fade-up">
        <h1 class="case-heading mb-10">
          Project Development
        </h1>
      </aos-vue>
      <aos-vue animation="fade-up">
        <p class="subtext">
          As a result of implementing the IS in the clinic, it was possible to achieve comprehensive automation of business and medical processes
        </p>
        <router-link to="/form" class="btn btn-accent btn-offer btn-last mt-5">Get a consultation</router-link>
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
  name: "MedClinicEnView",
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
      }, 500);
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
    margin-top: 1rem;
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