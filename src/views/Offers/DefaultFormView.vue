<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import {IconArrowLeft} from "@tabler/icons-vue";
import {useRouter} from "vue-router";
import SelectButton from "primevue/selectbutton";
import { ref } from 'vue';
import 'primevue/resources/themes/aura-light-green/theme.css'
import axios from "axios";
import PrintUtil from "@/utils/localization/print.util";
export default {
  name: "DefaultFormView",
  components: {IconArrowLeft, HeaderComponent, SelectButton},
  data() {
    return {
      progressValue: 0,
      error: null,
      form: true,
      reqData: {
        name: '',
        phone: '',
        email: '',
        type: PrintUtil.localize("call", "DefaultFormView"),
        context: '',
      },
      fieldErrors: {
        name: false,
        phone: false,
        email: false
      },
    }
  },
  methods: {
    localize(key, module = "DefaultFormView") {
      return PrintUtil.localize(key, module);
    },
    send() {
      let isValid = true;

      this.fieldErrors.name = !this.reqData.name;
      this.fieldErrors.phone = !this.reqData.phone;
      this.fieldErrors.email = !this.reqData.email;


      if (this.fieldErrors.name || this.fieldErrors.phone || this.fieldErrors.email) {
        this.error = PrintUtil.localize("error", "DefaultFormView");
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      this.error = null;
      console.log(this.reqData);
      const url = "https://api.rhizomedev.com/send-mail"
      axios.post(url, this.reqData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
          .then(response => {
            this.form = false;
            this.progressValue = 0;

            const progressBarInterval = 50;
            const progressBarTotalSteps = 100;
            let progressBarStep = 0;


            const intervalId = setInterval(() => {
              if (this.progressValue < 100) {
                this.progressValue += 1; // Увеличиваем прогресс
              } else {
                clearInterval(intervalId); // Останавливаем интервал, когда достигнут максимум
                this.$router.push({ name: 'home' }); // Переход на главную страницу
              }
            }, progressBarInterval);
          })
          .catch(error => {
            console.error('Ошибка при отправке данных:', error);
            console.error('Проблема:', error.message);
          });
    },
  },
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.back();
    };
    const value = ref(PrintUtil.localize("call", "DefaultFormView"));
    const options = ref([PrintUtil.localize("call", "DefaultFormView"), PrintUtil.localize("write", "DefaultFormView"),]);

    return { goBack, value, options };
  }
}
</script>

<template>
  <HeaderComponent />
  <router-view />
  <section class="animate__animated animate__fadeIn section flex flex-row justify-center gap-10" v-if="form">
    <div class="container form-container">
      <div class="flex flex-row gap-5">
        <div class="flex flex-col col-auto justify-center align-center">
          <a class="arrow-wrapper" @click="goBack"><IconArrowLeft size="2rem" color="var(--rhizome)" /></a>
        </div>
        <div class="flex flex-col col-auto justify-center">
          <h1 class="offer-heading">
            {{ localize("consultation") }}
          </h1>
        </div>
      </div>
      <p class="form-text mb-2">{{localize("formText")}}</p>
      <div v-if="error" class="mb-2 error-message animate__animated animate__fadeIn animate__fast">
        {{ error }}
      </div>
      <div class="container-fluid flex flex-col gap-5 main-container">
        <label :class="{'error-label': fieldErrors.name}" class="input input-bordered flex items-center gap-2">
          {{ localize("fullName") }}
          <input v-model="reqData.name" type="text" class="grow" :placeholder='localize("fullNamePlaceholder")' />
        </label>
        <label :class="{'error-label': fieldErrors.phone}" class="input input-bordered flex items-center gap-2">
          {{ localize("phoneNumber") }}
          <input v-model="reqData.phone" type="tel" class="grow" placeholder="+7-999-999-99-99" />
        </label>
        <label :class="{'error-label': fieldErrors.email}" class="input input-bordered flex items-center gap-2">
          {{ localize("email") }}
          <input v-model="reqData.email" type="email" class="grow" placeholder="example@rhizomedev.com" />
        </label>
        <div class="label flex flex-row justify-start gap-2 button-row">
          <span class="label-text">{{ localize("preferredContactMethod") }}</span>
          <SelectButton v-model="reqData.type" :options="options" aria-labelledby="basic" />
        </div>
        <textarea v-model="reqData.context" class="textarea textarea-bordered" :placeholder='localize("commentPlaceholder")'></textarea>
        <button @click="send" class="btn btn-accent btn-offer">{{ localize("submitButton") }}</button>
        <p class="disclaimer-light text-center">{{ localize("privacyPolicy") }}<router-link class="link" to="/privacy-ru">
          {{ localize("defaultPolicyLink") }}</router-link></p>
      </div>
    </div>
  </section>
  <section v-else class="section2 flex flex-col justify-center align-center gap-5">
    <div class="container ty-container flex flex-col justify-center align-center items-center">
      <p class="thank-you-message">{{localize("thankYouMessage")}}</p>
      <progress class="progress progress-primary w-56" :value="progressValue" max="100"></progress>
    </div>
  </section>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  .offer-heading {
    line-height: 23px!important;
    font-size: 26px!important;
  }
  .form-text {
    font-size: 14px!important;
  }
  .main-container {
    gap: 0.3rem!important;
  }
  label {
    font-size: 12px!important;
  }
  :deep(.p-button-label) {
    font-size: 1rem!important;
  }
  .btn-offer {
    font-size: 1rem!important;
    height: 0.3rem!important;
    min-height: 2.3rem!important;
    padding: 0.3rem!important;
  }
  .section {
    padding: 0.3rem!important;
  }
  .button-row {
    display: flex;
    flex-direction: column;
  }
}
.section {
  background: white;
  height: 100vh;
  position: relative;
  padding: 5rem;
  padding-bottom: 2rem;
}
.section2 {
  background: white;
  height: 100vh;
  position: relative;
  display: flex;
  gap: 2rem;
  padding-bottom: 2rem;
  align-items: center;
  flex-direction: column;
}
.offer-heading {
  font-size: 45px;
  color: var(--rhizome);
  font-weight: 500;
}
.arrow-wrapper {
  border: 2px solid var(--rhizome);
  border-radius: 50%;
}
.form-text {
  font-size: 20px;
}
.form-container {
  width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.text-area {
  width: 100%;
}
.error-message {
  color: red;
}
.error-label {
  color: red;
}
.progress {
  width: 100%;
  margin-top: 2rem;
}
.ty-container {
  width: 45rem;
  text-align: center;
  font-size: 24px;
}
</style>