<template>
  <div>
    <Layout>
      <h1>Substitution</h1>
      <p>There is stuff on this webpage.</p>
      <hr />
      <SymbolList :symbols="symbol_list" />
      <hr />
    </Layout>
  </div>
</template>

<script setup>
import Layout from "./components/Layout.vue";
import SymbolList from "./components/SymbolList.vue";

// Symbol format:
//    .symbol: str
//    .name: (optional) str
// The index of a symbol in 'symbol_list' is a good enough ID.
const symbol_list = ref([]);
symbol_list.value.push({ symbol: "A", name: "a" }, { symbol: "B", name: "b" });
</script>
