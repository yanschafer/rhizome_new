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
          <h1 class="case-heading"><span class="subheading-small">Кейс 1</span> / <span class="rhizome">Разработка полноценного сайта за 2 дня</span> для Академии Цифровых Технологий</h1>
        </div>
      </div>
      <div class="flex flex-row text-row">
        <div class="flex flex-col items-center justify-center">
          <p class="text">
            Заказчиком разработки веб-сайта являлось государственное образовательное учреждение “Академия Цифровых Технологий Санкт-Петербурга” в 2018 году.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex flex-col container right-text gap-5">
            <div class="flex flex-row gap-2">
              <div class="flex flex-col">
                <span class="subheading">Для кого</span>
                <p>ГБНОУ "Академия цифровых технологий"</p>
              </div>
              <div class="flex flex-col" style="width: 50%;">
                <span class="subheading">Технологии</span>
                <p>Wordpress</p>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="subheading">Задачи</span>
              <p>Создание сайта с возможностью размещения новостной ленты, с учетом максимально сжатых сроков работы</p>
            </div>
          </div>
        </div>
      </div>
      <aos-vue animation="fade-up">
        <div class="bg-container container flex flex-col">
          <IconAsterisk ref="icon" class="icon"  color="#274c77" :size="48" stroke-width="2" />
          <!--        <h1 class="case-heading mb-5">-->
          <!--          Сотрудничество-->
          <!--        </h1>-->
          <p class="subtext">
            Ключевая особенность данного сотрудничества - <span class="rhizome">это необходимость создания полноценного сайта с шестью ключевыми разделами и новостным порталом менее чем за 7 дней.</span>
            Общий срок реализации проекта командой Rhizome, включающий согласование технического задания, составил всего 2 дня.<br><br>

            Учитывая специфику поставленной задачи, необходимость ведения новостного блога, сайт разрабатывался на WordPress.
          </p>
        </div>
      </aos-vue>
    </section>
    <aos-vue animation="fade-up">
      <h1 class="heading-big text-center"><span class="rhizome">Вебсайт</span></h1>
    </aos-vue>
    <section class="video-demo-section">
      <aos-vue animation="fade-up">
        <Splide :options="options" aria-label="My Favorite Images">
          <SplideSlide class="slide">
            <div class="video-wrapper">
              <img class="case-img" src="@/assets/items/compilation/adt/adt-website-1.png" />
            </div>
          </SplideSlide>
          <SplideSlide class="slide">
            <div class="video-wrapper">
              <img class="case-img" src="@/assets/items/compilation/adt/adt-website-2.png" />
            </div>
          </SplideSlide>
        </Splide>
        <div class="flex flex-row justify-center gap-5 btn-row">
          <router-link to="/form" class="btn btn-accent btn-offer btn-last mt-5">получить консультацию</router-link>
          <button class="btn btn-accent btn-outline btn-last mt-5">на сайт Академии</button>
        </div>
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
            Проект был принят заказчиком и функционирует более 5 лет, без внесения изменений.<br>
            Следует отметить, что несмотря на сжатые сроки реализации, сайт был первым по дизайну среди образовательных организаций России более 2-х лет.
          </p>
          <router-link to="/form" class="btn btn-accent btn-offer mt-5">получить консультацию</router-link>
        </div>
      </aos-vue>
    </section>

    <section class="section2 flex flex-col items-center align-center justify-center p-10">
      <div class="flex flex-row gap-5">
        <div class="flex flex-col col-auto justify-center align-center">
          <a class="arrow-wrapper" style="border-color: #31d5b8;" @click="goBack"><IconArrowLeft size="2rem" color="#31d5b8" /></a>
        </div>
        <div class="flex flex-col col-auto">
          <h1 class="case-heading"><span class="subheading-small">Кейс 2</span> / <span class="rhizome-green">Элементы айдентики и веб-сайт</span> для CPARoll</h1>
        </div>
      </div>
      <div class="flex flex-row text-row">
        <div class="flex flex-col items-center justify-center">
          <p class="text">
            Брендирование и разработка сайта для агрегатора партнерских программ. Заказчиком проекта является CpaRoll – партнерская сеть от RollerAds.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex flex-col container right-text gap-5">
            <div class="flex flex-row gap-5">
              <div class="flex flex-col">
                <span class="subheading">Для кого</span>
                <p>CPARoll</p>
              </div>
              <div class="flex flex-col">
                <span class="subheading">Технологии</span>
                <p>Figma, HTML, SAAS, JS</p>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="subheading">Задачи</span>
              <p>Создать все брендирование от логотипа до графических элементов и подготовить веб-сайт.</p>
            </div>
          </div>
        </div>
      </div>
      <aos-vue animation="fade-up">
        <div class="bg-green container flex flex-col">
          <IconAsterisk ref="icon2" class="icon"  color="#31d5b8" :size="48" stroke-width="2" />
          <p class="subtext">
            На общую реализацию всего проекта, включающую в себя согласование технического задание, брендинг и разработку сайта, было затрачено 2,5 недели.
            <br><br>
            Проект является мультиязычным и работает с 80+ странами мира, поэтому основная версия сайта и элементы айдентики создавались студией Rhizome на английском языке.
          </p>
        </div>
      </aos-vue>
    </section>
    <aos-vue animation="fade-up">

    </aos-vue>
    <div class="container-fluid">
      <div class="flex flex-row logo-row">
        <img class="cparoll-logo" src="@/assets/items/compilation/cparoll/logo.png" />
      </div>
      <section class="video-demo-section2">
        <aos-vue animation="fade-up">
          <div class="flex flex-row gap-5 pl-5 pr-5">
            <div class="flex flex-col col-auto justify-center">
              <div class="video-wrapper-small">
                <video
                    muted
                    loop
                    autoplay
                    src="@/assets/items/compilation/cparoll/website-demo.mp4"
                >

                </video>
              </div>
            </div>
            <div class="flex flex-col col-auto justify-center">
              <img class="dummy" src="@/assets/items/compilation/cparoll/cparoll-identity-dummy.png" />
            </div>
          </div>
          <div class="flex flex-row justify-center gap-5 btn-row mt-5">
            <router-link to="/form" class="btn btn-accent btn-offer btn-green btn-last mt-5 ">получить консультацию</router-link>
            <button class="btn btn-accent btn-outline btn-outline-green btn-last mt-5">сайт CPARoll</button>
          </div>
        </aos-vue>
      </section>
    </div>
    <section class="section2 flex flex-col items-center align-center justify-center p-10">
      <aos-vue animation="fade-up">
        <div class="bg-green container flex flex-col">
          <IconPresentationAnalytics class="icon"  color="#31d5b8" :size="48" stroke-width="2" />
          <h1 class="case-heading">
            Результат
          </h1>
          <p class="subtext mt-5" >
            Проект функционирует с 2022 года без внесения изменений в брендинг, оформление и наполнение веб-сайта.
            <br><br>
            Это не единственный проект студии Rhizome, реализованный на иностранном языке. Команда самостоятельно внедряет англоязычные решения и сотрудничает со специалистами-переводчиками.
          </p>
        </div>
      </aos-vue>
    </section>

    <section class="section3 flex flex-col items-center align-center justify-center p-10">
      <div class="flex flex-row gap-5">
        <div class="flex flex-col col-auto justify-center align-center">
          <a class="arrow-wrapper" style="border-color: #ff4500;" @click="goBack"><IconArrowLeft size="2rem" color="#ff4500" /></a>
        </div>
        <div class="flex flex-col col-auto">
          <h1 class="case-heading"><span class="subheading-small">Кейс 3</span> / <span class="rhizome-orange">Хайп-календарь</span> для пиарщика №1 в России</h1>
        </div>
      </div>
      <div class="flex flex-row text-row mt-10">
        <div class="flex flex-col items-center justify-center">
          <p class="text" style="color: white;">
            Дизайнеры студии <b>Rhizome</b> являются комплексными специалистами, совмещающими графический дизайн, web-дизайн и web-разработку.
            <br><br>
            Поэтому в портфолио студии есть кейсы графического дизайна для ТОПов рынка.
            <br><br>
            Заказчиком является <b>команда Романа Масленникова</b> - одного из наиболее популярных и востребованных пиарщиков в России.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex flex-col container right-text gap-5">
            <div class="flex flex-row gap-5">
              <div class="flex flex-col">
                <span class="subheading">Для кого</span>
                <p>Роман Масленников</p>
              </div>
              <div class="flex flex-col">
                <span class="subheading">Технологии</span>
                <p>Adobe Photoshop<br>Adobe Illustrator</p>
              </div>
            </div>
            <div class="flex flex-row gap-5">
              <div class="flex flex-col">
                <span class="subheading">Задачи</span>
                <p>Создание дизайна для печатного календаря на 2021 год</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aos-vue animation="fade-up">
        <div class="flex flex-row justify-center items-center mt-20 mb-20">
          <img class="calendar" src="@/assets/items/compilation/calendar/calendar.jpg" />
        </div>
      </aos-vue>
      <div class="flex flex-row justify-center gap-5 btn-row">
        <router-link to="/form" class="btn btn-accent btn-offer btn-orange btn-last mt-5">получить консультацию</router-link>
        <button class="btn btn-accent btn-outline btn-outline-orange btn-last mt-5">хайп-календарь на литрес</button>
      </div>
    </section>

    <section class="section3 flex flex-col items-center align-center justify-center p-10">
      <aos-vue animation="fade-up">
        <div class="orange-container container flex flex-col">
          <IconPresentationAnalytics class="icon"  color="#ff4500" :size="48" stroke-width="2" />
          <h1 class="case-heading">
            Результат
          </h1>
          <p class="subtext mt-5" >
            Проект был реализован и активно распродан в актуальном году.
          </p>
        </div>
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
  name: "CompilationRuView",
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
  .btn-row {
    flex-direction: column!important;
    align-items: center!important;
  }
  .btn-last {
    margin: 0!important;
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
  border-bottom: 1px solid #c8d8e0;
}
.video-demo-section {
  top: -8rem;
  position: relative;
}
.video-demo-section2 {
  background-color: #f6f6f6;
}
.section1 {
  padding-top: 10rem;
  gap: 5rem;
}
.section2 {
  background-color: #f6f6f6;
  padding-top: 6rem;
}
.section3 {
  background-color: #1f1f1f;
  color: #fff;
  padding-top: 6rem;
}
.case-heading {
  font-size: 60px;
  line-height: 60px;
}
.rhizome-green {
  color: #31d5b8;
  font-weight: 600;
}
.rhizome-orange {
  color: #ff4500;
}
.btn-orange {
  background-color: #ff4500;
  border: 1px solid transparent;
}
.btn-outline-orange {
  border-color: #ff4500;
  color: white;
}
.btn-outline-orange:hover {
  background-color: #ff4500;
  border: 1px solid transparent;
}
.subheading {
  color: #afafaf;
  line-height: 20px;
  text-transform: lowercase;
  font-size: 28px;
  margin-bottom: 1rem;
}
.text {
  color: #4f4f4f;
  font-size: 16px;
}
.rhizome {
  color: var(--rhizome);
  font-weight: 700;
}
.logo-row {
  background-color: transparent;
  justify-content: center;
  position: relative;
  z-index: 9999999;
}
.cparoll-logo {
 width: 30%;
  margin-bottom: 5rem;
}
.text-row {
  gap: 3rem!important;
  width: 100%;
  justify-content: center;
}
.right-text {
  width: 30rem;
}
.bg-green {
  background-image: linear-gradient(225deg,rgba(189,227,223,.55),rgba(234,253,240,.55));
  border-radius: 40px;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  margin-top: 5rem;
  border: 1px solid rgba(189,227,223,.55);
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem 2rem 3rem;
  box-shadow: -47px 82px 119px -32px rgba(238,249,242,1),
  251px -77px 66px -37px rgba(216,236,234,1);
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
.slide2 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 9rem;
}
.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 9rem;
}
.container-fluid {
  background-color: #f6f6f6;
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
.btn-green {
  max-width: 20rem;
  background-color: #31d5b8;
  border: 1px solid transparent;
}
.btn-outline-green {
  color: #31d5b8;
}
.btn-outline-green:hover {
  background-color: #31d5b8;
  border: 1px solid transparent;
  color: white;
}
.arrow-wrapper {
  border: 2px solid var(--rhizome);
  border-radius: 50%;
}
.subheading-small {
  color: #afafaf;
  font-size: 1.75rem;
}
.calendar {
  width: 70%;
}
.orange-container {
  background-image: none;
  background-color: #282828;
  border-radius: 40px;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem 2rem 3rem;
}
</style>