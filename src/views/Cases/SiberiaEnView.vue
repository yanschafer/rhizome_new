<template>
  <HeaderMobileComponent id="navbar-mobile" />
  <HeaderComponent />
  <section class="animate__animated animate__fadeIn animate__delay-1s">
      <section class="animate__animated animate__fadeIn section1 flex flex-col items-center align-center justify-center p-10">
        <div class="flex flex-row gap-5 heading-row">
          <div class="flex flex-col col-auto justify-start pt-4 align-center">
            <a class="arrow-wrapper" @click="goBack"><IconArrowLeft size="2rem" color="var(--rhizome)" /></a>
          </div>
          <div class="flex flex-col col-auto">
            <h1 class="case-heading"><span class="rhizome">Warehouse Management System</span> for the network of Spanish beauty salons</h1>
            <p class="subtext">
              The project is a large-scale custom warehouse management system within the network of beauty salons and a cosmetics distributor <span class="rhizome">SIBERIA</span> (Spain).
            </p>
            <div class="flex flex-row right-text gap-10">
              <div class="flex flex-row gap-5">
                <div class="flex flex-col">
                  <span class="subheading">Technologies</span>
                  <div class="flex flex-row"><button v-tooltip="{ value: 'Vue3 — a progressive framework for building user interfaces. It was used for the implementation of the web interface', autoHide: false }"><IconBrandVue /></button><button v-tooltip="{ value: 'Kotlin - a highly efficient modern programming language developed by JetBrains. It underlies the backend part of the project', autoHide: false }"><IconBrandKotlin /></button><button v-tooltip="{ value: 'Flutter — a framework for developing mobile user interfaces, created by Google. Allows creating cross-platform applications.', autoHide: false }"><IconBrandFlutter /></button></div>
                </div>
              </div>
              <div class="flex flex-col">
                <span class="subheading">Duration</span>
                <p>9 months</p>
              </div>
              <div class="flex flex-col">
                <span class="subheading">Devices</span>
                <p>Web browsers, Android, iOS</p>
              </div>
              <div class="flex flex-col">
                <span class="subheading">Languages</span>
                <p>English, Spanish, Russian</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-container container flex flex-col">
          <h1 class="case-heading mb-5">
            Key tasks within the project
          </h1>
          <p class="subtext">
            <b class="rhizome">SIBERIA</b> has a sufficiently extensive organizational structure, which includes <b>wholesale, retail, an online store, and a network of beauty salons.</b>
            <br>
            To manage these elements, it was necessary to synchronize the list of internal and external logistical processes with accurate analytics and the sales process.
            <br>
            Special attention was required for <b class="rhizome">internal logistical processes,</b> significantly reducing the efficiency of the organization's activities:
            <br>
          </p>
          <ul class="mt-1">
            <li class="list-item">
              •  Long goods acceptance and order assembly times;
            </li>
            <li class="list-item">
              •  A large number of inventories;
            </li>
            <li class="list-item">
              •  Extended delivery times to customers.
            </li>
          </ul>
          <p class="subtext mt-5" >In the development process, it was important to consider the high SKU indicator - more than 10,000 stock keeping units, and the presence of multiple warehouses.</p>
          <aos-vue animation="fade-up" placement="top-bottom">
            <h1 class="case-heading mb-2 mt-5">
              Cooperation
            </h1>
            <p class="subtext mt-5">
              During the negotiations, it was decided to develop a simple warehouse management system and implement additional analytics capabilities and a custom CRM system based on it.<br><br>
              The development process was divided into 3 iterations.
            </p>
          </aos-vue>
          <router-link to="/form" class="btn btn-accent btn-offer mt-5">get a consultation</router-link>
        </div>

        <div class="flex flex-col text-row">
          <div class="flex flex-col items-start justify-start">
            <aos-vue animation="fade-up" placement="top-bottom">
              <div class="flex flex-col col-auto">
                <h1 class="case-heading"><span class="subheading-small">Iterations 1-2</span> / Warehouse <b>Management System</b></h1>
                <p class="subtext">During the first two stages of cooperation, a complete basic warehouse management system was created, allowing for the acceptance of goods, management of transportations, and control of balances.
                </p>
              </div>
            </aos-vue>
          </div>

        </div>
        <aos-vue animation="fade-up">
          <div class="bg-container container flex flex-col">
            <IconAsterisk ref="icon2" class="icon"  color="black" :size="48" stroke-width="2" />
            <h1 class="case-heading mb-5">
              Development
            </h1>
            <p class="subtext">
              To increase the efficiency of operations and redistribute space, all warehouses were fully digitized.
              As part of the solution implementation, a goods movement system was created with automatic preparation of all documents, which allowed reducing the time for goods acceptance and order assembly, as well as the number of inventories.<br><br>
              The acceleration of delivery to customers was achieved thanks to direct integration with Nexters (delivery service) with instant automatic creation of shipments at the stage of assembly completion.<br><br>
              The system is fully adaptable to the unique business processes of SIBERIA and was optimized after testing by the organization's staff. The design was based on the components of the SIBERIA corporate brand and amoCRM reference.
            </p>

            <router-link to="/form" class="btn btn-accent btn-offer mt-5">get a consultation</router-link>
          </div>
        </aos-vue>
      </section>
      <aos-vue animation="fade-up" placement="top-bottom">
        <section id="section3" ref="section3" class="section2 flex items-center flex-col p-10">
          <div class="flex flex-col text-row">
            <div class="flex flex-col items-start justify-start">
              <div class="flex flex-col col-auto">
                <h1 class="case-heading mb-5"><span class="subheading-small">Iteration 3</span> / Improvement of the warehouse management system and a custom CRM warehouse management system</h1>
                <p class="subtext">The key task of the third stage is to expand the functional capabilities of the warehouse management system - synchronization of warehouse accounting data with sales analytics, stock balances, and a custom CRM system.
                </p>
              </div>
            </div>

          </div>
          <aos-vue animation="fade-up">
            <div class="bg-container-dark container flex flex-col">
              <IconAsterisk ref="icon" class="icon"  color="black" :size="48" stroke-width="2" />
              <h1 class="case-heading mb-5">
                Development
              </h1>
              <p class="subtext">
                This iteration is at the stage of practical execution by the Rhizome team<br><br>
                <b>The functional content will include:</b>
              </p>
              <ul class="mt-1">
                <li class="list-item">
                  •  CRM system;
                </li>
                <li class="list-item">
                  •  Integration with consumer processes (management of the existing web system);
                </li>
                <li class="list-item">
                  •  Data visualization of basic business processes (sales, finance) and stock control, based on analytics and integrations.
                </li>
              </ul>
              <router-link to="/form" class="btn btn-accent btn-offer mt-5">get a consultation</router-link>
            </div>
          </aos-vue>
          <aos-vue animation="fade-up">
            <h1 class="heading-big text-center"><b>System Interface</b></h1>
          </aos-vue>
          <section class="video-demo-section">
            <aos-vue animation="fade-up">
              <Splide :options="options" aria-label="My Favorite Images">
                <SplideSlide class="slide">
                  <div class="video-wrapper">
                    <video
                        muted
                        loop
                        autoplay
                        src="@/assets/items/siberia/siberia-cp-demo.mp4"
                    >

                    </video>
                  </div>
                </SplideSlide>
              </Splide>
            </aos-vue>
          </section>
        </section>
      </aos-vue>
      <section class="section section-result flex flex-col p-10">
        <aos-vue animation="fade-up">
          <h1 class="case-heading mb-10">
            Project development
          </h1>
        </aos-vue>
        <aos-vue animation="fade-up">
          <p class="subtext">
            As a result of completing two iterations, a basic warehouse management system was implemented in the SIBERIA company, which allowed to improve and automate work with internal and external logistical processes.<br><br>

            In the short term, this influenced the reduction of errors, decrease in the time required to perform identical operations, improvement of customer interaction quality, and flexibility in relation to changes.<br><br>

            The cooperation between Rhizome and SIBERIA continues. The work plan is based on improving the warehouse management system, to increase the efficiency of procurement and optimize the pricing process.<br><br>
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
import {IconArrowLeft, IconAsterisk, IconPresentationAnalytics, IconBrandVue,IconBrandKotlin, IconBrandFlutter} from "@tabler/icons-vue";
import gsap from "gsap";
import { ref, onMounted, onBeforeUnmount } from 'vue';
import {useRouter} from "vue-router";
import PreloaderComponent from "@/components/UI/PreloaderComponent.vue";
import PrintUtil from "@/utils/localization/print.util";
export default {
  name: "SiberiaEnView",
  components: {
    PreloaderComponent,
    IconArrowLeft,
    FooterComponent,
    HeaderComponent,
    HeaderMobileComponent,
    Splide,
    SplideSlide,
    IconAsterisk,
    IconPresentationAnalytics,
    IconBrandVue,
    IconBrandKotlin,
    IconBrandFlutter
  },
  data() {
    return {
      localizedHtmlContent: PrintUtil.localize('siberiaBlock4p3', "SiberiaView",),
    };
  },
  methods: {
    localize(key, module = "SiberiaView") {
      return PrintUtil.localize(key, module);
    },
  },
  setup() {

    const icon = ref(null);
    const icon2 = ref(null);


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
      gsap.to(icon2.value, {
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
  #navbar-mobile {
    z-index: 999999999999;
  }
  .case-heading {
    font-size: 28px !important;
    line-height: 36px!important;
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
    padding: 3rem 0.3rem 0.3rem 0.3rem!important;
  }
  .section2 {
    padding: 0.5rem!important;
    padding-top: 5rem!important;
  }
  .bg-container {
    padding: 0.5rem!important;
    border-radius: 1rem!important;
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
  .section {
    padding: 0.5rem!important;
  }
  .section-result {
    margin-top: 5rem;
  }
}
.section-result {
  padding-top: 3rem;
  background-color: white;
  border-bottom: 1px solid #c8d8e0;
}
.video-demo-section {
  top: -8rem;
  position: relative;
}
.section1 {
  padding-top: 10rem;
  gap: 2rem;
}
.section2 {
  padding-top: 10rem;
  gap: 2rem;
  background-color: black;
  color: white;
}
.case-heading {
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
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
  border-radius: 1rem;
  background-image: linear-gradient(135deg, #f6f6f6, #ffffff);
  background-size: cover;
  background-position: 50%;
  width: 100%;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem 2rem 3rem;
  box-shadow: -47px 82px 119px -32px rgb(243, 243, 243),
  251px -77px 66px -37px rgba(236, 236, 236, 0.64);
}
.bg-container-dark {
  border-radius: 1rem;
  background-color: white;
  background-size: cover;
  background-position: 50%;
  margin-top: 6rem;
  width: 100%;
  color: black;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem 2rem 3rem;
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
  padding: 10rem;
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
  border: 2px solid black;
  border-radius: 50%;
}
.heading-subheading {
  font-size: 2rem;
}
.btn-offer {
  background-color: black;
  color: white;
  border: 0px;
}
:deep(.btn-offer) {
  background-color: black;
  color: white;
  border: 0px;
}
.subheading-small {
  color: #afafaf;
  font-size: 1.75rem;
}
.subheading-smaller {
  color: #afafaf;
  font-size: 1.5rem;
}
.right-text {
  width: 100%;
  margin-top: 1rem;
}
:deep(.logo) {
  filter: brightness(0) saturate(100%);
}
:deep(.mailto) {
  color: black;
}
:deep(.policy-link) {
  color: black;
}
:deep(svg) {
  filter: brightness(0) saturate(100%);
}
:deep(.splide__pagination__page.is-active) {
  background: white;
}
.footer-section {
  background-color: white;
}
*::-webkit-scrollbar-thumb {
  background-color: black!important;
  border-radius: 10px;
  border: 2px none #ffffff;
}
* {
  scrollbar-width: thin;
  scrollbar-color: black #ffffff!important;
}
.p-tooltip-text {
  width: 100rem!important;
  max-width: 100rem!important;
  background: black!important;
}
.p-tooltip {
  background-color: black!important;
}
.case-heading-smaller {}
</style>