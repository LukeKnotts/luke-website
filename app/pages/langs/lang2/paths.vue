<template>
  <div>
    <Header :array="[{ link: '/langs', name: 'Langs' }]" />
    <Wipbanner />
    <h1>Paths (new)</h1>
    <p>Hello. here will be the paths.</p>
    <hr />
    <!-- v-if scale generation has finished. -->
    <div v-if="ready">
      <p>{{ path_amount }} sets</p>
      <hr />
      <template v-for="(ele, index) in paths" :key="index">
        <p>{{ index }}: {{ ele }}</p>
        <canvas
          :id="'c' + index"
          :height="canvas_height"
          :width="canvas_width"
          :ref="
            (el) => {
              c_refs['c' + index] = el;
              // console.log(c_refs['c' + index]);
            }
          "
          class="canvas"
        ></canvas>
      </template>
    </div>
    <!-- v-else content is still loading! -->
    <div v-else>
      <h2>...Loading content!</h2>
      <p>
        Don't refresh the page! You may need to wait a moment, but the page will
        update automatically when it is ready. If you refresh this window, the
        loading process will restart. I apologize for this funky in-development
        setup! But seriously, if this takes for than 2 minutes, something might
        be broken and I would give up waiting.
      </p>
    </div>
  </div>
</template>

<script setup>
// component imports
import Header from "~/components/Header.vue";
import Wipbanner from "~/components/wipbanner.vue";
import list_scales from "~/composables/scalelist.js";
// vue imports
import { onMounted, toRaw } from "vue";
// composable imports
import draw_path from "./composables/drawpath";

// generate all path arrays
const path_data = ref(list_scales(12, true));
const paths = ref(path_data.value.arr);
const path_amount = ref(path_data.value.size);

// canvas dimensions
const canvas_height = ref(100);
const canvas_width = ref(100);

// only load canvas stuff after mounted
const ready = ref(false);
// store canvas refs.
const c_refs = ref({});

onMounted(async () => {
  // once mounted load canvases
  ready.value = true;
  // wait for list to finish loading
  await c_refs["c4095"];

  // draw each 'path'
  let c;
  let ctx;
  for (var ii = 0; ii < paths.value.length; ii++) {
    // console.log("Log canvas", "c" + ii + ":", c_refs.value["c" + ii]);
    c = document.getElementById("c" + ii);
    ctx = c.getContext("2d");
    draw_path(ctx, toRaw(paths.value[ii]));
  }
});
</script>

<style scoped>
.canvas {
  border: solid, black, 1px;
}
</style>
