<script setup>
defineProps(["array"]);
</script>

<template>
  <div class="background">
    <hr />
    <h1>AI Warning!</h1>
    <p>
      This part of the website's code was written with the assistance of
      Google's AI 'Gemini.' This mostly just means that things are less
      understood by me, and are probably buggy.
    </p>
    <div v-if="array">
      <template v-for="ele in array">
        <p>{{ ele }}</p>
      </template>
    </div>
    <hr />
  </div>
</template>

<style scoped>
.background {
  background-color: turquoise;
}
</style>
