<script setup>
import Header from "/components/Header.vue";
</script>

<template>
  <div>
    <Header :array="[{ link: '/musthy', name: 'Music Theory' }]" />
    <h1>Music Scale Calculator</h1>
    <p>Hello.</p>
  </div>
</template>
