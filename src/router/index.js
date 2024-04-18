import { createRouter, createWebHistory } from 'vue-router'
import PrintUtil from "@/utils/localization/print.util";
import HomeView from '../views/HomeView.vue'
import FullCycleOfferView from "@/views/Offers/FullCycleOfferView.vue";
import FullCycleFormView from "@/views/Offers/FullCycleFormView.vue";
import OptimizationOfferView from "@/views/Offers/OptimizationOfferView.vue";
import OptimizationFormView from "@/views/Offers/OptimizationFormView.vue";
import DefaultFormView from "@/views/Offers/DefaultFormView.vue";
import PrivacyView from "@/views/PrivacyRuView.vue";
import PsyReplyEnView from "@/views/Cases/PsyReplyEnView.vue";
import PsyReplyRuView from "@/views/Cases/PsyReplyRuView.vue";
import SiberiaRuView from "@/views/Cases/SiberiaRuView.vue";
import SiberiaEnView from "@/views/Cases/SiberiaEnView.vue";
import MedClinicEnView from "@/views/Cases/MedClinicEnView.vue";
import MedClinicRuView from "@/views/Cases/MedClinicRuView.vue";
import CompilationRuView from "@/views/Cases/CompilationRuView.vue";
import CompilationEnView from "@/views/Cases/CompilationEnView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import PrivacyRuView from "@/views/PrivacyRuView.vue";
import PrivacyEnView from "@/views/PrivacyEnView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:catchAll(.*)', component: NotFoundView},
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/privacy-ru',
      component: PrivacyRuView
    },
    {
      path: '/privacy-en',
      component: PrivacyEnView
    },
    {
      path: '/med-ru',
      component: MedClinicRuView
    },
    {
      path: '/med-en',
      component: MedClinicEnView
    },
    {
      path: '/compilation-ru',
      component: CompilationRuView
    },
    {
      path: '/compilation-en',
      component: CompilationEnView
    },
    {
      path: '/siberia-ru',
      component: SiberiaRuView
    },
    {
      path: '/siberia-en',
      component: SiberiaEnView
    },
    {
      path: '/psyreply-ru',
      component: PsyReplyRuView
    },
    {
      path: '/psyreply-en',
      component: PsyReplyEnView
    },
    {
      path: '/form',
      name: 'form',
      component: DefaultFormView
    },
    {
      path: '/full-cycle',
      name: 'full-cycle',
      component: FullCycleOfferView,
      children: [{
        path: 'fc-form',
        name: 'full-cycle-form',
        component: FullCycleFormView,
      }]
    },
    {
      path: '/optimization',
      name: 'optimization',
      component: OptimizationOfferView,
      children: [{
        path: 'o-form',
        name: 'optimization-form',
        component: OptimizationFormView,
      }]
    }
  ]
})
router.beforeEach((to, from, next) => {
  const currentLang = PrintUtil.getSelectedLang();
  // Проверяем, соответствует ли путь шаблону страницы кейса
  if (to.path.includes('/siberia') || to.path.includes('/psyreply') || to.path.includes('/privacy') || to.path.includes('/compilation') || to.path.includes('/med')) {
    // Если да, то проверяем, соответствует ли текущая часть URL выбранному языку
    const isEnglishPage = to.path.includes('-en');
    const isRussianPage = to.path.includes('-ru');
    const shouldRedirectToEnglish = currentLang === 'eng' && isRussianPage;
    const shouldRedirectToRussian = currentLang === 'ru' && isEnglishPage;

    if (shouldRedirectToEnglish) {
      // Формируем новый путь на английскую версию
      const newPath = to.path.replace('-ru', '-en');
      next(newPath);
    } else if (shouldRedirectToRussian) {
      // Формируем новый путь на русскую версию
      const newPath = to.path.replace('-en', '-ru');
      next(newPath);
    } else {
      next(); // Если все в порядке, продолжаем навигацию
    }
  } else {
    next(); // Для всех остальных путей просто продолжаем навигацию
  }
});

export default router
