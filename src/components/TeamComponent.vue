<script>
import TeamTabsComponent from "@/components/TeamElements/TeamSliderComponent.vue";
import PrintUtil from "@/utils/localization/print.util";
export default {
  name: "TeamComponent",
  components: {TeamTabsComponent},
  methods: {
    localize(key, module = "teamComponent") {
      return PrintUtil.localize(key, module);
    },
  }
}
</script>

<template>
  <section class="section">
    <div class="container team-container pl-20">
      <h1 class="heading-big">{{localize('teamHeading')}}</h1>
    </div>
    <TeamTabsComponent />
  </section>
</template>

<style scoped>
@media only screen and (max-width: 600px) and (min-width: 300px) {
  .team-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .heading-big {
    font-size: 4rem!important;
  }
  .section {
    max-height: 60rem!important;
  }
}
.section {
  overflow: hidden;
  max-height: 45rem;
}

.text {
  font-size: 1.6rem;
}
.heading-big {
  color: #3a3a3a;
  font-weight: 500;
}
</style>