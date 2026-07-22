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
            <td>Decimal</td>
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
                <div class="cell-data">Placeholder</div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
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
// initialize display range
const display_range = computed(() => {
  return scale_count.value < 100
    ? scaleID().range(0, scale_count.value)
    : scaleID().range(0, 100);
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

table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black;

  table-layout: fixed;
}
thead {
  background-color: rgb(226, 226, 226);
}
td {
  border: 1px solid grey;
  padding: 5px;
}
.cell-data {
  overflow-y: scroll;
  overflow-x: scroll;
}
.cell-data:hover {
  /* TODO: only show hover icon if content is scrollable. */
  text-overflow: clip;
  cursor: ew-resize;
}
.cell-data::before {
  content: "[";
  color: green;
}
.cell-data::after {
  content: "]";
  color: green;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  border-radius: 7px;
  margin: 2px;

  background-color: rgb(229, 229, 229);
}

h1 {
  margin: 0px;
}
.binary {
  font-family: monospace;
}
</style>
