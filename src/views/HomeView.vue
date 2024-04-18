<script>
import HeroComponent from "@/components/HeroComponent.vue";
import CompetitionsComponent from "@/components/CompetitionsComponent.vue";
import CasesComponent from "@/components/CasesComponent.vue";
import OffersComponent from "@/components/OffersComponent.vue";
import NumbersComponent from "@/components/NumbersComponent.vue";
import TeamComponent from "@/components/TeamComponent.vue";
import ValuesComponent from "@/components/ValuesComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import HeaderMobileComponent from "@/components/HeaderMobileComponent.vue";
import PreloaderComponent from "@/components/UI/PreloaderComponent.vue";
import ScrollProgressComponent from "@/components/UI/ScrollProgressComponent.vue";

export default {
  name: "HomeView",
  components: {
    ScrollProgressComponent,
    PreloaderComponent,
    HeaderMobileComponent,
    HeaderComponent,
    ValuesComponent,
    TeamComponent, NumbersComponent, OffersComponent, CasesComponent, CompetitionsComponent, HeroComponent, FooterComponent}
}
</script>

<template>
  <HeaderMobileComponent id="navbar-mobile" />
  <section class="section">
    <HeaderComponent />
    <HeroComponent class="hero" />
    <NumbersComponent />
    <CompetitionsComponent />
    <div id="cases" class="anchor"></div>
    <CasesComponent />
    <div id="offers" class="anchor"></div>
    <OffersComponent />
    <div id="team" class="anchor"></div>
    <TeamComponent />
    <ValuesComponent />
    <div id="contacts" class="anchor"></div>
    <FooterComponent />
  </section>
  <ScrollProgressComponent />
  <PreloaderComponent />

</template>

<style scoped>
@media only screen and (max-width: 600px) {
  .anchor {
    height: 1px!important;
  }
  .section {
    padding-top: 3rem;
  }
}
.anchor {
  width: 100%;
  height: 5rem;
}
</style>