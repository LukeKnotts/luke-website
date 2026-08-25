<template>
  <div>
    <Header
      :array="[
        { link: '/langs', name: 'Langs' },
        { link: '/langs/pathlang', name: 'Pathlang' },
      ]"
    />
    <Wipbanner />
    <h1>Pathlang</h1>
    <p>Hello!</p>
    <p>
      Pathlang is a fictional language I am creating for a fictional world!
      Maybe something will come of this someday...
    </p>
    <hr />
    <p>
      <a href="/langs/pathlang/paths"
        >Proto-Pathlang Dictionary Reconstruction</a
      >
    </p>
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Wipbanner from "~/components/Wipbanner.vue";
</script>
