<script setup>
import Header from "~/components/Header.vue";
import Wipbanner from "~/components/Wipbanner.vue";
</script>

<template>
  <div>
    <Header
      :array="[
        { link: '/langs', name: 'Langs' },
        { link: '/langs/mclang', name: 'Slabbic' },
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 10%;
  margin-right: 20px;
  max-width: 900px;
}

.page-content p,
h1,
h2 {
  margin-top: 5px;
}

p {
  font-size: 20px;
  text-align: left;
}

.subtitle {
  color: grey;
  font-size: 16px;
}

:slotted(img) {
  max-width: 80%;
}

:slotted(table) {
  border: solid 1px black;
}
:slotted(td) {
  border: solid 1px black;
}

:slotted(.todo) {
  color: red;
}
:slotted(.underline) {
  text-decoration: underline;
}
</style>
