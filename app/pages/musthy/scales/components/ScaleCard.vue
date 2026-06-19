<script setup>
const props = defineProps(["pcs_num"]);

// Pitch Class Set Number!
const pcs_num = props.pcs_num;
</script>

<template>
  <div class="flex-display">
    <div class="content-card">
      <p>Scale #{{ pcs_num }}</p>
    </div>
  </div>
</template>

<style scoped>
.flex-display {
  display: flex;
  justify-content: center;
}

.content-card {
  border: 1px solid black;
  border-radius: 10px;
  background-color: rgb(248, 248, 248);

  display: block;
  width: 100%;
  max-width: 700px;

  margin: 5px;
  padding-left: 10px;
}
</style>
