<script>
import {IconArrowLeft, IconCalculator, IconSignature, IconReceipt2, IconThumbUp} from "@tabler/icons-vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import {Vue3Marquee} from "vue3-marquee";
import {useRouter} from "vue-router";
import HeaderMobileComponent from "@/components/HeaderMobileComponent.vue";
import PrintUtil from "@/utils/localization/print.util";
export default {
  name: "OptimizationOffer",
  components: {
    HeaderMobileComponent,
    HeaderComponent, IconArrowLeft, Vue3Marquee, IconCalculator, IconSignature, IconReceipt2, IconThumbUp},
  data() {
    return {
      isFormRoute: this.$route.name === 'optimization-form'
    };
  },
  methods: {
    localize(key, module = "OptimizationOfferView") {
      return PrintUtil.localize(key, module);
    },
  },
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.back();
    };
    const goToOptimizationForm = () => {
      router.push({ name: 'optimization-form' });
    };

    return { goBack, goToOptimizationForm };
  },
  watch: {
    '$route'(to) {
      this.isFormRoute = to.name === 'optimization-form';
    }
  }
}
</script>

<template>
  <HeaderMobileComponent />
  <HeaderComponent />
  <router-view />
  <section v-if="!isFormRoute" class="animate__animated animate__fadeIn section flex flex-col justify-center gap-10">
    <div class="flex flex-row gap-5">
      <div class="flex flex-col col-auto justify-center align-center">
        <a class="arrow-wrapper" @click="goBack"><IconArrowLeft size="2rem" color="var(--rhizome)" /></a>
      </div>
      <div class="flex flex-col col-auto justify-center">
        <h1 class="offer-heading">
          {{ localize("systemOptimization") }}
        </h1>
      </div>
    </div>
    <div class="flex flex-row justify-evenly text-box">
      <p class="offer-text">
        {{ localize("efficiencyImprovement") }}
      </p>
      <button class="btn btn-accent btn-offer" @click="goToOptimizationForm"> {{ localize("orderDevelopment") }}</button>
    </div>
    <div class="flex flex-col">
      <Vue3Marquee  :gradient="true" gradientLength="20px" :pause-on-hover="true" :clone="true" class="mb-3 container offers-container">
        <div class="card-dark">
          <h2 class="h2"> {{ localize("audit") }}</h2>
        </div>
        <div class="card-dark">
          <h2 class="h2"> {{ localize("bottleneckIdentification") }}</h2>
        </div>
        <div class="card-dark">
          <h2 class="h2"> {{ localize("development") }}</h2>
        </div>
        <div class="card-dark">
          <h2 class="h2">{{ localize("additionalModules") }}</h2>
        </div>
      </Vue3Marquee>
      <Vue3Marquee :gradient=true gradientLength="20px" :pause-on-hover="true" :clone="true" :direction="'reverse'" class="mb-3 container offers-container">
        <div class="card-dark">
          <h2 class="h2">{{ localize("optimization") }}</h2>
        </div>
        <div class="card-dark">
          <h2 class="h2">{{ localize("testing") }}</h2>
        </div>
        <div class="card-dark">
          <h2 class="h2">{{ localize("implementation") }}</h2>
        </div>
        <div class="card-dark">
          <h2 class="h2">{{ localize("support") }}</h2>
        </div>
      </Vue3Marquee>
    </div>
    <div class="flex flex-row gap-5 offers-row">
      <div class="offer-small">
        <p class="offer-small-text">
          <IconCalculator size="2rem" color="var(--rhizome)" />
          {{ localize("introductoryFreeConsultation") }}
        </p>
      </div>
      <div class="offer-small">
        <p class="offer-small-text">
          <IconSignature size="2rem" color="var(--rhizome)" />
          {{ localize("existingSystemsAudit") }}
        </p>
      </div>
      <div class="offer-small flex flex-col gap-10">
        <p class="offer-small-text">
          <IconReceipt2 size="2rem" color="var(--rhizome)" />
          {{ localize("termsOfReferenceAgreement") }}
        </p>
      </div>
      <div class="offer-small">
        <p class="offer-small-text">
          <IconThumbUp size="2rem" color="var(--rhizome)" />
          {{ localize("fulfillmentOfObligations") }}
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
  background: white;
  height: 100vh;
  position: relative;
  padding: 5rem;
}
.offer-heading {
  color: black;
  font-size: 60px;
}
.arrow-wrapper {
  border: 2px solid var(--rhizome);
  border-radius: 50%;
}
.offer-text {
  color: black;
  font-size: 24px;
  margin: 0;
  width: 50rem;
}
.navbar {
  background: transparent;
  color: black;
  border: 0;
}
.card-dark {
  background-color: white;
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
  border: 2px solid var(--rhizome);
}
.h2 {
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: lowercase;
  color: var(--rhizome);
  margin-bottom: 0;
  font-family: Point, sans-serif;
}
.offer-small-text {
  color: black;
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
  border: 2px solid var(--rhizome);
}
.btn-offer {
  background-color: var(--rhizome);
}
</style>