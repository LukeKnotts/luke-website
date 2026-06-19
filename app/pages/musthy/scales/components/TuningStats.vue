<script setup>
const props = defineProps(["edo"]);
const edo = props.edo;

import scaleID from "~/pages/musthy/composables/scaleid.js";
</script>

<template>
  <div>
    <hr />
    <p>
      Hello, the current tuning is "{{ edo }}-Tone Equal Temperment", or
      {{ edo }}edo. There are {{ scaleID().count_scales(edo) }} scales in this
      tuning.
    </p>
    <hr />
  </div>
</template>
