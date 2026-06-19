<template>
  <div>
    <Layout>
      <h1>Musical Scales</h1>
      <p>Howdy folks!</p>
      <TuningStats :edo="edo" />
      <template v-for="(scale_num, index) in 100 + 1">
        <ScaleCard :pcs_num="index" :edo="edo" />
      </template>
    </Layout>
  </div>
</template>

<script setup>
import Layout from "~/pages/musthy/scales/components/Layout.vue";
import TuningStats from "~/pages/musthy/scales/components/TuningStats.vue";
import ScaleCard from "~/pages/musthy/scales/components/ScaleCard.vue";

const edo = ref(12);
</script>
