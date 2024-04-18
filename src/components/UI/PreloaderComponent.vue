<template>
  <div class="preloader" ref="preloader" v-if="loading">
    <div class="flex flex-col ">
      <div class="rhizome-svg">
        <svg width="537" height="114" viewBox="0 0 537 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_56_14" fill="white">
            <path d="M30.6479 54.6861V0.0996733C31.3485 0.062652 31.8525 0.0113914 32.3566 0.0113914C57.6051 0.00569584 82.8536 0 108.102 0C110.164 0 110.716 0.555319 110.716 2.61427C110.716 38.4936 110.716 74.3757 110.711 110.255C110.711 112.584 110.212 113.071 107.846 113.071C72.8208 113.074 37.793 113.077 2.76805 113.08C0.552471 113.08 0.0113914 112.542 0.0113914 110.286C0.00284805 74.3102 0 38.3369 0 2.36082C0 0.449951 0.43571 0.0170876 2.34373 0.0142398C7.32736 0.00284866 12.311 0.00569632 17.2946 0.0085441C17.756 0.0085441 18.2173 0.0569563 18.8267 0.0939775V54.6861H30.6479ZM67.7432 71.4396C68.2017 71.2745 68.5833 71.1064 68.9791 70.9954C81.6148 67.4954 88.3441 54.8028 84.1379 42.3893C81.4411 34.4241 73.4986 28.0735 65.0777 27.6691C58.1177 27.3331 51.1349 27.4982 44.1635 27.4498C43.9841 27.4498 43.8047 27.5267 43.5626 27.5808V39.1856C44.2319 39.1856 44.7929 39.1856 45.3539 39.1856C51.283 39.1941 57.2149 39.1229 63.144 39.2311C70.6964 39.3678 75.6259 47.1309 72.5446 54.0339C70.89 57.7389 67.8941 59.7865 63.8332 59.8577C57.6193 59.9659 51.4026 59.8719 45.1887 59.8634C44.6448 59.8634 44.1009 59.8634 43.5626 59.8634V71.2602H51.1805C59.9289 80.1168 68.6887 88.9877 77.2036 97.608H93.5356C84.8897 88.8396 76.3748 80.1994 67.7432 71.4425V71.4396ZM18.9264 97.625H67.148C63.1981 93.3733 59.5045 89.4006 55.8053 85.4194H30.6792V71.6504H18.9293V97.625H18.9264Z" class="svg-elem-1"></path>
            <path d="M174.884 27.9883H187.616V99H174.884V68.4629H136.842V99H124.213V27.9883H136.842V57.749H174.884V27.9883Z" class="svg-elem-2"></path>
            <path d="M206.094 99V27.9883H218.723V99H206.094Z" class="svg-elem-3"></path>
            <path d="M234.302 99V94.1348L272.447 38.5986H234.923V27.9883H289.527V32.8535L251.692 88.3896H290.562V99H234.302Z" class="svg-elem-4"></path>
            <path d="M363.023 89.4766C355.57 96.6882 346.616 100.294 336.161 100.294C325.706 100.294 316.769 96.6882 309.351 89.4766C301.932 82.265 298.223 73.6042 298.223 63.4941C298.223 53.3841 301.932 44.7233 309.351 37.5117C316.769 30.3001 325.706 26.6943 336.161 26.6943C346.616 26.6943 355.57 30.3001 363.023 37.5117C370.511 44.7233 374.255 53.3841 374.255 63.4941C374.255 73.6042 370.511 82.265 363.023 89.4766ZM336.161 88.8037C343.235 88.8037 349.239 86.3366 354.173 81.4023C359.142 76.4681 361.626 70.4987 361.626 63.4941C361.626 56.4896 359.142 50.5202 354.173 45.5859C349.239 40.6172 343.235 38.1328 336.161 38.1328C329.157 38.1328 323.187 40.6172 318.253 45.5859C313.319 50.5202 310.852 56.4896 310.852 63.4941C310.852 70.4987 313.319 76.4681 318.253 81.4023C323.187 86.3366 329.157 88.8037 336.161 88.8037Z" class="svg-elem-5"></path>
            <path d="M388.281 99V27.9883H396.045L427.514 68.3594L458.982 27.9883H466.85V99H454.635V51.3828L429.843 83.835H425.185L400.393 51.3828V99H388.281Z" class="svg-elem-6"></path>
            <path d="M497.801 88.3896H536.05V99H485.172V27.9883H535.015V38.5986H497.801V58.0596H533.928V68.1523H497.801V88.3896Z" class="svg-elem-7"></path>
          </mask>
          <path d="M30.6479 54.6861V0.0996733C31.3485 0.062652 31.8525 0.0113914 32.3566 0.0113914C57.6051 0.00569584 82.8536 0 108.102 0C110.164 0 110.716 0.555319 110.716 2.61427C110.716 38.4936 110.716 74.3757 110.711 110.255C110.711 112.584 110.212 113.071 107.846 113.071C72.8208 113.074 37.793 113.077 2.76805 113.08C0.552471 113.08 0.0113914 112.542 0.0113914 110.286C0.00284805 74.3102 0 38.3369 0 2.36082C0 0.449951 0.43571 0.0170876 2.34373 0.0142398C7.32736 0.00284866 12.311 0.00569632 17.2946 0.0085441C17.756 0.0085441 18.2173 0.0569563 18.8267 0.0939775V54.6861H30.6479ZM67.7432 71.4396C68.2017 71.2745 68.5833 71.1064 68.9791 70.9954C81.6148 67.4954 88.3441 54.8028 84.1379 42.3893C81.4411 34.4241 73.4986 28.0735 65.0777 27.6691C58.1177 27.3331 51.1349 27.4982 44.1635 27.4498C43.9841 27.4498 43.8047 27.5267 43.5626 27.5808V39.1856C44.2319 39.1856 44.7929 39.1856 45.3539 39.1856C51.283 39.1941 57.2149 39.1229 63.144 39.2311C70.6964 39.3678 75.6259 47.1309 72.5446 54.0339C70.89 57.7389 67.8941 59.7865 63.8332 59.8577C57.6193 59.9659 51.4026 59.8719 45.1887 59.8634C44.6448 59.8634 44.1009 59.8634 43.5626 59.8634V71.2602H51.1805C59.9289 80.1168 68.6887 88.9877 77.2036 97.608H93.5356C84.8897 88.8396 76.3748 80.1994 67.7432 71.4425V71.4396ZM18.9264 97.625H67.148C63.1981 93.3733 59.5045 89.4006 55.8053 85.4194H30.6792V71.6504H18.9293V97.625H18.9264Z" fill="#274C77" class="svg-elem-8"></path>
          <path d="M174.884 27.9883H187.616V99H174.884V68.4629H136.842V99H124.213V27.9883H136.842V57.749H174.884V27.9883Z" fill="#274C77" class="svg-elem-9"></path>
          <path d="M206.094 99V27.9883H218.723V99H206.094Z" fill="#274C77" class="svg-elem-10"></path>
          <path d="M234.302 99V94.1348L272.447 38.5986H234.923V27.9883H289.527V32.8535L251.692 88.3896H290.562V99H234.302Z" fill="#274C77" class="svg-elem-11"></path>
          <path d="M363.023 89.4766C355.57 96.6882 346.616 100.294 336.161 100.294C325.706 100.294 316.769 96.6882 309.351 89.4766C301.932 82.265 298.223 73.6042 298.223 63.4941C298.223 53.3841 301.932 44.7233 309.351 37.5117C316.769 30.3001 325.706 26.6943 336.161 26.6943C346.616 26.6943 355.57 30.3001 363.023 37.5117C370.511 44.7233 374.255 53.3841 374.255 63.4941C374.255 73.6042 370.511 82.265 363.023 89.4766ZM336.161 88.8037C343.235 88.8037 349.239 86.3366 354.173 81.4023C359.142 76.4681 361.626 70.4987 361.626 63.4941C361.626 56.4896 359.142 50.5202 354.173 45.5859C349.239 40.6172 343.235 38.1328 336.161 38.1328C329.157 38.1328 323.187 40.6172 318.253 45.5859C313.319 50.5202 310.852 56.4896 310.852 63.4941C310.852 70.4987 313.319 76.4681 318.253 81.4023C323.187 86.3366 329.157 88.8037 336.161 88.8037Z" fill="#274C77" class="svg-elem-12"></path>
          <path d="M388.281 99V27.9883H396.045L427.514 68.3594L458.982 27.9883H466.85V99H454.635V51.3828L429.843 83.835H425.185L400.393 51.3828V99H388.281Z" fill="#274C77" class="svg-elem-13"></path>
          <path d="M497.801 88.3896H536.05V99H485.172V27.9883H535.015V38.5986H497.801V58.0596H533.928V68.1523H497.801V88.3896Z" fill="#274C77" class="svg-elem-14"></path>
          <path d="M30.6479 54.6861V0.0996733C31.3485 0.062652 31.8525 0.0113914 32.3566 0.0113914C57.6051 0.00569584 82.8536 0 108.102 0C110.164 0 110.716 0.555319 110.716 2.61427C110.716 38.4936 110.716 74.3757 110.711 110.255C110.711 112.584 110.212 113.071 107.846 113.071C72.8208 113.074 37.793 113.077 2.76805 113.08C0.552471 113.08 0.0113914 112.542 0.0113914 110.286C0.00284805 74.3102 0 38.3369 0 2.36082C0 0.449951 0.43571 0.0170876 2.34373 0.0142398C7.32736 0.00284866 12.311 0.00569632 17.2946 0.0085441C17.756 0.0085441 18.2173 0.0569563 18.8267 0.0939775V54.6861H30.6479ZM67.7432 71.4396C68.2017 71.2745 68.5833 71.1064 68.9791 70.9954C81.6148 67.4954 88.3441 54.8028 84.1379 42.3893C81.4411 34.4241 73.4986 28.0735 65.0777 27.6691C58.1177 27.3331 51.1349 27.4982 44.1635 27.4498C43.9841 27.4498 43.8047 27.5267 43.5626 27.5808V39.1856C44.2319 39.1856 44.7929 39.1856 45.3539 39.1856C51.283 39.1941 57.2149 39.1229 63.144 39.2311C70.6964 39.3678 75.6259 47.1309 72.5446 54.0339C70.89 57.7389 67.8941 59.7865 63.8332 59.8577C57.6193 59.9659 51.4026 59.8719 45.1887 59.8634C44.6448 59.8634 44.1009 59.8634 43.5626 59.8634V71.2602H51.1805C59.9289 80.1168 68.6887 88.9877 77.2036 97.608H93.5356C84.8897 88.8396 76.3748 80.1994 67.7432 71.4425V71.4396ZM18.9264 97.625H67.148C63.1981 93.3733 59.5045 89.4006 55.8053 85.4194H30.6792V71.6504H18.9293V97.625H18.9264Z" stroke="#274C77" stroke-width="4" mask="url(#path-1-inside-1_56_14)" class="svg-elem-15"></path>
          <path d="M174.884 27.9883H187.616V99H174.884V68.4629H136.842V99H124.213V27.9883H136.842V57.749H174.884V27.9883Z" stroke="#274C77" stroke-width="4" mask="url(#path-1-inside-1_56_14)" class="svg-elem-16"></path>
          <path d="M206.094 99V27.9883H218.723V99H206.094Z" stroke="#274C77" stroke-width="4" mask="url(#path-1-inside-1_56_14)" class="svg-elem-17"></path>
          <path d="M234.302 99V94.1348L272.447 38.5986H234.923V27.9883H289.527V32.8535L251.692 88.3896H290.562V99H234.302Z" stroke="#274C77" stroke-width="4" mask="url(#path-1-inside-1_56_14)" class="svg-elem-18"></path>
          <path d="M363.023 89.4766C355.57 96.6882 346.616 100.294 336.161 100.294C325.706 100.294 316.769 96.6882 309.351 89.4766C301.932 82.265 298.223 73.6042 298.223 63.4941C298.223 53.3841 301.932 44.7233 309.351 37.5117C316.769 30.3001 325.706 26.6943 336.161 26.6943C346.616 26.6943 355.57 30.3001 363.023 37.5117C370.511 44.7233 374.255 53.3841 374.255 63.4941C374.255 73.6042 370.511 82.265 363.023 89.4766ZM336.161 88.8037C343.235 88.8037 349.239 86.3366 354.173 81.4023C359.142 76.4681 361.626 70.4987 361.626 63.4941C361.626 56.4896 359.142 50.5202 354.173 45.5859C349.239 40.6172 343.235 38.1328 336.161 38.1328C329.157 38.1328 323.187 40.6172 318.253 45.5859C313.319 50.5202 310.852 56.4896 310.852 63.4941C310.852 70.4987 313.319 76.4681 318.253 81.4023C323.187 86.3366 329.157 88.8037 336.161 88.8037Z" stroke="#274C77" stroke-width="4" mask="url(#path-1-inside-1_56_14)" class="svg-elem-19"></path>
          <path d="M388.281 99V27.9883H396.045L427.514 68.3594L458.982 27.9883H466.85V99H454.635V51.3828L429.843 83.835H425.185L400.393 51.3828V99H388.281Z" stroke="#274C77" stroke-width="4" mask="url(#path-1-inside-1_56_14)" class="svg-elem-20"></path>
          <path d="M497.801 88.3896H536.05V99H485.172V27.9883H535.015V38.5986H497.801V58.0596H533.928V68.1523H497.801V88.3896Z" stroke="#274C77" stroke-width="4" mask="url(#path-1-inside-1_56_14)" class="svg-elem-21"></path>
        </svg>
      </div>
      <div class="animate__animated animate__flipInX animate__delay-2s flex flex-row justify-center items-center gap-2 mt-5">
        <span class="loading-text">{{ localize("loading") }}</span> <span class="loading loading-spinner"></span>
      </div>
    </div>
  </div>
</template>

<script>
import PrintUtil from "@/utils/localization/print.util";

export default {
  name: "PreloaderComponent",
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    localize(key, module = "preloaderComponent") {
      return PrintUtil.localize(key, module);
    },
    checkVisitedBefore() {
      if (localStorage.getItem('visitedBefore')) {
        this.loading = false; // Если посещали сайт, отключаем прелоадер
      } else {
        localStorage.setItem('visitedBefore', 'true'); // Если нет, сохраняем факт первого посещения
        this.checkImagesLoaded(); // И проверяем загрузку изображений
      }
    },
    checkImagesLoaded() {
      const images = document.querySelectorAll('img');
      const totalImages = images.length;
      let imagesLoaded = 0;

      images.forEach((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          imagesLoaded++;
        } else {
          img.addEventListener('load', () => {
            imagesLoaded++;
            this.updateLoadingState(imagesLoaded, totalImages);
          });
          img.addEventListener('error', () => {
            imagesLoaded++;
            this.updateLoadingState(imagesLoaded, totalImages);
          });
        }
      });

      this.updateLoadingState(imagesLoaded, totalImages);
    },
    updateLoadingState(loaded, total) {
      if (loaded === total) {
        setTimeout(() => {
          if (this.$refs.preloader) {
            this.$refs.preloader.classList.add('animate__animated', 'animate__slideOutUp');
            this.$refs.preloader.addEventListener('animationend', () => {
              this.loading = false;
            });
          }
        }, 2500);
      }
    },
  },
  mounted() {
    this.checkVisitedBefore();
  },
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .rhizome-svg {
    scale: 0.5;
  }
}
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  z-index: 9999999999999999999999999999999999999999999999999999999999999999999999;
  overflow: hidden;
}
.loading-text {
  text-align: center;
  font-weight: 700;
}
.text-big {
  font-weight: 900;
  font-size: 6rem;
  color: transparent;
  -webkit-text-stroke: 2px #b4b4b4;
  text-transform: uppercase;
  z-index: -1;
}
.loading-spinner {
  filter: invert(25%) sepia(68%) saturate(468%) hue-rotate(170deg) brightness(95%) contrast(90%);
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.pink-big {
  color: hotpink;
  -webkit-text-stroke: 0 #b4b4b4;
}
/***************************************************
 * Generated by SVG Artista on 3/6/2024, 5:27:33 PM
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/

@-webkit-keyframes animate-svg-stroke-1{0%{stroke-dashoffset:974.21484375px;stroke-dasharray:974.21484375px}100%{stroke-dashoffset:0;stroke-dasharray:974.21484375px}}@keyframes animate-svg-stroke-1{0%{stroke-dashoffset:974.21484375px;stroke-dasharray:974.21484375px}100%{stroke-dashoffset:0;stroke-dasharray:974.21484375px}}@-webkit-keyframes animate-svg-fill-1{0%{fill:transparent}100%{fill:rgb(255,255,255)}}@keyframes animate-svg-fill-1{0%{fill:transparent}100%{fill:rgb(255,255,255)}}.svg-elem-1{-webkit-animation:animate-svg-stroke-1 0.8s cubic-bezier(0.47,0,0.745,0.715) 0s both,animate-svg-fill-1 1s cubic-bezier(0.6,-0.28,0.735,0.045) 0.5s both;animation:animate-svg-stroke-1 0.8s cubic-bezier(0.47,0,0.745,0.715) 0s both,animate-svg-fill-1 1s cubic-bezier(0.6,-0.28,0.735,0.045) 0.5s both}@-webkit-keyframes animate-svg-stroke-2{0%{stroke-dashoffset:391.4250183105469px;stroke-dasharray:391.4250183105469px}100%{stroke-dashoffset:0;stroke-dasharray:391.4250183105469px}}@keyframes animate-svg-stroke-2{0%{stroke-dashoffset:391.4250183105469px;stroke-dasharray:391.4250183105469px}100%{stroke-dashoffset:0;stroke-dasharray:391.4250183105469px}}@-webkit-keyframes animate-svg-fill-2{0%{fill:transparent}100%{fill:rgb(255,255,255)}}@keyframes animate-svg-fill-2{0%{fill:transparent}100%{fill:rgb(255,255,255)}}.svg-elem-2{-webkit-animation:animate-svg-stroke-2 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.1s both,animate-svg-fill-2 1s cubic-bezier(0.6,-0.28,0.735,0.045) 0.62s both;animation:animate-svg-stroke-2 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.1s both,animate-svg-fill-2 1s cubic-bezier(0.6,-0.28,0.735,0.045) 0.62s both}@-webkit-keyframes animate-svg-stroke-3{0%{stroke-dashoffset:169.28143310546875px;stroke-dasharray:169.28143310546875px}100%{stroke-dashoffset:0;stroke-dasharray:169.28143310546875px}}@keyframes animate-svg-stroke-3{0%{stroke-dashoffset:169.28143310546875px;stroke-dasharray:169.28143310546875px}100%{stroke-dashoffset:0;stroke-dasharray:169.28143310546875px}}@-webkit-keyframes animate-svg-fill-3{0%{fill:transparent}100%{fill:rgb(255,255,255)}}@keyframes animate-svg-fill-3{0%{fill:transparent}100%{fill:rgb(255,255,255)}}.svg-elem-3{-webkit-animation:animate-svg-stroke-3 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.2s both,animate-svg-fill-3 1s cubic-bezier(0.6,-0.28,0.735,0.045) 0.74s both;animation:animate-svg-stroke-3 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.2s both,animate-svg-fill-3 1s cubic-bezier(0.6,-0.28,0.735,0.045) 0.74s both}@-webkit-keyframes animate-svg-stroke-4{0%{stroke-dashoffset:354.7828369140625px;stroke-dasharray:354.7828369140625px}100%{stroke-dashoffset:0;stroke-dasharray:354.7828369140625px}}@keyframes animate-svg-stroke-4{0%{stroke-dashoffset:354.7828369140625px;stroke-dasharray:354.7828369140625px}100%{stroke-dashoffset:0;stroke-dasharray:354.7828369140625px}}@-webkit-keyframes animate-svg-fill-4{0%{fill:transparent}100%{fill:rgb(255,255,255)}}@keyframes animate-svg-fill-4{0%{fill:transparent}100%{fill:rgb(255,255,255)}}.svg-elem-4{-webkit-animation:animate-svg-stroke-4 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.30000000000000004s both,animate-svg-fill-4 1s cubic-bezier(0.6,-0.28,0.735,0.045) 0.86s both;animation:animate-svg-stroke-4 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.30000000000000004s both,animate-svg-fill-4 1s cubic-bezier(0.6,-0.28,0.735,0.045) 0.86s both}@-webkit-keyframes animate-svg-stroke-5{0%{stroke-dashoffset:396.9200134277344px;stroke-dasharray:396.9200134277344px}100%{stroke-dashoffset:0;stroke-dasharray:396.9200134277344px}}@keyframes animate-svg-stroke-5{0%{stroke-dashoffset:396.9200134277344px;stroke-dasharray:396.9200134277344px}100%{stroke-dashoffset:0;stroke-dasharray:396.9200134277344px}}@-webkit-keyframes animate-svg-fill-5{0%{fill:transparent}100%{fill:rgb(255,255,255)}}@keyframes animate-svg-fill-5{0%{fill:transparent}100%{fill:rgb(255,255,255)}}.svg-elem-5{-webkit-animation:animate-svg-stroke-5 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.4s both,animate-svg-fill-5 1s cubic-bezier(0.6,-0.28,0.735,0.045) 0.98s both;animation:animate-svg-stroke-5 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.4s both,animate-svg-fill-5 1s cubic-bezier(0.6,-0.28,0.735,0.045) 0.98s both}@-webkit-keyframes animate-svg-stroke-6{0%{stroke-dashoffset:467.9255676269531px;stroke-dasharray:467.9255676269531px}100%{stroke-dashoffset:0;stroke-dasharray:467.9255676269531px}}@keyframes animate-svg-stroke-6{0%{stroke-dashoffset:467.9255676269531px;stroke-dasharray:467.9255676269531px}100%{stroke-dashoffset:0;stroke-dasharray:467.9255676269531px}}@-webkit-keyframes animate-svg-fill-6{0%{fill:transparent}100%{fill:rgb(255,255,255)}}@keyframes animate-svg-fill-6{0%{fill:transparent}100%{fill:rgb(255,255,255)}}.svg-elem-6{-webkit-animation:animate-svg-stroke-6 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.5s both,animate-svg-fill-6 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.1s both;animation:animate-svg-stroke-6 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.5s both,animate-svg-fill-6 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.1s both}@-webkit-keyframes animate-svg-stroke-7{0%{stroke-dashoffset:392.4613952636719px;stroke-dasharray:392.4613952636719px}100%{stroke-dashoffset:0;stroke-dasharray:392.4613952636719px}}@keyframes animate-svg-stroke-7{0%{stroke-dashoffset:392.4613952636719px;stroke-dasharray:392.4613952636719px}100%{stroke-dashoffset:0;stroke-dasharray:392.4613952636719px}}@-webkit-keyframes animate-svg-fill-7{0%{fill:transparent}100%{fill:rgb(255,255,255)}}@keyframes animate-svg-fill-7{0%{fill:transparent}100%{fill:rgb(255,255,255)}}.svg-elem-7{-webkit-animation:animate-svg-stroke-7 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.6000000000000001s both,animate-svg-fill-7 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.22s both;animation:animate-svg-stroke-7 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.6000000000000001s both,animate-svg-fill-7 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.22s both}@-webkit-keyframes animate-svg-stroke-8{0%{stroke-dashoffset:974.21484375px;stroke-dasharray:974.21484375px}100%{stroke-dashoffset:0;stroke-dasharray:974.21484375px}}@keyframes animate-svg-stroke-8{0%{stroke-dashoffset:974.21484375px;stroke-dasharray:974.21484375px}100%{stroke-dashoffset:0;stroke-dasharray:974.21484375px}}@-webkit-keyframes animate-svg-fill-8{0%{fill:transparent}100%{fill:rgb(39,76,119)}}@keyframes animate-svg-fill-8{0%{fill:transparent}100%{fill:rgb(39,76,119)}}.svg-elem-8{-webkit-animation:animate-svg-stroke-8 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.7000000000000001s both,animate-svg-fill-8 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.3399999999999999s both;animation:animate-svg-stroke-8 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.7000000000000001s both,animate-svg-fill-8 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.3399999999999999s both}@-webkit-keyframes animate-svg-stroke-9{0%{stroke-dashoffset:391.4250183105469px;stroke-dasharray:391.4250183105469px}100%{stroke-dashoffset:0;stroke-dasharray:391.4250183105469px}}@keyframes animate-svg-stroke-9{0%{stroke-dashoffset:391.4250183105469px;stroke-dasharray:391.4250183105469px}100%{stroke-dashoffset:0;stroke-dasharray:391.4250183105469px}}@-webkit-keyframes animate-svg-fill-9{0%{fill:transparent}100%{fill:rgb(39,76,119)}}@keyframes animate-svg-fill-9{0%{fill:transparent}100%{fill:rgb(39,76,119)}}.svg-elem-9{-webkit-animation:animate-svg-stroke-9 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.8s both,animate-svg-fill-9 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.46s both;animation:animate-svg-stroke-9 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.8s both,animate-svg-fill-9 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.46s both}@-webkit-keyframes animate-svg-stroke-10{0%{stroke-dashoffset:169.28143310546875px;stroke-dasharray:169.28143310546875px}100%{stroke-dashoffset:0;stroke-dasharray:169.28143310546875px}}@keyframes animate-svg-stroke-10{0%{stroke-dashoffset:169.28143310546875px;stroke-dasharray:169.28143310546875px}100%{stroke-dashoffset:0;stroke-dasharray:169.28143310546875px}}@-webkit-keyframes animate-svg-fill-10{0%{fill:transparent}100%{fill:rgb(39,76,119)}}@keyframes animate-svg-fill-10{0%{fill:transparent}100%{fill:rgb(39,76,119)}}.svg-elem-10{-webkit-animation:animate-svg-stroke-10 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.9s both,animate-svg-fill-10 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.58s both;animation:animate-svg-stroke-10 0.8s cubic-bezier(0.47,0,0.745,0.715) 0.9s both,animate-svg-fill-10 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.58s both}@-webkit-keyframes animate-svg-stroke-11{0%{stroke-dashoffset:354.7828369140625px;stroke-dasharray:354.7828369140625px}100%{stroke-dashoffset:0;stroke-dasharray:354.7828369140625px}}@keyframes animate-svg-stroke-11{0%{stroke-dashoffset:354.7828369140625px;stroke-dasharray:354.7828369140625px}100%{stroke-dashoffset:0;stroke-dasharray:354.7828369140625px}}@-webkit-keyframes animate-svg-fill-11{0%{fill:transparent}100%{fill:rgb(39,76,119)}}@keyframes animate-svg-fill-11{0%{fill:transparent}100%{fill:rgb(39,76,119)}}.svg-elem-11{-webkit-animation:animate-svg-stroke-11 0.8s cubic-bezier(0.47,0,0.745,0.715) 1s both,animate-svg-fill-11 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.7s both;animation:animate-svg-stroke-11 0.8s cubic-bezier(0.47,0,0.745,0.715) 1s both,animate-svg-fill-11 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.7s both}@-webkit-keyframes animate-svg-stroke-12{0%{stroke-dashoffset:396.9200134277344px;stroke-dasharray:396.9200134277344px}100%{stroke-dashoffset:0;stroke-dasharray:396.9200134277344px}}@keyframes animate-svg-stroke-12{0%{stroke-dashoffset:396.9200134277344px;stroke-dasharray:396.9200134277344px}100%{stroke-dashoffset:0;stroke-dasharray:396.9200134277344px}}@-webkit-keyframes animate-svg-fill-12{0%{fill:transparent}100%{fill:rgb(39,76,119)}}@keyframes animate-svg-fill-12{0%{fill:transparent}100%{fill:rgb(39,76,119)}}.svg-elem-12{-webkit-animation:animate-svg-stroke-12 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.1s both,animate-svg-fill-12 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.8199999999999998s both;animation:animate-svg-stroke-12 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.1s both,animate-svg-fill-12 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.8199999999999998s both}@-webkit-keyframes animate-svg-stroke-13{0%{stroke-dashoffset:467.9255676269531px;stroke-dasharray:467.9255676269531px}100%{stroke-dashoffset:0;stroke-dasharray:467.9255676269531px}}@keyframes animate-svg-stroke-13{0%{stroke-dashoffset:467.9255676269531px;stroke-dasharray:467.9255676269531px}100%{stroke-dashoffset:0;stroke-dasharray:467.9255676269531px}}@-webkit-keyframes animate-svg-fill-13{0%{fill:transparent}100%{fill:rgb(39,76,119)}}@keyframes animate-svg-fill-13{0%{fill:transparent}100%{fill:rgb(39,76,119)}}.svg-elem-13{-webkit-animation:animate-svg-stroke-13 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.2000000000000002s both,animate-svg-fill-13 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.94s both;animation:animate-svg-stroke-13 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.2000000000000002s both,animate-svg-fill-13 1s cubic-bezier(0.6,-0.28,0.735,0.045) 1.94s both}@-webkit-keyframes animate-svg-stroke-14{0%{stroke-dashoffset:392.4613952636719px;stroke-dasharray:392.4613952636719px}100%{stroke-dashoffset:0;stroke-dasharray:392.4613952636719px}}@keyframes animate-svg-stroke-14{0%{stroke-dashoffset:392.4613952636719px;stroke-dasharray:392.4613952636719px}100%{stroke-dashoffset:0;stroke-dasharray:392.4613952636719px}}@-webkit-keyframes animate-svg-fill-14{0%{fill:transparent}100%{fill:rgb(39,76,119)}}@keyframes animate-svg-fill-14{0%{fill:transparent}100%{fill:rgb(39,76,119)}}.svg-elem-14{-webkit-animation:animate-svg-stroke-14 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.3s both,animate-svg-fill-14 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.06s both;animation:animate-svg-stroke-14 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.3s both,animate-svg-fill-14 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.06s both}@-webkit-keyframes animate-svg-stroke-15{0%{stroke-dashoffset:974.21484375px;stroke-dasharray:974.21484375px}100%{stroke-dashoffset:0;stroke-dasharray:974.21484375px}}@keyframes animate-svg-stroke-15{0%{stroke-dashoffset:974.21484375px;stroke-dasharray:974.21484375px}100%{stroke-dashoffset:0;stroke-dasharray:974.21484375px}}.svg-elem-15{-webkit-animation:animate-svg-stroke-15 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.4000000000000001s both,animate-svg-fill-15 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.1799999999999997s both;animation:animate-svg-stroke-15 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.4000000000000001s both,animate-svg-fill-15 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.1799999999999997s both}@-webkit-keyframes animate-svg-stroke-16{0%{stroke-dashoffset:391.4250183105469px;stroke-dasharray:391.4250183105469px}100%{stroke-dashoffset:0;stroke-dasharray:391.4250183105469px}}@keyframes animate-svg-stroke-16{0%{stroke-dashoffset:391.4250183105469px;stroke-dasharray:391.4250183105469px}100%{stroke-dashoffset:0;stroke-dasharray:391.4250183105469px}}.svg-elem-16{-webkit-animation:animate-svg-stroke-16 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.5s both,animate-svg-fill-16 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.3s both;animation:animate-svg-stroke-16 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.5s both,animate-svg-fill-16 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.3s both}@-webkit-keyframes animate-svg-stroke-17{0%{stroke-dashoffset:169.28143310546875px;stroke-dasharray:169.28143310546875px}100%{stroke-dashoffset:0;stroke-dasharray:169.28143310546875px}}@keyframes animate-svg-stroke-17{0%{stroke-dashoffset:169.28143310546875px;stroke-dasharray:169.28143310546875px}100%{stroke-dashoffset:0;stroke-dasharray:169.28143310546875px}}.svg-elem-17{-webkit-animation:animate-svg-stroke-17 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.6s both,animate-svg-fill-17 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.42s both;animation:animate-svg-stroke-17 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.6s both,animate-svg-fill-17 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.42s both}@-webkit-keyframes animate-svg-stroke-18{0%{stroke-dashoffset:354.7828369140625px;stroke-dasharray:354.7828369140625px}100%{stroke-dashoffset:0;stroke-dasharray:354.7828369140625px}}@keyframes animate-svg-stroke-18{0%{stroke-dashoffset:354.7828369140625px;stroke-dasharray:354.7828369140625px}100%{stroke-dashoffset:0;stroke-dasharray:354.7828369140625px}}.svg-elem-18{-webkit-animation:animate-svg-stroke-18 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.7000000000000002s both,animate-svg-fill-18 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.54s both;animation:animate-svg-stroke-18 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.7000000000000002s both,animate-svg-fill-18 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.54s both}@-webkit-keyframes animate-svg-stroke-19{0%{stroke-dashoffset:396.9200134277344px;stroke-dasharray:396.9200134277344px}100%{stroke-dashoffset:0;stroke-dasharray:396.9200134277344px}}@keyframes animate-svg-stroke-19{0%{stroke-dashoffset:396.9200134277344px;stroke-dasharray:396.9200134277344px}100%{stroke-dashoffset:0;stroke-dasharray:396.9200134277344px}}.svg-elem-19{-webkit-animation:animate-svg-stroke-19 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.8s both,animate-svg-fill-19 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.66s both;animation:animate-svg-stroke-19 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.8s both,animate-svg-fill-19 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.66s both}@-webkit-keyframes animate-svg-stroke-20{0%{stroke-dashoffset:467.9255676269531px;stroke-dasharray:467.9255676269531px}100%{stroke-dashoffset:0;stroke-dasharray:467.9255676269531px}}@keyframes animate-svg-stroke-20{0%{stroke-dashoffset:467.9255676269531px;stroke-dasharray:467.9255676269531px}100%{stroke-dashoffset:0;stroke-dasharray:467.9255676269531px}}.svg-elem-20{-webkit-animation:animate-svg-stroke-20 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.9000000000000001s both,animate-svg-fill-20 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.78s both;animation:animate-svg-stroke-20 0.8s cubic-bezier(0.47,0,0.745,0.715) 1.9000000000000001s both,animate-svg-fill-20 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.78s both}@-webkit-keyframes animate-svg-stroke-21{0%{stroke-dashoffset:392.4613952636719px;stroke-dasharray:392.4613952636719px}100%{stroke-dashoffset:0;stroke-dasharray:392.4613952636719px}}@keyframes animate-svg-stroke-21{0%{stroke-dashoffset:392.4613952636719px;stroke-dasharray:392.4613952636719px}100%{stroke-dashoffset:0;stroke-dasharray:392.4613952636719px}}.svg-elem-21{-webkit-animation:animate-svg-stroke-21 0.8s cubic-bezier(0.47,0,0.745,0.715) 2s both,animate-svg-fill-21 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.9s both;animation:animate-svg-stroke-21 0.8s cubic-bezier(0.47,0,0.745,0.715) 2s both,animate-svg-fill-21 1s cubic-bezier(0.6,-0.28,0.735,0.045) 2.9s both}
</style>
