<template>
  <div>
    <Header />
    <NuxtLayout>
      <h1>What Can JavaScript Do?</h1>
      <p>JavaScript can change HTML attribute values.</p>
      <p id="demo" style="color: red">Hm</p>
      <p id="demo2" style="color: red">Hm?</p>
      <button onclick="testFunction.js">Test</button>
    </NuxtLayout>
    <NuxtLayout />
    <NuxtLayout />
    <NuxtLayout />
    <NuxtLayout />
  </div>
</template>

<testFunction />

<script setup>
useHead({
  title: "A Page to Test Code Stuffs",
});
import Header from "/components/Header.vue";
</script>
