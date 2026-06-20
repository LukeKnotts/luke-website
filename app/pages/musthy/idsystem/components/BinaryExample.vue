<template>
  <div class="binexample-flexcontainer">
    <div class="binexample-content">
      <h1>Binary Scale IDs</h1>
      <EdoSelect />
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
              <td>{{ id }}</td>
              <td class="binary">{{ scaleID().bin(id, edo) }}</td>
              <td>{{ id }}</td>
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
  padding: 20px;

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
  }
}

table {
  border-collapse: collapse;
}
thead {
  background-color: rgb(226, 226, 226);
}
td {
  border: 1px solid grey;
  padding: 5px;
}

h1 {
  margin: 0px;
}
.binary {
  font-family: monospace;
}
</style>
