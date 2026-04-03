<template>
  <div>
    <h1>Base n Counter.</h1>
    <p>Here it is.</p>
    <canvas
      height="100"
      ,
      width="100"
      id="c"
      style="border: solid 1px black"
    ></canvas>
    <button @click="canvas ? draw() : not_yet()">Draw!</button>
  </div>
</template>

<script setup>
// log if canvas is not loaded when user tries to draw
const not_yet = () => {
  console.log("The canvas has not yet loaded!");
};

// setup Canvas
const canvas = ref(0);

onMounted(() => {
  var c = document.getElementById("c");
  var ctx = c.getContext("2d");
  canvas.value = ctx;
});

const draw = () => {
  canvas.value.moveTo(0, 0);
  canvas.value.lineTo(100, 100);
  canvas.value.stroke();
};
</script>
