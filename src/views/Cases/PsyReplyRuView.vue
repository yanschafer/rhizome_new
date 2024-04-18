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
          <h1 class="case-heading"><span class="rhizome">Экосистема</span> для снижения текучести кадров и расходов компании более чем на 30%</h1>
        </div>
      </div>
      <div class="flex flex-row text-row">
        <div class="flex flex-col items-center">
          <p class="text">
            Проект является комплексной экосистемой анализа психологического состояния для линейного персонала, руководителей, а также - самостоятельных специалистов.
            В рамках Reply сотрудники проходят еженедельные анкетирования. Полученная информация анализируется, в том числе сравниваются результаты предыдущих периодов, и визуализируется на онлайн-дашборде.
            На основании результатов формируется перечень рекомендаций для каждого специалиста.
            Для руководства организаций создается отдельный личный кабинет, в котором размещается итоговый дашборд состояния персонала, с возможностью деления сотрудников на группы, общая характеристика психологического климата и перечень рекомендаций.
            Все специалисты имеют доступ к индивидуальному чату с психологом для личной работы и нормализации психологического состояния.
            Особое внимание в данном проекте уделено сохранности и конфиденциальности данных, поэтому все пароли и внутренние диалоги зашифровываются.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex flex-col container right-text gap-10">
            <div class="flex flex-col">
              <span class="subheading">Для кого</span>
              <p>Стартап-проект Reply является личной разработкой студии <span class="rhizome">Rhizome</span></p>
            </div>
            <div class="flex flex-col">
              <span class="subheading">Технологии</span>
              <p>Telegram Webapp/Vue3</p>
            </div>
            <div class="flex flex-col">
              <span class="subheading">Задачи</span>
              <p>Создать <span class="rhizome">легко масштабируемый сервис</span>, который позволит повысить уровень продуктивности сотрудников снизить текучесть кадров, за счет проработки психологического климата в коллективе и состояния каждого сотрудника в компании.</p>
            </div>
          </div>
        </div>
      </div>
      <aos-vue animation="fade-up">
        <div class="bg-container container flex flex-col">
          <IconAsterisk ref="icon" class="icon"  color="#274c77" :size="48" stroke-width="2" />
          <h1 class="case-heading">
            Весь комплекс создания и апробации экосистемы осуществляла команда <b>Rhizome:</b>
          </h1>
          <ul class="mt-5">
            <li class="list-item">
              • <span class="rhizome">аналитика</span> рынка;
            </li>
            <li class="list-item">
              • <span class="rhizome">разработка</span> оптимальной для рынка <span class="rhizome">концепции продукта</span>;
            </li>
            <li class="list-item">
              • <span class="rhizome">разработка приложения Reply</span> <span class="rhizome">и чат-бота</span> для оповещений сотрудников;
            </li>
            <li class="list-item">
              • создание <span class="rhizome">элементов дизайна</span>;
            </li>
            <li class="list-item">
              • <span class="rhizome">апробация MVP</span> в условиях реального рынка;
            </li>
            <li class="list-item">
              • <span class="rhizome">усовершенствование и оптимизация</span>, на основании результатов тестирования на целевых группах.
            </li>
          </ul>
          <p class="subtext mt-5" >Все мероприятия реализованы за 6 месяцев.</p>
          <router-link to="/form" class="btn btn-accent btn-offer mt-5">получить консультацию</router-link>
        </div>
      </aos-vue>
    </section>
    <aos-vue animation="fade-up">
      <h1 class="heading-big text-center"><span class="rhizome">Демо</span> работы</h1>
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
                  src="@/assets/videos/case-reply/reply-demo-1.mp4"
              >

              </video>
              <!--          <div class="overlay">-->
              <!--          Демонстрация работы системы управления тестированием-->
              <!--          </div>-->
            </div>
          </SplideSlide>
          <SplideSlide class="slide">
            <div class="video-wrapper">
              <video
                  muted
                  loop
                  autoplay
                  src="@/assets/videos/case-reply/reply-demo-2.mp4"
              >
                Sorry, your browser doesn't support embedded videos, but don't worry, you can
                <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
                and watch it with your favorite video player!
              </video>
            </div>
          </SplideSlide>
          <SplideSlide class="slide">
            <div class="video-wrapper">
              <video
                  muted
                  loop
                  autoplay
                  src="@/assets/videos/case-reply/reply-demo-3.mp4"
              >
                Sorry, your browser doesn't support embedded videos, but don't worry, you can
                <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
                and watch it with your favorite video player!
              </video>
            </div>
          </SplideSlide>
          <SplideSlide class="slide">
            <div class="video-wrapper">
              <video
                  muted
                  loop
                  autoplay
                  src="@/assets/videos/case-reply/reply-demo-4.mp4"
              >
                Sorry, your browser doesn't support embedded videos, but don't worry, you can
                <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
                and watch it with your favorite video player!
              </video>
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
          <p class="subtext mt-5" >Всего за полгода создано уникальное приложение, которое соответствует поставленной задаче и удовлетворяет требованиям рынка: доступность, как для организаций, так и для самостоятельных специалистов, гибкость и наглядная результативность.</p>
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
          После внедрения Reply в компанию Agava, занимающуюся разработкой компьютерных игр, удалось сократить расходы на 30%, при этом вовлеченность сотрудников составила более 70% на протяжении 6 месяцев. Штат Agava составляет 60+ IT-специалистов в возрасте 16-37 лет.
          <br><br>
          Результаты работы с HR-менеджерами массового подбора компании GreenPers также были положительными - удалось снизить текучесть кадров на 30%. Вовлеченность персонала на протяжении 3-х месяцев превышала 80%, основной сегмент женщины в возрасте от 20 до 37 лет.
          <br><br>
          Дополнительным кейсом является внедрение Reply в AliveBe, сервис для проведения онлайн-соревнований. В результате сотрудничества удалось снизить уровень стресса участников более чем на 30% всего за 2 недели.
          <br><br>
          Описанные кейсы подтверждают эффективность всего цикла управления продуктом студией Rhizome от создания до наглядных бизнес-результатов вашей компании.
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
  name: "PsyReplyRuView",
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
      }, 400);
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
    margin-top: 5rem;
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