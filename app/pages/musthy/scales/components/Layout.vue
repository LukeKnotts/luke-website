<template>
  <div>
    <Header />
    <div class="page-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Header from "/components/Header.vue";
</script>

<style scoped>
.page-content {
  margin: 20px;
}

:slotted(h1) {
  font-family: Georgia, "Times New Roman", Times, serif;
}

:slotted(p) {
  font-size: 18px;
  text-align: left;
  line-height: 1.5em;
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>
