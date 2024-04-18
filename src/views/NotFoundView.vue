<template>
  <section class="section flex flex-col justify-center items-center">
    <div class="animate__animated animate__flipInX not-found">
      <h1 class="notfound-heading"><span class="span-tag">/</span>404</h1>
      <p class="paragraph">{{localize("notFoundText")}}</p>
      <router-link class="link" to="/">{{localize("notFoundLink")}}</router-link>
    </div>
  </section>
</template>

<script>
import PrintUtil from "@/utils/localization/print.util";
export default {
  name: 'NotFoundView',
  methods: {
    localize(key, module = "NotFoundView") {
      return PrintUtil.localize(key, module);
    },
  }
};
</script>

<style scoped>
.notfound-heading {
  font-size: 5rem;
  font-weight: 800;
  color: var(--rhizome);
}
.span-tag {
  color: black;
}
.not-found {
  text-align: center;
  text-transform: lowercase;
  font-weight: 600;
  padding: 2rem;
}
.section {
  height: 100vh;
}
.link {
  text-decoration: underline;
  color: var(--rhizome);
  font-weight: 400;
}
</style>