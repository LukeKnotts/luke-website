<script setup></script>

<template>
  <div class="edoselect-content">
    <label for="edo-input">Select your edo tuning! </label>
    <input id="edo-input" type="text" class="text-input" />
    <p>The current tuning is</p>
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
</style>
