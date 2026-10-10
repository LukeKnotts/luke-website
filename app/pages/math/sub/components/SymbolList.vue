<template>
  <div class="symbol-list">
    <h2>Symbols:</h2>
    <!-- EXISTING SYMBOLS -->
    <template v-for="(symbol, index) in symbols">
      <div class="symbol-card">
        <p>
          <span class="id-label">{{ index }}</span>
          {{ symbol.symbol ? symbol.symbol : "[Error. No symbol provided.]" }}
        </p>
        <p>
          <span v-if="symbol.name">({{ symbol.name }})</span>
        </p>
      </div>
    </template>
    <!-- ADD NEW SYMBOL -->
    <h2>Add a New Symbol:</h2>
  </div>
</template>

<script setup>
defineProps({
  symbols: {
    type: Array,
  },
});
</script>

<style scoped>
.symbol-card {
  display: inline-block;
  padding: 5px;
  margin: 5px;
  border: 1px solid green;
  transition: 0.2s;
}
.symbol-card:hover {
  background-color: rgba(172, 255, 47, 0.1);
  transition: 0.2s;
}

.id-label {
  font-size: 15px;
  color: blue;
}
</style>
