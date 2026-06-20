<template>
  <div class="flex-display">
    <div class="component-content">
      <h1>Binary Scale IDs</h1>
      <table>
        <thead>
          <tr>
            <td>Decimal</td>
            <td>Binary</td>
            <td>Pc Set</td>
          </tr>
        </thead>
        <tbody>
          <template v-for="id in 100">
            <tr>
              <td>{{ id }}</td>
              <td>{{ id }}</td>
              <td>{{ id }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.flex-display {
  display: flex;
  justify-content: center;
}

.component-content {
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
  .component-content {
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
</style>
