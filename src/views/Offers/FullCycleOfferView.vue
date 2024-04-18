<script>
import {IconArrowLeft, IconCalculator, IconSignature, IconReceipt2, IconThumbUp} from "@tabler/icons-vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import {Vue3Marquee} from "vue3-marquee";
import {useRouter} from "vue-router";
import HeaderMobileComponent from "@/components/HeaderMobileComponent.vue";
import PrintUtil from "@/utils/localization/print.util";
export default {
  name: "FullCycleOfferView",
  components: {
    HeaderMobileComponent,
    HeaderComponent, IconArrowLeft, Vue3Marquee, IconCalculator, IconSignature, IconReceipt2, IconThumbUp},
  data() {
    return {
      isFormRoute: this.$route.name === 'optimization-form'
    };
  },
  methods: {
    localize(key, module = "FullCycleOfferView") {
      return PrintUtil.localize(key, module);
    },
  },
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.back();
    };
    const goToFullCycleForm = () => {
      router.push({ name: 'full-cycle-form' });
    };

    return { goBack, goToFullCycleForm };
  },
  watch: {
    '$route'(to) {
      this.isFormRoute = to.name === 'full-cycle-form';
    }
  }
}
</script>

<template>
  <HeaderMobileComponent />
  <HeaderComponent />
  <router-view />
  <section v-if="!isFormRoute" class=" section flex flex-col justify-center gap-10">
    <div class="flex flex-row gap-5 animate__animated animate__fadeIn">
      <div class="animate__animated animate__fadeIn flex flex-col col-auto justify-center align-center">
        <a class="arrow-wrapper" @click="goBack"><IconArrowLeft size="2rem" color="var(--rhizome)" /></a>
      </div>
      <div class="animate__animated animate__fadeIn flex flex-col col-auto">
        <h1 class="offer-heading">
          {{ localize("fullCycleDevelopment") }}
        </h1>
      </div>
    </div>
    <div class="animate__animated animate__fadeIn flex flex-row justify-evenly text-box">
        <p class="offer-text">
          {{ localize("developmentAutomation") }}
        </p>
      <button class="btn btn-accent btn-offer" @click="goToFullCycleForm">{{ localize("orderDevelopment") }}</button>
    </div>
    <div class="animate__animated animate__fadeIn flex flex-col">
      <Vue3Marquee  :gradient="true" gradientLength="20px" :gradient-color="[30, 30, 30]" :pause-on-hover="true" :clone="true" class="animate__animated animate__fadeIn mb-3 container offers-container">
        <div class="card-dark">
          <h2 class="h2">{{ localize("businessProcessAudit") }}</h2>
        </div>
        <div class="card-dark">
          <h2 class="h2">{{ localize("technicalDocumentationDevelopment") }}</h2>
        </div>
        <div class="card-dark">
          <h2 class="h2">{{ localize("brandingAndDesign") }}</h2>
        </div>
        <div class="card-dark">
          <h2 class="h2">{{ localize("prototyping") }}</h2>
        </div>
      </Vue3Marquee>
      <Vue3Marquee :gradient=true gradientLength="20px" :gradient-color="[30, 30, 30]" :pause-on-hover="true" :clone="true" :direction="'reverse'" class="animate__animated animate__fadeIn mb-3 container offers-container">
        <div class="card-dark">
          <h2 class="h2">{{ localize("backendAndFrontendDevelopment") }}</h2>
        </div>
        <div class="card-dark">
          <h2 class="h2">{{ localize("productImplementation") }}</h2>
        </div>
        <div class="card-dark">
          <h2 class="h2">{{ localize("testing") }}</h2>
        </div>
        <div class="card-dark">
          <h2 class="h2">{{ localize("optimization") }}</h2>
        </div>
      </Vue3Marquee>
    </div>
    <div class="animate__animated animate__fadeIn flex flex-row gap-5 offers-row">
      <div class="offer-small">
        <p class="offer-small-text">
          <IconCalculator size="2rem" color="#3987da" />
          {{ localize("introductoryFreeConsultation") }}
        </p>
      </div>
      <div class="offer-small">
        <p class="offer-small-text">
          <IconSignature size="2rem" color="#3987da" />
          {{ localize("termsOfReferenceAgreement") }}
        </p>
      </div>
      <div class="offer-small flex flex-col gap-10">
        <p class="offer-small-text">
          <IconReceipt2 size="2rem" color="#3987da" />
          {{ localize("prepaymentAndSequentialDevelopment") }}
        </p>
      </div>
      <div class="offer-small">
        <p class="offer-small-text">
          <IconThumbUp size="2rem" color="#3987da" />
          {{ localize("projectDeliverySupportAndMaintenance") }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  .offer-heading {
    font-size: 23px!important;
    line-height: 23px!important;
  }
  .offer-text {
    font-size: 13px!important;
    width: 98vw!important;
    text-align: left;
    align-items: center!important;
    margin-bottom: 1rem!important;
  }
  .btn-offer {
    font-size: 1rem!important;
  }
  .section {
    padding: 2rem 0.3rem 0.3rem 0.3rem !important;
    gap: 1rem!important;
    flex-direction: column!important;
    justify-content: center!important;
  }
  .text-box {
    flex-direction: column;
  }
  .offers-row {
    display: flex!important;
    flex-direction: row!important;
    flex-wrap: wrap!important;
    justify-content: center!important;
}
  .offer-small {
    max-width: 9rem!important;
    height: 110px!important;
  }
  .offer-small-text {
    font-size: 12px!important;
  }
  .h2 {
    font-size: 0.8rem!important;
  }
}
.section {
  background: rgb(30, 30, 30);
  height: 100vh;
  position: relative;
  padding: 5rem;
}
.offer-heading {
  color: #fff;
  font-size: 60px;
}
.arrow-wrapper {
  border: 2px solid var(--rhizome);
  border-radius: 50%;
}
.offer-text {
  color: #fff;
  font-size: 24px;
  margin: 0;
  width: 50rem;
}
.navbar {
  background: rgb(30, 30, 30);
  color: white;
  border-bottom: 1px solid #2a2a2a;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out ;
}
.card-dark {
  background-color: #1e1e1e;
  padding: 1rem;
  max-width: 30rem;
  max-height: 5rem;
  display: flex;
  margin-right: 2rem;
  margin-left: 0;
  align-items: center;
  align-self: center;
  justify-content: center;
  min-height: 3rem;
  border-radius: 1.3rem;
  border: 1px solid rgba(255, 255, 255, 0.11);
}
.h2 {
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: lowercase;
  color: #3987da;
  margin-bottom: 0;
  font-family: Point, sans-serif;
}
.offer-small-text {
  color: #fff;
  font-size: 18px;
}
.offer-small {
  padding: 1rem;
  max-width: 23rem;
  gap: 2rem;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  border-radius: 1.3rem;
  border: 1px solid rgba(255, 255, 255, 0.11);
}
.btn-offer {
  background-color: #3987da;
}
.navbar-mobile {
  background: rgb(30, 30, 30);
  border: 0px solid black;
}
:deep(.mobile-sidebar) {
  background: rgb(30, 30, 30);
  color: white!important;
}
:deep(.mobile-item) {
  color: white;
}
</style>