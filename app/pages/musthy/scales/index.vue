<template>
  <div>
    <Layout>
      <h1>Musical Scales</h1>
      <p>Howdy folks!</p>
      <template v-for="(scale_num, index) in 100 + 1">
        <ScaleCard :pcs_num="index" :edo="12" />
      </template>
    </Layout>
  </div>
</template>

<script setup>
import Layout from "~/pages/musthy/scales/components/Layout.vue";
import ScaleCard from "~/pages/musthy/scales/components/ScaleCard.vue";
</script>
