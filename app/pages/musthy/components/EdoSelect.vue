<script setup>
const props = defineProps(["include_transpositions"]);
const include_transpositions = props.include_transpositions;

const model = defineModel();
const text_input = ref(model.value);

const highlight = ref(false);

defineEmits(["update_edo", "update_highlight"]);

import TuningBlurb from "~/pages/musthy/components/TuningBlurb.vue";
import scaleID from "~/pages/musthy/composables/scaleid.js";
</script>

<template>
  <div class="edoselect-content">
    <div>
      <label for="edo-input">Type your edo tuning! </label>
      <input
        id="edo-input"
        type="text"
        class="text-input"
        v-model="text_input"
        @keyup="
          () => {
            text_input = String(text_input).replace(/[^0-9]/g, '');
          }
        "
        @keyup.enter="
          () => {
            if (scaleID().valid_edo(Number(text_input))) {
              text_input = String(text_input).replace(/[^0-9]/g, '');
              // Emit highlight as well, otherwise highlight value isn't acknowledged on data updates
              $emit('update_edo', Number(text_input), highlight);
            }
          }
        "
      />
    </div>
    <TuningBlurb
      :edo="model"
      :include_transpositions="include_transpositions"
    />
    <div v-if="include_transpositions">
      <p>
        <label for="transpositions">Highlight transpositions?</label>
        <input
          id="transpositions"
          type="checkbox"
          @click="
            () => {
              highlight = !highlight;
              $emit('update_highlight', highlight);
            }
          "
        />
      </p>
    </div>
  </div>
</template>

<style scoped>
.edoselect-content {
  display: block;
  border: 1px solid black;
  margin: 5px 0px 5px 0px;

  padding: 10px;
}

.text-input {
  width: 100px;
  text-overflow: ellipsis;
}

p {
  margin-bottom: 5px;
}
.inline {
  display: inline;
}
</style>
