<script>
import {IconArrowBadgeRightFilled} from "@tabler/icons-vue";
import PrintUtil from "@/utils/localization/print.util";

import GlitchedWriter from 'vue-glitched-writer'
export default {
  name: "OffersComponent",
  components: {IconArrowBadgeRightFilled, GlitchedWriter},
  data() {
    return {
      darkTerminalVisible: false,
      lightTerminalVisible: false,
    };
  },
  methods: {
    localize(key, module = "offersComponent") {
      return PrintUtil.localize(key, module);
    },
    toggleDarkTerminal() {
      this.darkTerminalVisible = !this.darkTerminalVisible;
      this.resetAfterDelay();
      if (this.darkTerminalVisible) {
        setTimeout(() => {
          this.$router.push({ name: 'full-cycle' });
        }, 1800);
      }
    },
    toggleLightTerminal() {
      this.lightTerminalVisible = !this.lightTerminalVisible;
      this.resetAfterDelay();
      if (this.lightTerminalVisible) {
        setTimeout(() => {
          this.$router.push({ name: 'optimization' });
        }, 1800);
      }
    },
    resetAfterDelay() {
      setTimeout(() => {
        this.darkTerminalVisible = false;
        this.lightTerminalVisible = false;
      }, 2000);
    },
  }

}
</script>

<template>
  <section class="section flex flex-col justify-center items-center">
    <div class="container offers-container">
      <h1 class="heading-big heading-offers">{{localize('offersHeading')}}</h1>
      <div class="flex flex-row justify-between mb-20 terminal-row">
        <div class="flex flex-col">
          <div class="container dark-terminal" @click="toggleDarkTerminal('offerDark')">
            <div class="flex flex-row dark-terminal-header">
              <div class="flex flex-col justify-center">
                <div class="flex flex-row gap-2">
                  <div class="red"></div>
                  <div class="yellow"></div>
                  <div class="green"></div>
                </div>
              </div>
              <div class="flex flex-col justify-center">
                <span class="app-name">{{localize('fullCycleHeader')}}</span>
              </div>
              <div class="flex flex-col">

              </div>
            </div>
            <div class="container-fluid dark-terminal-body">
              <h4 v-if="!darkTerminalVisible" class="dark-terminal-heading "><IconArrowBadgeRightFilled   color="limegreen" :size="20" stroke-width="2" /> {{localize('fullCycleHeading')}}</h4>
              <p v-if="!darkTerminalVisible" class="dark-terminal-text">
                {{localize('fullCycleDescription')}} <span class="cursor-small">|</span>
              </p>
              <span v-if="darkTerminalVisible" class="launch-text-dark" >>> <glitched-writer text="code initialization" appear preset="neo" /></span>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="container light-terminal" @click="toggleLightTerminal('offerLight')">
            <div class="flex flex-row light-terminal-header">
              <div class="flex flex-col justify-center">
                <div class="flex flex-row gap-2">
                  <div class="red"></div>
                  <div class="yellow"></div>
                  <div class="green"></div>
                </div>
              </div>
              <div class="flex flex-col justify-center">
                <span class="app-name-light">{{localize('outsourceHeader')}}</span>
              </div>
              <div class="flex flex-col">

              </div>
            </div>
            <div class="container-fluid light-terminal-body">
              <h4 v-if="!lightTerminalVisible" class="light-terminal-heading"><IconArrowBadgeRightFilled   color="limegreen" :size="20" stroke-width="2" /> {{localize('outsourceHeading')}}</h4>
              <p v-if="!lightTerminalVisible" class="light-terminal-text">
                {{localize('outsourceDescription')}} <span class="cursor-small">|</span>
              </p>
              <span v-if="lightTerminalVisible" class="launch-text-light" >>> <glitched-writer text="code initialization" appear preset="neo" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media only screen and (max-width: 600px) and (min-width: 300px) {
  .heading-offers {
    font-size: 4rem;
    line-height: 3.5rem!important;
    text-align: center;
    margin-top: 0.5rem!important;
  }
  .terminal-row {
    flex-direction: column!important;
    gap: 3rem;
  }
  .container {
    width: 92%!important;
  }
  .dark-terminal {
    max-width: 48rem!important;
    min-width: 20rem!important;
    height: 19rem!important;
  }
  .dark-terminal-body {
    height: 15rem!important;
  }
  .light-terminal-body {
    height: 15rem!important;
  }
  .light-terminal {
    max-width: 48rem!important;
    min-width: 20rem!important;
    height: 19rem!important;
  }
}
.heading-offers {
  line-height: 100px;
  margin-bottom: 5rem;
  margin-top: 6rem;
}
.description-offers {
  font-size: 30px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 2rem;
}
.terminal-container {

}
.dark-terminal {
  background-color: rgba(31, 31, 31, 0.77);
  height: 100%;
  gap: 1rem;
  position: relative;
  top: 0;
  padding-left: 0;
  padding-right: 0;
  justify-content: flex-start;
  display: flex;
  max-width: 70rem;
  min-width: 36rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  align-content: flex-start;
  border-radius: 0.6rem 0.6rem 0.6rem 0.6rem;
  border: 1px solid #3c3c3c;
  transition: all 0.3s ease-in-out;
  border-top: 0;
}
.dark-terminal:hover {
  top: -10px;
  transition: all ease-in-out 0.5s, top ease-in-out 0.2s;
  box-shadow: 0px 4px 40px 0px rgba(34, 57, 108, 0.48);
  cursor: pointer;
}
.light-terminal {
  position: relative;
  top: 0;
  background-color: hsla(0,0%,100%,.63);
  color: black;
  height: 100%;
  gap: 1rem;
  transition: all ease-in-out 0.5s, top ease-in-out 0.2s;
  padding-left: 0;
  padding-right: 0;
  min-width: 36rem;
  justify-content: flex-start;
  display: flex;
  max-width: 60rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  align-content: flex-start;
  border-radius: 0.6rem 0.6rem 0.6rem 0.6rem;
  border: 1px solid #dcdcdc;
}
.light-terminal:hover {
  top: -10px;
  transition: all ease-in-out 0.5s, top ease-in-out 0.2s;
  box-shadow: 0px 4px 40px 0px rgba(34, 57, 108, 0.48);
  cursor: pointer;
}
.dark-terminal-heading {
  color: white;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 25px;
  margin-bottom: 1rem;
}
.light-terminal-heading {
  color: #0e0e0e;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 25px;
  margin-bottom: 1rem;
}
.dark-terminal-text {
  color: white;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  width: 100%;
  max-width: 28rem;
  font-size: 1.3rem;
  line-height: 25px;
}
.light-terminal-text {
  color: #111111;
  font-weight: 400;
  font-family: 'Ubuntu Mono', monospace;
  width: 100%;
  max-width: 28rem;
  font-size: 1.3rem;
  line-height: 25px;
}
.dark-terminal-header {
  background-color: #3b3b3b;
  height: 40px;
  width: 100%;
  min-height: 40px;
  margin: 0;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  align-content: center;
  border-radius: 1rem 1rem 0rem 0rem;
  border: 1px solid #484848;
  border-bottom: 1px solid #2e2e2e;
  display: flex;
  flex-direction: row;
  gap: 0;
}
.light-terminal-header {
  height: 40px;
  width: 100%;
  min-height: 40px;
  margin: 0;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  align-content: center;
  border-radius: 1rem 1rem 0rem 0rem;
  display: flex;
  flex-direction: row;
  gap: 0;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
}
.dark-terminal-body, .light-terminal-body {
  padding-left: 2rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 2rem;
  padding-bottom: 0.3rem;
}
.yellow {
  background-color: #FFB429;
  border: 1px solid #F0A318;
  border-radius: 50%;
  width: 15px;
  height: 15px;
}
.green {
  border: 1px solid #12A025;
  background-color: #25C63A;
  border-radius: 50%;
  width: 15px;
  height: 15px;
}
.red {
  background-color: #FF544D;
  border: 1px solid #DA3C37;
  border-radius: 50%;
  width: 15px;
  height: 15px;
}
.app-name {
  width: 100%;
  max-width: 20rem;
  text-align: center;
  color: white;
  justify-content: center;
  align-items: center;
  align-self: center;
}
.launch-text-dark {
  font-size: 1.5rem;
  font-weight: 400;
  color: #11ff11;
}
.launch-text-light {
  font-size: 1.5rem;
  font-weight: 400;
  color: #11ff11;
}
</style>