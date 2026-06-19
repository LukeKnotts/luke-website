<template>
  <div>
    <Header :array="[{ link: '/musthy', name: 'Music Theory' }]" />
    <div class="flex-display">
      <div class="page-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "/components/Header.vue";
</script>

<style scoped>
.flex-display {
  display: flex;
  justify-content: center;
}

.page-content {
  width: 70%;
}
@media only screen and (max-width: 600px) {
  .page-content {
    width: 95%;
  }
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
