<template>
  <div class="team-slider">
    <div style="position: relative; z-index: 2" class="navigation-titles" ref="titlesContainerRef"
    >
      <div
          v-for="(member, index) in teamMembers"
          :key="`title-${member.id}`"
          class="title"
          :class="{ active: activeSlideIndex === index }"
          @click="updateActiveSlide(index)"
      >
        {{ member.title }}
      </div>
    </div>
    <Swiper style="position: relative; z-index: 2" :onSwiper="onSwiper" :slides-per-view="1" @slideChange="onSlideChange">
      <SwiperSlide v-for="(member, index) in teamMembers" :key="member.id">
        <div class="member-info">
          <div class="flex flex-row gap-10 justify-center p-10 member-row">
            <div class="flex flex-col photo-col">
              <img :src="member.image" alt="Фото члена команды" class="member-photo">
            </div>
            <div class="flex flex-col justify-center basis-1/4 member-col">
              <h1 class="member-name-h"><span class="member-name-span">{{ member.name }}</span></h1>
              <div class="flex flex-row btn-row">
                <a target="_blank" v-if="member.link" :href="member.link" class="btn btn-accent">
                  <component :is="member.linkIcon" />
                  {{ member.linkText }}
                </a>
              </div>
              <p class="member-text">{{ member.description }}</p>
              <div class="flex flex-row gap-2">
                <Vue3Marquee clone="true" gradientLength="20px" :gradient=true class="roles-marquee" :duration="30">
                  <template v-for="(role, index) in member.roles" :key="`role-${index}`">
                    <span class="badge badge-primary text-white mx-1">{{ role }}</span>
                  </template>
                </Vue3Marquee>
              </div>

            </div>
          </div>
        </div>
        <Vue3Marquee class="role-global" :duration="120" :clone="true"><img :src="member.bg1" class="bg-image mr-5" /></Vue3Marquee>
        <Vue3Marquee class="role-global-reverse" :direction="'reverse'" :duration="120" :clone="true"><img :src="member.bg2" class="bg-image2 mr-5" /></Vue3Marquee>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Vue3Marquee} from "vue3-marquee";
import PrintUtil from "@/utils/localization/print.util";
import {IconBrandTelegram, IconBrandGithub} from "@tabler/icons-vue";

const titlesContainerRef = ref(null);
const localize = (key, module="teamSliderComponent") => {
  return PrintUtil.localize(key, module);
};
const teamMembers = ref([
  {
    id: 'ex2-1',
    title: localize('creator'),
    name: localize('bonchName'),
    description: localize('bonchDescription'),
    image: './photos/roman.png',
    roles: ['Product manager', localize("psychology"), localize("optimizationTeam"), localize("analyticsTeam"), localize('conversion')],
    badgeColors: ['secondary', 'primary', 'success', 'danger', 'primary'],
    bg1: './photos/FOUNDER.svg',
    bg2: './photos/PSYCHOLOGY.svg',
    link: 'https://t.me/+fS3ETYa87143YTZi',
    linkText: 'Читать в Telegram',
    linkIcon: IconBrandTelegram,
  },
  {
    id: 'ex2-2',
    title: localize('dev'),
    name: localize('sashaName'),
    description: localize('sashaDescription'),
    image: './photos/sasha.png',
    roles: ['System engineering', 'Backend', 'Kotlin', 'CI / CD'],
    badgeColors: ['primary', 'primary', 'success', 'danger'],
    bg1: './photos/BACKEND.svg',
    bg2: './photos/TEAMLEAD.svg',
    link: 'https://github.com/dudosyka',
    linkText: 'github',
    linkIcon: IconBrandGithub,
  },
  {
    id: 'ex2-3',
    title: localize('design'),
    name: localize('yanName'),
    description: localize('yanDescription'),
    image: './photos/yan.png',
    roles: ['Vue3', localize('design'), 'UX/UI', 'Figma', 'Frontend'],
    badgeColors: ['success', 'primary', 'warning', 'danger', 'secondary'],
    bg1: './photos/UI.svg',
    bg2: './photos/DESIGN.svg'
  },
  {
    id: 'ex2-4',
    title: localize('marketing'),
    name: localize('leraName'),
    description: localize('leraDescription'),
    image: './photos/lera.png',
    roles: [localize('marketing'), localize('traffic'), localize('sales'), localize('analyticsTeam')],
    badgeColors: ['success', 'primary', 'warning', 'danger'],
    bg1: './photos/MARKETING.svg',
    bg2: './photos/SMM.svg',
    link: 'https://t.me/+0BvGoSsjshM2OWQ6',
    linkText: 'Читать в Telegram',
    linkIcon: IconBrandTelegram,
  },
]);

const activeSlideIndex = ref(0);
const swiperInstance = ref(null);

const isDragging = ref(false);
const startPos = ref(0);
const currentTranslate = ref(0);
const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const updateActiveSlide = (index) => {
  activeSlideIndex.value = index;
  swiperInstance.value.slideTo(index);
  scrollToActiveTitle(index);
};

const scrollToActiveTitle = (index) => {
  const titles = titlesContainerRef.value.children;
  if (titles.length > index) {
    const activeTitle = titles[index];
    const scrollOffset = activeTitle.offsetLeft + (activeTitle.offsetWidth / 2) - (titlesContainerRef.value.offsetWidth / 2);
    titlesContainerRef.value.scroll({
      left: scrollOffset,
      behavior: 'smooth'
    });
  }
};

const onSlideChange = () => {
  activeSlideIndex.value = swiperInstance.value.realIndex;
  scrollToActiveTitle(activeSlideIndex.value);
};

const startDrag = (event) => {
  isDragging.value = true;
  startPos.value = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
  event.preventDefault();
};

const onDrag = (event) => {
  if (!isDragging.value) return;
  const currentX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
  const diffX = currentX - startPos.value;
  currentTranslate.value += diffX;
  titlesContainerRef.value.style.transform = `translateX(${currentTranslate.value}px)`;
  startPos.value = currentX;
};

const endDrag = () => {
  isDragging.value = false;

  // Примерная логика для определения целевого заголовка
  // Здесь мы предполагаем, что у вас есть доступ к размерам и положениям заголовков
  const titles = titlesContainerRef.value.children;
  let targetIndex = activeSlideIndex.value;
  // Определите, к какому заголовку ближе всего текущее положение после перетаскивания
  // Это может быть реализовано разными способами, в зависимости от вашей разметки и стилей
  for (let i = 0; i < titles.length; i++) {
    if (Math.abs(currentTranslate.value) >= titles[i].offsetLeft && Math.abs(currentTranslate.value) < titles[i].offsetLeft + titles[i].offsetWidth) {
      targetIndex = i;
      break;
    }
  }

  // Обновляем активный слайд и перемещаемся к нему
  updateActiveSlide(targetIndex);
};
</script>

<style scoped>
@media only screen and (max-width: 600px) and (min-width: 300px) {
  .member-photo {
    width: 11rem!important;
    height: 11rem!important;
    padding: 0.2rem!important;
    border: 4px solid var(--rhizome)!important;
  }
  .title.active {
    font-size: 3rem!important;
    line-height: 50px!important;
  }
  .member-name-h {
    text-align: center!important;
    line-height: 50px!important;
    font-size: 3rem!important;
  }
  .role-global {
    bottom: 36rem!important;
  }
  .role-global-reverse {
    bottom: 34rem!important;
  }
  .member-text {
    text-align: center!important;
    font-size: 18px!important;
    line-height: 18px!important;
  }
  .btn-row {
    justify-content: center;
  }
  .member-row {
    width: 100%!important;
    flex-direction: column!important;

  }
  .title {
    font-size: 2rem!important;
    line-height: 50px!important;
  }
  .navigation-titles {
    height: 4rem!important;
  }
  .role-global {
  }
  .role-global-reverse {
  }
  .photo-col {
    justify-content: center!important;
    align-items: center!important;
  }
}
.team-slider {
  /* Стили контейнера */
}
.swiper-slide {
  background-color: transparent;
}
.navigation-titles {
  display: flex;
  overflow: hidden;
  cursor: grab;
  justify-content: flex-start;
  overflow-x: auto;
  margin-bottom: 20px;
  height: 8rem;
  background: transparent;
  scroll-behavior: smooth;
  padding-right: 2rem;
  scrollbar-width: none; /* Для Firefox */
  -ms-overflow-style: none;  /* Для Internet Explorer и Edge */

}
.navigation-titles:active {
  cursor: grabbing;
}
.navigation-titles, .navigation-titles * {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Нестандартные браузеры */
}

.navigation-titles::-webkit-scrollbar {
  display: none; /* Для веб-кит браузеров */
}

.title {
  text-transform: lowercase;
  flex: none; /* Отключаем растягивание элементов */
  white-space: nowrap; /* Заголовки в одну строку */
  margin: 0 10px;
  cursor: pointer;
  font-size: 6rem;
  display: flex;
  align-items: flex-end;
  opacity: 0.3;
  transition: opacity 0.3s ease, font-size 0.3s ease-in-out, font-weight 0.3s ease-in-out,line-height 0.3s ease-in-out;
}

.title.active {
  opacity: 1;
  font-size: 7rem;
  font-weight: 700;
  color: var(--rhizome);
  display: flex;
  align-items: flex-end;
}
.member-info {
  background-color: transparent;
  position: relative;
  z-index: 2;
}
.member-photo {
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  border-radius: 50%;
  padding: 0.8rem;
  border: 8px solid var(--rhizome);
}
.roles-marquee {
  width: 100%;
  max-width: 50rem;
  margin-top: 1rem;
}
.role-global {
  position: relative;
  bottom: 25rem;
  left: 0;
  z-index: 1;
}
.bg-image {
  width: 60rem;
  opacity: 0.05;
}
.bg-image2 {
  width: 80rem;
  opacity: 0.05;
}
.role-global-reverse {
  position: relative;
  bottom: 20rem;
  left: 0;
  z-index: 1;
}
.member-name-h {
  font-size: 3.3rem;
  font-weight: 600;
  text-align: left;
  line-height: 60px;
  margin-bottom: 1rem;
  margin-left: 0;
}
.member-name-span {
  color: var(--rhizome);
}
.member-text {
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
  text-align: left;
}
.badge {
  text-transform: lowercase;
}
.btn-accent {
  color: white;
  width: max-content;
  max-width: 20rem;
  margin-bottom: 1rem;
}
</style>
