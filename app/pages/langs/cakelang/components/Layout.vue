<template>
  <div>
    <Header
      :array="[
        { link: '/langs', name: 'Langs' },
        { link: '/langs/cakelang', name: 'Cakelang' },
      ]"
    />
    <WIPbanner />
    <div class="cakelang-wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import WIPbanner from "~/components/Wipbanner.vue";
</script>

<style scoped>
.cakelang-wrapper {
  margin-left: 15%;
  margin-right: 15%;
  width: auto;
}
@media all and (max-width: 500px) {
  .cakelang-wrapper {
    /* Small margins for phone screens */
    margin: 0px 20px 20px 20px;
  }
}

:deep(h1) {
  font-family: Georgia, "Times New Roman", Times, serif;
}
:deep(p) {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 18px;
  line-height: 1.5em;
  text-align: justify;
}
:deep(a) {
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>
