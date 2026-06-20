<template>
  <div class="binexample-flexcontainer">
    <div class="binexample-content">
      <h1>Binary Scale IDs</h1>
      <EdoSelect v-model="edo" @update="(n) => (edo = n)" />

      <table>
        <thead>
          <tr>
            <td>Decimal</td>
            <td>{{ edo }}-bit Binary</td>
            <td>Pc Set</td>
          </tr>
        </thead>
        <tbody>
          <template v-for="(ele, id) in 100 + 1">
            <tr>
              <td>
                <div class="cell-data">{{ id }}</div>
              </td>
              <td class="binary">
                <div class="cell-data">{{ scaleID().bin(id, edo) }}</div>
              </td>
              <td>
                <div class="cell-data">{{ id }}</div>
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
  overflow: hidden;
  overflow-x: scroll;

  /* Disable visual scrollbar. */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox, Safari 18.2+, Chromium 121+ */
}
.cell-data::-webkit-scrollbar {
  display: none; /* Older Safari and Chromium */
}
.cell-data:hover {
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

h1 {
  margin: 0px;
}
.binary {
  font-family: monospace;
}
</style>
