<script setup>
const props = defineProps(["edo", "include_transpositions"]);

const model = defineModel();

import scaleID from "~/pages/musthy/composables/scaleid.js";
</script>

<template>
  <div>
    <p>
      The current tuning is <span class="highlight">{{ props.edo }}edo</span>.
      There are
      {{
        include_transpositions
          ? scaleID().count_scales(props.edo, true).toLocaleString()
          : scaleID().count_scales(props.edo).toLocaleString()
      }}
      scales
      {{
        include_transpositions
          ? "(including transpositions"
          : "(no transpositions"
      }}, including the empty set), in this tuning.
    </p>
  </div>
</template>
