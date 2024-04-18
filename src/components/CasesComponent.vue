<script>
import CaseCardComponent from "@/components/CasesElements/CasesCardComponent.vue";
import PrintUtil from "@/utils/localization/print.util";
import {computed} from "vue";
import {onMounted} from "vue";
export default {
  name: "CasesComponent",
  components: {CaseCardComponent},
  setup() {
    const localize = (key, module = "casesComponent") => {
      return PrintUtil.localize(key, module);
    };
    const cardData = computed(() => [
      {
        isVideo: true,
        videoSource: './landing/card-items/siberia-cp-demo.mp4',
        title: localize('siberiaName'),
        description: localize('siberiaDescription'),
        badges: [
          { text: localize('badgeWebApp'), type: 'badge-accent' },
          { text: localize('badgeLogistics'), type: 'badge-default' },
          { text: "Android/iOS", type: 'badge-default' },
        ],
        routerLink: '/siberia',
      },
      {
        isVideo: true,
        videoSource: './landing/card-items/video.mp4',
        title: localize('replyName'),
        description: localize('replyDescription'),
        badges: [
          { text: localize('badgeWebApp'), type: 'badge-accent' },
          { text: localize('badgeDiagnostics'), type: 'badge-default' },
          { text: "HR", type: 'badge-default' },
        ],
        routerLink: '/psyreply',
      },
      {
        isVideo: true,
        videoSource: './landing/card-items/video2.mp4',
        title: localize('medName'),
        description: localize('medDescription'),
        badges: [
          { text: localize('badgeWebApp'), type: 'badge-accent' },
          { text: localize('badgePatientsAccounting'), type: 'badge-default' },
          { text: localize('badgeAnalytics'), type: 'badge-default' },
        ],
        routerLink: '/med',
      },
      {
        isVideo: true,
        videoSource: './landing/card-items/video3.mp4',
        title: localize('compilationName'),
        description: localize('compilationDescription'),
        badges: [
          { text: localize('badgeWebDev'), type: 'badge-accent' },
          { text: localize('badgeDesign'), type: 'badge-default' },
        ],
        routerLink: '/compilation',
      },
    ]);
    return { cardData, localize };
  },
  // data () {
  //   return {
  //     cardData: [
  //       // {
  //       //   isVideo: false,
  //       //   imageUrl: './landing/card-items/greenpers.jpg',
  //       //   title: 'Бот-календарь для агентства по аутсорсингу',
  //       //   description: 'Освобождение 75% рабочего времени менеджеров компании за 14 дней',
  //       //   badges: [
  //       //     { text: 'Telegram-бот', type: 'badge-accent' },
  //       //     { text: 'Аутсорсинг персонала', type: 'badge-default' },
  //       //     { text: 'HR', type: 'badge-default' },
  //       //   ],
  //       //   routerLink: '/greenpers',
  //       // },
  //       {
  //         isVideo: true,
  //         videoSource: './landing/card-items/video.mp4',
  //         title: localize("replyName"),
  //         description: 'Экосистема для снижения текучести кадров и расходов компании более чем на 30%',
  //         badges: [
  //           { text: 'Веб-приложение', type: 'badge-accent' },
  //           { text: 'Диагностика', type: 'badge-default' },
  //           { text: 'HR', type: 'badge-default' },
  //         ],
  //         routerLink: '/psyreply',
  //       },
  //       {
  //         isVideo: true,
  //         videoSource: './landing/card-items/video2.mp4',
  //         title: 'Информационная система для клиники',
  //         description: 'Рост выручки на 5,5% за счет внедрения информационной системы',
  //         badges: [
  //           { text: 'Веб-интерфейс', type: 'badge-accent' },
  //           { text: 'Учет пациентов', type: 'badge-default' },
  //           { text: 'Аналитика и учет', type: 'badge-default' },
  //         ],
  //         routerLink: '/med',
  //       },
  //       // {
  //       //   isVideo: false,
  //       //   imageUrl: './landing/card-items/green.jpg',
  //       //   title: 'Система-оплаты для прибалтийской игральной компании',
  //       //   description: 'Мультивалютная платежная система в чат-боте',
  //       //   badges: [
  //       //     { text: 'Telegram-бот', type: 'badge-accent' },
  //       //     { text: 'Gambling', type: 'badge-default' },
  //       //     { text: 'Финансы', type: 'badge-default' },
  //       //   ],
  //       //   routerLink: '/green',
  //       // },
  //       {
  //         isVideo: true,
  //         videoSource: './landing/card-items/video3.mp4',
  //         title: 'Подборка из 3-х кейсов',
  //         description: 'Веб-разработка и дизайн: веб-сайты, элементы айдентики и цифровой календарь',
  //         badges: [
  //           { text: 'Веб-разработка', type: 'badge-accent' },
  //           { text: 'Дизайн', type: 'badge-default' },
  //         ],
  //         routerLink: '/compilation',
  //       },
  //     ]
  //   }
  // },
  methods: {
    handleCardClick(baseRouterLink) {
      // Определяем текущий язык
      const currentLang = PrintUtil.getSelectedLang();

      // Строим роут в зависимости от языка
      const routerLink = currentLang === 'eng' ? `${baseRouterLink}-en` : `${baseRouterLink}-ru`;

      // Выполняем переход
      this.$router.push(routerLink).then(() => {
        setTimeout(() => {
          this.scrollToTop();
        }, 400);
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<template>
  <section class="section flex flex-col justify-center items-center">
    <aos-vue animation="fade-up">
      <div class="container cases-wrapper">
        <h1 class="heading-big">{{ localize("casesHeading") }}</h1>
        <p class="cases-subtext">{{ localize("casesSubheading") }}</p>
      </div>
    </aos-vue>
    <aos-vue animation="fade-up">
      <div class="flex flex-row justify-evenly items-center gap-3 flex-wrap cases-row">
        <CaseCardComponent
            v-for="(card) in cardData"
            :key="card.title"
            :isVideo="card.isVideo"
            :videoSource="card.videoSource"
            :videoOptions="card.videoOptions"
            :imageUrl="card.imageUrl"
            :title="card.title"
            :description="card.description"
            :badges="card.badges"
            :router-link="card.routerLink"
            @click="handleCardClick(card.routerLink)"
            class="card row-card"
        />
      </div>
    </aos-vue>
  </section>
</template>

<style scoped>
@media only screen and (max-width: 600px) and (min-width: 300px) {
  .heading-big {
    font-size: 4rem;
    text-align: center;
    line-height: 3.8rem;
  }
  .cases-subtext {
    font-size: 1.6rem!important;
    text-align: center;
  }
  .cases-row {
    justify-content: center!important;
    align-items: center!important;
    align-self: center!important;
    display: flex!important;
    align-content: center!important;
  }
}

  .rhizome {
    color: var(--fallback-a,oklch(var(--a)/1));
    font-weight: 700;
  }
  .cases-subtext {
    font-size: 30px;
  }
  .card:hover {
    top: -10px;
    cursor: pointer;
    transition: all ease-in-out 0.5s, top ease-in-out 0.2s;
    box-shadow: 0px 12px 22px 0px rgba(39, 76, 119, 0.37);
  }
  .card {
    transition: all ease-in-out 0.5s, top ease-in-out 0.2s;
    top: 0;
    margin-top: 2rem;
  }
</style>