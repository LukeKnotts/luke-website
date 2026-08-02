<template>
  <div class="binexample-flexcontainer">
    <div class="binexample-content">
      <h1>Binary Scale IDs</h1>
      <EdoSelect
        v-model="edo"
        :include_transpositions="true"
        @update="(n) => (edo = n)"
      />

      <table>
        <thead>
          <tr>
            <td>Decimal ID</td>
            <td>{{ edo }}-bit Binary</td>
            <td>Pc Set</td>
          </tr>
        </thead>
        <tbody>
          <template v-for="id in display_range">
            <tr>
              <td>
                <div class="cell-data">{{ id }}</div>
              </td>
              <td class="binary">
                <div class="cell-data">{{ scaleID().bin(id, edo) }}</div>
              </td>
              <td>
                <div class="cell-data">
                  {{
                    scaleID().scale_bin(scaleID().bin(id, edo), edo).join(", ")
                  }}
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <div class="id-button">
        <p>
          <button>&leftarrow;</button>&emsp;
          <span class="cell-data"
            >{{ display_range[0] }} -
            {{ display_range[display_amount - 1] }}</span
          >
          &emsp;<button>&rightarrow;</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import EdoSelect from "~/pages/musthy/components/EdoSelect.vue";
import scaleID from "~/pages/musthy/composables/scaleid.js";

const edo = ref(12);
// make system to choose to count transpositions and use that instead.
const scale_count = computed(() => {
  return scaleID().count_scales(edo.value + 1) - 1;
});
const display_amount = ref(100);
// initialize display range
const display_range = computed(() => {
  return scale_count.value < display_amount.value
    ? scaleID().range(0, scale_count.value)
    : scaleID().range(0, display_amount.value);
});
</script>

<style scoped>
.binexample-flexcontainer {
  display: flex;
  justify-content: center;
}

.binexample-content {
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px 20px 20px 20px;

  width: 60%;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: safe center;

  max-height: 550px;
  overflow-y: scroll;
}
@media only screen and (max-width: 500px) {
  .binexample-content {
    width: 95%;
    overscroll-behavior: auto;
  }
}

h1 {
  margin: 0px;
}

.id-button {
  border: 1px solid black;
  padding: 10px;
  margin-top: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #e2e2e2;
}
.id-button p {
  margin: 0px;
}
</style>
