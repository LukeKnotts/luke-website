<script setup>
defineProps(["quote", "citation"]);

// The language needs to be set to 'English' in order for the "hyphens" CSS property to split words into multiple lines. The text looks better that way.
useHead({
  htmlAttrs: { lang: "en" },
});
</script>

<template>
  <div class="indent">
    <br />
    <div class="quote">
      <p>"{{ quote }}"</p>
      <p class="subtitle">&mdash; {{ citation }}</p>
    </div>
    <br />
  </div>
</template>

<style scoped>
@import "../main.css";

.indent {
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.quote {
  background-color: lightgrey;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  max-width: 450px;
}

.quote p {
  font-size: 20px;
}

.quote .subtitle {
  color: rgb(89, 89, 89);
  font-size: 18px;
}
</style>
