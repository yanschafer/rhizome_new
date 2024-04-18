<template>
  <a class="card card-compact w-96 bg-base-100 shadow-xl case-card mr-10" @click="handleCardClick">
    <figure class="item-bg">
      <template v-if="isVideo">
        <div class="video-wrapper">
          <video class="video" autoplay muted playsinline loop>
            <source :src="videoSource" type="video/mp4" />
          </video>
        </div>
      </template>
      <template v-else>
        <img :src="imageUrl" alt="Image" class="img-fluid">
      </template>
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <hr class="hr">
      <p class="card-text">{{ description }}</p>
      <div class="flex flex-row gap-2" v-if="badges.length">
        <div class="badge" :class="badge.type" v-for="(badge, index) in badges" :key="index">{{badge.text}}</div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'CaseCardComponent',
  props: {
    routerLink: {
      type: String,
      default: '',
    },
    isVideo: {
      type: Boolean,
      default: true,
    },
    videoSource: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    badges: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    handleCardClick() {
      this.$emit("click", this.routerLink);
    }
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .case-card {
    max-width: 20rem!important;
  }
  .card {
    margin: 0!important;
  }
}
.video-wrapper {
  width: 100%;
  max-width: 50rem;
  background-color: var(--fallback-b1,oklch(var(--b1)/1));
  border: none!important;
  overflow: hidden;
}
.card-title {
  font-size: 1.7rem;
  margin-top: 1rem;
}
:deep(.badge) {
  text-transform: lowercase;
  font-size: 0.7rem;
  word-break: normal;
  line-height: 10px;
  margin-bottom: 1rem!important;
}
.video {
  width: 100%;
  object-fit: cover;
}
.case-card {
  width: 100%;
  max-width: 25rem;
  height: min-content;
  border-radius: 1rem;
  background: transparent;
  box-shadow: none;
  transition: all 0.3s ease-in-out!important;
}
.case-card:hover {
  top: -10px;
  cursor: pointer;
  transition: all ease-in-out 0.5s, top ease-in-out 0.2s;
  box-shadow: 0px 12px 22px 0px rgba(39, 76, 119, 0.37);
}
.card-title {
  color: var(--rhizome);
  font-weight: 700;
  font-size: 1.6rem;
}
.card-text {
  font-size: 24px;
  line-height: 35px;
}
</style>