<script setup>
import Header from "~/components/Header.vue";
import Wipbanner from "~/components/Wipbanner.vue";
</script>

<template>
  <div>
    <Header
      :array="[
        { link: '/langs', name: 'Langs' },
        { link: '/langs/mclang', name: '[MC Lang]' },
      ]"
    />
    <Wipbanner />
    <div class="page-content"><slot></slot></div>
    <br />
    <hr />
    <br />
  </div>
</template>

<style scoped>
.page-content {
  margin-left: 30px;
}

p {
  font-size: 20px;
}

.subtitle {
  color: grey;
  font-size: 16px;
}
</style>
