<script setup>
import Header from "~/components/Header.vue";
import Wipbanner from "~/components/Wipbanner.vue";
</script>

<template>
  <div>
    <Header
      :array="[
        { link: '/langs', name: 'Langs' },
        { link: '/langs/slabbic', name: 'Slabbic' },
      ]"
    />
    <Wipbanner />
    <div class="slabbic-page-wrapper"><slot></slot></div>
    <div>
      <hr />
      <p class="legal-disclaimer">
        NOT AN OFFICIAL MINECRAFT [PRODUCT/SERVICE/EVENT/etc.]. NOT APPROVED BY
        OR ASSOCIATED WITH MOJANG OR MICROSOFT
      </p>
      <hr />
      <br />
    </div>
  </div>
</template>

<style scoped>
.slabbic-page-wrapper {
  /* Default large margin for computer screens */
  margin: 0px 15% 20px 15%;
  text-align: justify;
}
@media all and (max-width: 500px) {
  .slabbic-page-wrapper {
    /* Small margins for phone screens */
    margin: 0px 25px 20px 25px;
    /* Less awkard text on phone screens */
    text-align: left;
  }
}

.legal-disclaimer {
  margin: 0px 0px 0px 20px;
  color: rgb(69, 68, 68);
}

:slotted(h1),
:slotted(h2),
:slotted(h3) {
  font-family: helvetica, sans-serif;
  margin: 20px 0px 15px 0px;
}

:slotted(p),
:slotted(table) {
  font-family: helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.7em;
  margin: 12px 0px 10px 0px;
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
  margin: 20px 0px 20px 0px;
}
:slotted(td) {
  border: solid 1px black;
  text-align: center;
}

:slotted(a) {
  color: green;
}
:slotted(.todo) {
  color: red;
}
:slotted(.underline) {
  text-decoration: underline;
}
:slotted(.highlight) {
  color: green;
  font-weight: bold;
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
