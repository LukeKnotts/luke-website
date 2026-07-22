<template>
  <div class="default-page-wrapper">
    <slot />
  </div>
</template>

<script setup>
onMounted(() => {
  useHead({
    bodyAttrs: {
      style: `background-color: ${bg_color.value}; margin: 0px;`,
    },
  });
});

const bg_color = ref("rgb(224, 186, 132)");
</script>

<style scoped>
.default-page-wrapper {
  /* Default large margin for computer screens */
  margin: 0px 15% 20px 15%;

  /* TEXT STYLE */
  font-family: georgia, serif;
  font-size: 16px;
  line-height: 1.5em;
  text-align: justify;
}

@media all and (max-width: 500px) {
  .default-page-wrapper {
    /* Small margins for phone screens */
    margin: 0px 25px 20px 25px;
    /* Less awkard text on phone screens */
    text-align: left;
  }
}

:deep(a) {
  color: rgb(41, 142, 205);
  text-decoration: underline dotted rgb(46, 175, 36);
}

:deep(.portrait) {
  width: 250px;
  max-width: 80%;
  border: 2px solid black;
  border-radius: 3px;
}
</style>
