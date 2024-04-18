<script>
import {IconBrandTelegram, IconBrandWhatsapp} from "@tabler/icons-vue";
import PrintUtil from "@/utils/localization/print.util";
export default {
  name: "FooterComponent",
  components: {IconBrandTelegram, IconBrandWhatsapp},
  methods: {
    localize(key, module = "footerComponent") {
      return PrintUtil.localize(key, module);
    },
  }
}
</script>

<template>
  <section class="footer-section">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col">
        <img class="logo" src="@/assets/logo.svg" />
        <a class="mailto" href="mailto:info@rhizomedev.com">info@rhizomedev.com</a>
      </div>
      <div class="icons-row flex flex-row align-end justify-end items-end">
        <a href="https://t.me/romanbonch"><IconBrandTelegram size="3rem" color="var(--rhizome)" /></a>
        <a href="https://api.whatsapp.com/send/?phone=79955977888&text=Здравствуйте%21+Меня+интересует+вводная+консультация+от+Rhizome.&type=phone_number&app_absent=0"><IconBrandWhatsapp size="3rem" color="var(--rhizome)" /></a>
      </div>
    </div>
    <span class="policy-span">/<router-link class="policy-link" to="/privacy-ru">{{localize("policy")}}</router-link></span>
  </section>
</template>

<style scoped>
@media only screen and (max-width: 600px) and (min-width: 300px) {
  .mailto {
    font-size: 1.3rem!important;
  }
  .icons-row {
    flex-direction: column!important;
  }
}
.footer-section {
  padding: 2rem;
  background-color: #e7ecef;
}
.logo {
  width: 100%;
  max-width: 7rem;
}
.mailto {
  color: var(--rhizome);
  font-size: 4rem;
  font-weight: 700;
}
.policy-span {
  font-weight: 500;
  color: black;
}
.policy-link {
  color: var(--rhizome);
}
</style>