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

:slotted(p) {
  font-size: 18px;
  text-align: left;
  line-height: 1.5em;
}

:slotted(.subtitle) {
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
/* Stands for "inline Slabbic". Used to make text in Slabbic that is in the middle of an English paragraph not look too weird.*/
:slotted(.islab) {
  border: 1px solid rgb(47, 47, 170);
  background: rgb(201, 225, 233);
  padding: 2px;
  border-radius: 3px;
}

:slotted(hr) {
  width: 100%;
}
</style>
