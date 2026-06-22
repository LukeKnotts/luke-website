<script setup>
const props = defineProps(["include_transpositions"]);
const include_transpositions = props.include_transpositions;

const model = defineModel();
const text_input = ref(model.value);

defineEmits(["update"]);

import scaleID from "~/pages/musthy/composables/scaleid.js";
</script>

<template>
  <div class="edoselect-content">
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
            $emit('update', Number(text_input));
          }
        }
      "
    />
    <p class="inline">
      &nbsp; The current tuning is {{ model }}edo. There are
      {{
        include_transpositions
          ? scaleID().count_scales(model + 1) - 1
          : scaleID().count_scales(model)
      }}
      scales {{ include_transpositions ? "(including transpositions)" : "" }} in
      this tuning.
    </p>
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
