<script>
import {IconCalculator, IconPackageExport, IconSpeakerphone} from "@tabler/icons-vue";
import PrintUtil from "@/utils/localization/print.util";
export default {
  name: "CompetitionsComponent",
  components: {IconCalculator, IconPackageExport, IconSpeakerphone},
  methods: {
    localize(key, module = "competitionsComponent") {
      return PrintUtil.localize(key, module);
    },
  }
}
</script>

<template>
  <section class="section flex flex-row justify-center">
    <div class="container-fluid competitions-container">
      <aos-vue animation="fade-up" placement="zoom-in-up">
        <h1 class="competitions-heading">{{ localize("competitionsHeading") }}</h1>
      </aos-vue>
      <aos-vue animation="fade-up" placement="zoom-in-up">
        <p class="competitions-text mb-14">{{ localize("competitionsSubheading") }}</p>
      </aos-vue>

      <div class="flex flex-row justify-between gap-10 competitions-row mb-14 competitions-row">
        <div class="flex flex-col basis-1/2">
          <IconCalculator color="#a3cef1" size="2.8rem" />
          <h2 class="text-white compete-name">{{ localize("firstItemHeading") }}</h2>
          <br>
          <ul class="competitions-list-items">
            <li> • <b>{{ localize("analytics") }}</b> {{ localize("firstItemFirstLi") }}</li>
            <br>
            <li> • <b>{{ localize("finances") }}</b>  {{ localize("firstItemSecondLi") }}</li>
          </ul>
        </div>
        <div class="flex flex-col basis-1/2">
          <IconPackageExport color="#a3cef1" size="2.8rem" />
          <h2 class="text-white compete-name">{{ localize("secondItemHeading") }}</h2>
          <br>
          <ul class="competitions-list-items">
            <li> • <b>{{ localize("commersion") }}</b> {{ localize("commersionText") }}</li>
            <br>
            <li> • <b>{{ localize("logistics") }}</b> {{ localize("logisticsText") }}</li>
          </ul>
        </div>
        <div class="flex flex-col basis-1/2">
          <IconSpeakerphone color="#a3cef1" size="2.8rem" />
          <h2 class="text-white compete-name">{{ localize("thirdItemHeading") }}</h2>
          <br>
          <ul class="competitions-list-items">
            <li> • <b>{{ localize("hrm") }}</b> {{ localize("hrmText") }}</li>
            <br>
            <li> • <b>{{ localize("innerCommunications") }}</b> {{ localize("innerText") }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media only screen and (max-width: 1120px) and (min-width: 300px) {
  .competitions-heading {
    font-size: 2.5rem!important;
    font-weight: 600;
    line-height: 2rem;
    margin-bottom: 2rem;
  }
  .competitions-text {
    line-height: 2rem!important;
  }
  .competitions-container {
    padding: 2rem!important;
    border-radius: 1rem!important;
  }
  .competitions-row {
    flex-direction: column;
    margin-bottom: 0;
  }
}
  .section {
    width: 100%;
  }
  .competitions-container {
    border-radius: 66px;
    margin-top: 3rem;
    margin-bottom: 5rem;
    background-blend-mode: soft-light,normal,normal;
    background-image: url(../assets/landing/competitions-bg.jpg);
    background-size: cover;
    background-position: 50%;
    width: 90vw;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: auto;
    padding: 3rem 3rem 3rem 3rem;

  }
  .competitions-heading {
    font-size: 7vw;
    color: white;
  }
  .competitions-text {
    font-size: 30px;
    color: #fff;
    line-height: 20px;
  }
  .competitions-text-small {
    font-size: 1.5rem;
    color: #fff;
    line-height: 30px;
  }
  .compete-name {
    color: #fafafa;
    font-size: 2rem;

  }
  .competitions-list-items {
    color: #fafafa;
    font-size: 1.3rem;
    line-height: 25px;
  }
  .competitions-row {
    width: 100%;
  }
</style>