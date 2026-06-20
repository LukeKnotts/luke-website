<script setup>
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
          text_input = text_input.replace(/[^0-9]/g, '');
          if (!scaleID().valid_edo(Number(text_input))) {
            text_input = model;
          }
        }
      "
      @keyup.enter="
        () => {
          $emit('update', text_input);
        }
      "
    />
    <p class="inline">&nbsp; The current tuning is {{ model }}edo.</p>
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
