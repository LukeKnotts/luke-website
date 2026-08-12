<template>
  <div>
    <Layout>
      <h1>Musical Scales</h1>
      <p>Howdy folks!</p>
      <TuningBlurb :edo="edo" />
      <button @click="test().printScales(edo)">Test Button</button>
      <template v-for="(scale_num, index) in 100 + 1">
        <ScaleCard :pcs_num="index" :edo="edo" />
      </template>
    </Layout>
  </div>
</template>

<script setup>
import Layout from "~/pages/musthy/components/Layout.vue";
import TuningBlurb from "~/pages/musthy/components/TuningBlurb.vue";
import ScaleCard from "~/pages/musthy/components/ScaleCard.vue";

const edo = ref(12);

import test from "~/pages/musthy/composables/scalegentest.js";
</script>
