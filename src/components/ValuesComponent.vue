<script>
import PrintUtil from "@/utils/localization/print.util";
export default {
  name: "ValuesComponent",
  methods: {
    localize(key, module = "valuesComponent") {
      return PrintUtil.localize(key, module);
    },
  }
}
</script>

<template>
<section class="section">
  <h1 class="heading-big">{{localize("valuesHeading")}}</h1>
  <div class="flex flex-row gap-10 justify-around items-center values-row">
    <div class="flex flex-col">
      <div class="card">
        <h4 class="card-title">{{localize("firstValueName")}}</h4>
        <hr class="hr" />
        <p class="card-text">{{localize("firstValueDescription")}}</p>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="card">
        <h4 class="card-title">{{localize("secondValueName")}}</h4>
        <hr class="hr" />
        <p class="card-text">{{localize("secondValueDescription")}}</p>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="card">
        <h4 class="card-title">{{localize("thirdValueName")}}</h4>
        <hr class="hr" />
        <p class="card-text">{{localize("thirdValueDescription")}}</p>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
@media only screen and (max-width: 600px) and (min-width: 300px) {
  .section {
    padding: 1rem!important;
    margin-bottom: 3rem;
  }
  .heading-big {
    font-size: 3.8rem!important;
    line-height: 3.8rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  .values-row {
    flex-direction: column!important;
  }
  .card {
    width: 21rem!important;
    height: 100%!important;
  }
  .card-title {
    font-size: 37px!important;
  }
  .card-text {
    text-align: center;
  }
}
.section {
  padding: 5rem;
}
.rhizome {
  color: var(--rhizome);
  font-weight: 600;
}
.card-title {
  font-weight: 600;
  color: #274c77;
  font-size: 40px;
}
.card-text {
  font-size: 20px;
}
.card {
  width: 25rem;
  height: 18rem;
  border-radius: 1rem;
  background-color: white;
  padding: 2rem;
  -webkit-box-shadow: 0px 4px 18px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 18px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 18px 0px rgba(34, 60, 80, 0.2);
}
.hr {
  margin-top: 1.5rem;
  margin-bottom: 1.3rem;
}
</style>