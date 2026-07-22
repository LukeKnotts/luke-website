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

const bg_color = ref("rgb(255, 249, 240)");
</script>

<style scoped>
.default-page-wrapper {
  margin: none;
  padding-left: 20px;
}

:deep(.portrait) {
  width: 300px;
  max-width: 80%;
  border: 2px solid black;
  border-radius: 3px;
}
</style>
