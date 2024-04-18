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
          <h1 class="case-heading"><span class="rhizome">Система управления складами</span> для сети испанских салонов красоты</h1>
          <p class="subtext">
            Проект является масштабной кастомной системой управления складами в рамках сети салонов красоты и дистрибьютора косметических средств <span class="rhizome">SIBERIA</span> (Испания).
          </p>
          <div class="flex flex-row right-text gap-10">
            <div class="flex flex-row gap-5">
              <div class="flex flex-col">
                <span class="subheading">Технологии</span>
                <div class="flex flex-row"><button v-tooltip="{ value: 'Vue3 — прогрессивный фреймворк для создания пользовательских интерфейсов. Использовался для реализации веб-интерфейса ', autoHide: false }"><IconBrandVue /></button><button v-tooltip="{ value: 'Kotlin - это высокоэффективный современный язык программирования, разработанный компанией JetBrains. Лежит в основе backend составляющей проекта', autoHide: false }"><IconBrandKotlin /></button><button v-tooltip="{ value: 'Flutter — фреймворк для разработки мобильных пользовательских интерфейсов, созданный Google. Позволяет создавать кроссплатформенные приложения.', autoHide: false }"><IconBrandFlutter /></button></div>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="subheading">Сроки</span>
              <p>9 месяцев</p>
            </div>
            <div class="flex flex-col">
              <span class="subheading">Устройства</span>
              <p>Web-браузеры, Android, iOS</p>
            </div>
            <div class="flex flex-col">
              <span class="subheading">Языки</span>
              <p>Английский, испанский, русский</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-container container flex flex-col">
        <h1 class="case-heading mb-5">
          Ключевые задачи в рамках проекта
        </h1>
        <p class="subtext" v-html="localizedHtmlContent">
        </p>
        <ul class="mt-1">
          <li class="list-item">
            •  Длительное время приемки товаров и сборки заказов;
          </li>
          <li class="list-item">
            •  Большое число инвентаризаций;
          </li>
          <li class="list-item">
            •  Длительное время доставки товара покупателям.
          </li>
        </ul>
        <p class="subtext mt-5" >В процессе разработки важно было учесть высокий показатель SKU - более 10 000 единиц складского учета, и наличие нескольких складов.</p>
        <aos-vue animation="fade-up" placement="top-bottom">
          <h1 class="case-heading mb-2 mt-5">
            Сотрудничество
          </h1>
          <p class="subtext mt-5">
            В ходе переговоров было принято решение о необходимости разработки простой системы управления складами и реализации на ее базе дополнительных возможностей аналитики и кастомной CRM-системы.<br><br>
            Процесс разработки был разделен на 3 итерации.
          </p>
        </aos-vue>
        <router-link to="/form" class="btn btn-accent btn-offer mt-5">получить консультацию</router-link>
      </div>

      <div class="flex flex-col text-row">
        <div class="flex flex-col items-start justify-start">
          <aos-vue animation="fade-up" placement="top-bottom">
            <div class="flex flex-col col-auto">
              <h1 class="case-heading"><span class="subheading-small">Итерации 1-2</span> / Система <b>управления складами</b></h1>
              <p class="subtext">В рамках первых двух этапов сотрудничества была полностью создана базовая система управления складами, позволяющая осуществлять приемку товаров, управлять транспортировками и контролировать остатки.
              </p>
            </div>
          </aos-vue>
        </div>

      </div>
      <aos-vue animation="fade-up">
        <div class="bg-container container flex flex-col">
          <IconAsterisk ref="icon2" class="icon"  color="black" :size="48" stroke-width="2" />
          <h1 class="case-heading mb-5">
            Разработка
          </h1>
          <p class="subtext">
            Для повышения эффективности деятельности и перераспределения пространства все склады были полностью оцифрованы.
            В рамках реализации решения была создана система перемещения товаров с автоматической подготовкой всех документов, что позволило сократить время приемки и сборки заказов, а также - число инвентаризаций.<br><br>
            Ускорение доставки покупателям было достигнуто благодаря прямой интеграции Nexters (служба доставки) с мгновенным автоматическим созданием отправлений на этапе завершения сборки.<br><br>
            Система полностью адаптивна под уникальные бизнес-процессы SIBERIA и оптимизирована после тестирования персоналом организации. Дизайн основывался на составляющих корпоративного бренда SIBERIA и референса amoCRM
          </p>

          <router-link to="/form" class="btn btn-accent btn-offer mt-5">получить консультацию</router-link>
        </div>
      </aos-vue>
    </section>
    <aos-vue animation="fade-up" placement="top-bottom">
      <section id="section3" ref="section3" class="section2 flex items-center flex-col p-10">
        <div class="flex flex-col text-row">
          <div class="flex flex-col items-start justify-start">
            <div class="flex flex-col col-auto">
              <h1 class="case-heading mb-5"><span class="subheading-small">Итерация 3</span> / Усовершенствование системы управления складами и кастомная CRM-система управления складами</h1>
              <p class="subtext">Ключевой задачей третьего этапа является расширение функциональных возможностей системы управления складами - синхронизация данных складского учета с аналитикой продаж, складских остатков и кастомной CRM-системой.
              </p>
            </div>
          </div>

        </div>
        <aos-vue animation="fade-up">
          <div class="bg-container-dark container flex flex-col">
            <IconAsterisk ref="icon" class="icon"  color="black" :size="48" stroke-width="2" />
            <h1 class="case-heading mb-5">
              Разработка
            </h1>
            <p class="subtext">
              Данная итерация находится на этапе практического исполнения командой Rhizome<br><br>
              <b>В функциональное наполнение будут внедрены:</b>
            </p>
            <ul class="mt-1">
              <li class="list-item">
                •  CRM-система;
              </li>
              <li class="list-item">
                •  Интеграция с потребительскими процессами (управление существующей веб-системой);
              </li>
              <li class="list-item">
                •  Визуализация данных по базовым бизнес-процессам (продажи, финансы) и контроль остатков, на базе аналитики и интеграций.
              </li>
            </ul>
            <router-link to="/form" class="btn btn-accent btn-offer mt-5">получить консультацию</router-link>
          </div>
        </aos-vue>
        <aos-vue animation="fade-up">
          <h1 class="heading-big text-center"><b>Интерфейс</b> системы</h1>
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
          Развитие проекта
        </h1>
      </aos-vue>
      <aos-vue animation="fade-up">
        <p class="subtext">
          В результате завершения двух итераций в компанию SIBERIA была внедрена базовая система управления складами, которая позволила усовершенствовать и автоматизировать работу с внутренними и внешними логистическими процессами.<br><br>

          В краткосрочном периоде это повлияло на сокращение ошибок, уменьшение временной ёмкости на выполнение идентичных операций, улучшение качества взаимодействия с клиентами и гибкость, по отношению к изменениям.<br><br>

          Сотрудничество Rhizome с SIBERIA продолжается. План работ основывается на совершенствовании системы управления складами, для повышения эффективности закупок и оптимизации процесса ценообразования.<br><br>
        </p>
        <router-link to="/form" class="btn btn-accent btn-offer btn-last mt-5">получить консультацию</router-link>
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
  name: "SiberiaRuView",
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