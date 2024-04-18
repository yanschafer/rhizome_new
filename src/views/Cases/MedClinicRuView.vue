<template>
  <HeaderMobileComponent id="navbar-mobile" />
  <HeaderComponent />
  <section class="animate__animated animate__fadeIn animate__delay-1s">
    <section class="animate__animated animate__fadeIn section1 flex flex-col items-center align-center justify-center p-10">
      <div class="flex flex-row gap-5">
        <div class="flex flex-col col-auto justify-center align-center">
          <a class="arrow-wrapper" @click="goBack"><IconArrowLeft size="2rem" color="var(--rhizome)" /></a>
        </div>
        <div class="flex flex-col col-auto">
          <h1 class="case-heading"><span class="rhizome">Информационная система</span> для медицинской клиники</h1>
        </div>
      </div>
      <div class="flex flex-row text-row">
        <div class="flex flex-col items-center justify-center">
          <p class="text">
            Повышение выручки медицинской клиники на 5,5% за счет внедрения информационной системы <br><br>
            Информационная система разрабатывалась для <span class="rhizome">Родильного дома (Санкт-Петербург)</span> с целью оптимизации работы с данными пациентов.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex flex-col container right-text gap-5">
            <div class="flex flex-row gap-5">
              <div class="flex flex-col">
                <span class="subheading">Для кого</span>
                <p>Центр родов и родильного периода</p>
              </div>
              <div class="flex flex-col">
                <span class="subheading">Технологии</span>
                <p>Веб интерфейс / Vue3</p>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="subheading">Задачи</span>
              <p><span class="rhizome">Упростить и систематизировать работу с данными пациенток:</span> управление приемами, ведение карточек, формирование выписок и заключений</p>
            </div>
          </div>
        </div>
      </div>
      <aos-vue animation="fade-up">
        <div class="bg-container container flex flex-col">
          <IconAsterisk ref="icon" class="icon"  color="#274c77" :size="48" stroke-width="2" />
          <h1 class="case-heading mb-5">
            Сотрудничество
          </h1>
          <p class="subtext">
            В результате переговоров с клиникой было принято решение о создании единой системы учета пациентов для клиники.Это было необходимым для частичного отказа от бумажного документооборота, повышения производительности медицинского персонала, за счет сокращения времени на выполнение рутинных задач, и систематизации учета данных между отделами клиники и медицинскими сотрудниками.
            <br><br>
            За 3 месяца была создана и внедрена информационная система, позволяющая:
          </p>
          <ul class="mt-5">
            <li class="list-item">
              •  Вести электронную запись пациенток на прием;
            </li>
            <li class="list-item">
              •  Отслеживать полную историю взаимодействия с каждой клиенткой;
            </li>
            <li class="list-item">
              •  Формировать выписки и заключения в электронной карточки пациента;
            </li>
          </ul>
          <p class="subtext mt-5" >Вся информация о пациентах является полностью конфиденциальной, за счет шифрования данных,и доступна исключительно медицинскому персоналу клиники.<br>
            Специалисты <b>студии Rhizome</b> были привлечены к анализу внутренних процессов, созданию внешнего интерфейса и разработке логики работы информационной системы.</p>
          <router-link to="/form" class="btn btn-accent btn-offer mt-5">получить консультацию</router-link>
        </div>
      </aos-vue>
    </section>
    <aos-vue animation="fade-up">
      <h1 class="heading-big text-center"><span class="rhizome">Интерфейс</span> системы</h1>
    </aos-vue>
    <section class="video-demo-section">
      <aos-vue animation="fade-up">
        <Splide :options="options" aria-label="My Favorite Images">
          <SplideSlide class="slide">
            <div class="video-wrapper">
              <img class="case-img" src="@/assets/items/med-clinic/med-interface-1.png" />
            </div>
          </SplideSlide>
          <SplideSlide class="slide">
            <div class="video-wrapper">
              <img class="case-img" src="@/assets/items/med-clinic/med-interface-2.png" />
            </div>
          </SplideSlide>
        </Splide>
      </aos-vue>
    </section>
    <section class="section section5 flex flex-col items-center align-center justify-center p-10">
      <aos-vue animation="fade-up">
        <div class="bg-container container flex flex-col">
          <IconPresentationAnalytics class="icon"  color="#274c77" :size="48" stroke-width="2" />
          <h1 class="case-heading">
            Результат
          </h1>
          <p class="subtext mt-5" >
            За счет внедрения информационной системы в Родильный дом время формирования медицинских заключений и поиска информации о пациентах в среднем <span class="rhizome">сократилось на 68% - с 10 до 3 минут</span>.<br>
            Столь значительное снижение объема времени оказало положительное влияние на показатель производительности труда, и, как следствие, итоговые финансовые показатели. <br><br><span class="rhizome">Рост выручки компании за 3 месяца составил 5,5%.</span><br><br>
            Кроме того, значительно сократился показатель ошибок в ведение учета записи пациентов, за счет двустороннего доступа к системе регистратурного отдела и медицинского персонала, что также оказало влияние, на озвученный выше финансовый результат.
          </p>
          <router-link to="/form" class="btn btn-accent btn-offer mt-5">получить консультацию</router-link>
        </div>
      </aos-vue>
    </section>
    <section class="section section-result flex flex-col p-10">
      <aos-vue animation="fade-up">
        <h1 class="case-heading mb-10">
          Развитие проекта
        </h1>
      </aos-vue>
      <aos-vue animation="fade-up">
        <p class="subtext">
          В результате внедрения ИС в клинику, удалось достичь комплексной автоматизации бизнес и лечебных процессов
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
import {IconArrowLeft, IconAsterisk, IconPresentationAnalytics} from "@tabler/icons-vue";
import gsap from "gsap";
import { ref, onMounted } from 'vue';
import {useRouter} from "vue-router";
import PreloaderComponent from "@/components/UI/PreloaderComponent.vue";
export default {
  name: "MedClinicRuView",
  components: {
    PreloaderComponent,
    IconArrowLeft,
    FooterComponent,
    HeaderComponent,
    HeaderMobileComponent,
    Splide,
    SplideSlide,
    IconAsterisk,
    IconPresentationAnalytics
  },
  setup() {
    const icon = ref(null);

    const router = useRouter();
    const goBack = () => {
      router.back();
    };

    onMounted(() => {
      setTimeout(() => {
        window.scrollTo(0,0);
      }, 500);
      gsap.to(icon.value, {
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
  .case-heading {
    font-size: 30px !important;
    font-weight: 600;
    line-height: 25px!important;
  }
  .text {
    width: auto!important;
  }
  .right-text {
    width: auto!important;
  }
  .section5 {
    padding: 0.3rem!important;
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
    padding-top: 5rem!important;
    padding-left: 0.3rem!important;
    padding-right: 0.3rem!important;
  }
  .text-row {
    flex-direction: column!important;
  }
  .section2 {
    padding: 0.5rem!important;
    padding-top: 5rem!important;
  }
  .bg-container {
    padding: 0.8rem!important;
    border-radius: 1rem!important;
  }
  .subtext {
    font-size: 18px!important;
    line-height: 20px!important;
  }
  .bg-container:first-child {
    margin-top: 3rem!important;
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
  .section1 {
    gap: 0.5rem!important;
  }
  .section-result {
    margin-top: 1rem;
  }
}
.section-result {
  padding-top: 3rem;
  background-color: #e7ecef;
  border-bottom: 1px solid #c8d8e0;
}
.video-demo-section {
  top: -8rem;
  position: relative;
}
.section1 {
  padding-top: 10rem;
  gap: 5rem;
}
.case-heading {
  font-size: 60px;
  line-height: 60px;
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
  color: var(--rhizome);
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
  border-radius: 40px;
  background-image: linear-gradient(135deg,#f5f7fa,#c3cfe2);
  background-size: cover;
  background-position: 50%;
  width: 100%;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem 2rem 3rem;
  box-shadow: -47px 82px 119px -32px rgba(230,235,243,1),
  251px -77px 66px -37px rgba(210,219,233,0.64);
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
  border: 2px solid var(--rhizome);
  border-radius: 50%;
}
</style>