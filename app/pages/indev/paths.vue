<template>
  <div>
    <h1>Paths. <a href="/">Luke Knotts</a></h1>
    <p>Here it is.</p>
    <p>{{ combination_count }} different paths.</p>
    <hr />
    <div class="path_wall">
      <template v-for="(ele, index) in combination_list" :key="ele">
        <div v-if="combination_count != 'loading...'" class="path_card">
          <canvas
            height="100"
            ,
            width="100"
            :id="index"
            :ref="(el) => (canvases[index] = el)"
            style="border: solid 1px black"
          ></canvas>
          <p>{{ ele }}</p>
          <p>No. {{ index }}</p>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </template>
    </div>
    <hr />
  </div>
</template>

<script setup>
// imports
import { ref, onMounted, nextTick } from "vue";

// log if canvas is not loaded when user tries to draw
const not_yet = () => {
  console.log("The canvas has not yet loaded!");
};

// make list of all arrays up to size 12 (0-11).

const combination_list = ref([[]]);
const size = 12;

// generate all calculations. Adapted from my "scalefams.py" algorithm, i'm gonna plug and chug and hope I dont have to re-understand it!

var unbranched = [];
var Temporary = [];

for (var ii = 0; ii < size; ii++) {
  Temporary = [];
  Temporary.push(ii);
  unbranched.push(Temporary);
}

const branch = (P) => {
  var lastP = P[P.length - 1];
  for (var ii = 1; ii < size - lastP; ii++) {
    Temporary = [];
    for (var jj = 0; jj < P.length; jj++) {
      Temporary.push(P[jj]);
    }
    Temporary.push(ii + lastP);
    unbranched.push(Array.from(Temporary));
  }
  unbranched.shift();
  combination_list.value.push(Array.from(P));
};

// this value is fixed for load checking in the template div v-if.
const combination_count = ref("loading...");

const generate_combinations = () => {
  while (unbranched.length > 0) {
    branch(unbranched[0]);
  }
  combination_count.value = combination_list.value.length;
};

// setup Canvas
const canvases = ref({});

onMounted(async () => {
  generate_combinations();

  await nextTick();

  for (var ii = 0; ii < combination_count.value; ii++) {
    canvases.value[ii + "ctx"] = canvases.value[ii].getContext("2d");
    canvases.value[ii] = canvases.value[ii + "ctx"];
    draw_path(ii, combination_list.value[ii]);
  }
});

// draw functions

const draw0 = (canvas) => {
  canvas.moveTo(5, 5);
  canvas.lineTo(50, 5);
  canvas.stroke();
};

const draw1 = (canvas) => {
  canvas.moveTo(50, 5);
  canvas.lineTo(95, 5);
  canvas.stroke();
};

const draw2 = (canvas) => {
  canvas.moveTo(5, 5);
  canvas.lineTo(5, 50);
  canvas.stroke();
};

const draw3 = (canvas) => {
  canvas.moveTo(50, 5);
  canvas.lineTo(50, 50);
  canvas.stroke();
};

const draw4 = (canvas) => {
  canvas.moveTo(95, 5);
  canvas.lineTo(95, 50);
  canvas.stroke();
};

const draw5 = (canvas) => {
  canvas.moveTo(50, 50);
  canvas.lineTo(5, 50);
  canvas.stroke();
};

const draw6 = (canvas) => {
  canvas.moveTo(50, 50);
  canvas.lineTo(95, 50);
  canvas.stroke();
};

const draw7 = (canvas) => {
  canvas.moveTo(5, 50);
  canvas.lineTo(5, 95);
  canvas.stroke();
};

const draw8 = (canvas) => {
  canvas.moveTo(50, 50);
  canvas.lineTo(50, 95);
  canvas.stroke();
};

const draw9 = (canvas) => {
  canvas.moveTo(95, 50);
  canvas.lineTo(95, 95);
  canvas.stroke();
};

const draw10 = (canvas) => {
  canvas.moveTo(5, 95);
  canvas.lineTo(50, 95);
  canvas.stroke();
};

const draw11 = (canvas) => {
  canvas.moveTo(50, 95);
  canvas.lineTo(95, 95);
  canvas.stroke();
};

const draw_path = (canvas_index, arr) => {
  let canvas = canvases.value[canvas_index];
  canvas.lineWidth = 5;
  for (var ii = 0; ii < arr.length; ii++) {
    switch (arr[ii]) {
      case 0:
        draw0(canvas);
        break;
      case 1:
        draw1(canvas);
        break;
      case 2:
        draw2(canvas);
        break;
      case 3:
        draw3(canvas);
        break;
      case 4:
        draw4(canvas);
        break;
      case 5:
        draw5(canvas);
        break;
      case 6:
        draw6(canvas);
        break;
      case 7:
        draw7(canvas);
        break;
      case 8:
        draw8(canvas);
        break;
      case 9:
        draw9(canvas);
        break;
      case 10:
        draw10(canvas);
        break;
      case 11:
        draw11(canvas);
        break;
    }
  }
};
</script>

<style scoped>
.path_wall {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: rgb(219, 219, 219);
}
.path_card {
  display: inline-block;
  width: 150px;
  border: solid 1px black;
  padding: 5px;
  background-color: white;
}
</style>
