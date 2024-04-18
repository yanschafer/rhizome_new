<script>
import PrintUtil from "@/utils/localization/print.util";
export default {
  name: "NumbersComponent",
  methods: {
    localize(key, module = "numbersComponent") {
      return PrintUtil.localize(key, module);
    },
  }
}
</script>

<template>
<section class="section flex flex-col justify-center items-center mt-10">
  <aos-vue animation="fade-up">
    <div class="container numbers-container">
      <div class="flex flex-row gap-10 number-row">
        <div class="flex flex-col basis-1/2">
          <aos-vue animation="fade-up" placement="zoom-in-up">
            <h3 class="number">> 20</h3>
            <p class="numbers-text">{{ localize("firstNumber") }}</p>
          </aos-vue>
        </div>
        <div class="flex flex-col basis-1/2">
          <aos-vue animation="fade-up" placement="zoom-in-up">
            <h3 class="number">3</h3>
            <p class="numbers-text">{{ localize("secondNumber") }}</p>
          </aos-vue>
        </div>
        <div class="flex flex-col basis-1/2">
          <aos-vue animation="slide-up" placement="zoom-in-up">
            <h3 class="number">1</h3>
            <p class="numbers-text">{{ localize("thirdNumber") }}</p>
          </aos-vue>
        </div>
      </div>
    </div>
  </aos-vue>
</section>
</template>

<style scoped>
@media only screen and (max-width: 1120px) and (min-width: 300px) {
  .number-row {
    flex-direction: column!important;
    justify-content: center!important;
    gap: 1rem;
  }
  .numbers-text {
    text-align: left!important;
  }
  .number {
    text-align: left!important;
  }
  .numbers-container {
    padding: 2rem!important;
    gap: 0.3rem!important;
    width: 90vw!important;
    border-radius: 1rem!important;
  }
}
.numbers-container {
  width: 95vw;
  padding: 4rem;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  background-blend-mode: soft-light,normal,normal;
  background-image: url(../assets/landing/competitions-bg.jpg);
  background-size: cover;
  background-position: 50%;
}
.number {
  font-size: calc(80px + 0.25vw);
  font-weight: 700;
  color: #3987da;
}
.numbers-text {
  font-size: 24px;
  line-height: 29px;
  color: #fff;
}
</style>