<template>
  <div>
    <Header :array="[{ link: '/langs', name: 'Langs' }]" />
    <Wipbanner />
    <h1>Paths (new)</h1>
    <p>Hello. here will be the paths.</p>
    <hr />
    <!-- v-if scale generation has finished. -->
    <div v-if="path_data">
      <p>{{ path_amount }} sets</p>
      <template v-for="(ele, index) in paths" :key="index" ref="myPaths">
        <p>{{ index }}: {{ ele }}</p>
        <canvas
          :id="index"
          :height="canvas_height"
          :width="canvas_width"
        ></canvas>
      </template>
    </div>
    <!-- v-else content is still loading! -->
    <div v-else>
      <p>
        Content is still loading. You may need to wait a moment, but the page
        will update automatically when it is ready. If you refresh this window,
        the loading process will restart. I apologize for this funky
        in-development setup! But seriously, if this takes for than 2 minutes,
        something might be broken and I would give up waiting.
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
import { onMounted } from "vue";
// composable imports
import draw_path from "./composables/drawpath";

// generate all path arrays
const path_data = ref(list_scales(12, true));
const paths = ref(path_data.value.arr);
const path_amount = ref(path_data.value.size);

// canvas dimensions
const canvas_height = ref(100);
const canvas_width = ref(100);

onMounted(() => {
  let c;
  let ctx;
  for (var ii in paths.value) {
    // c = document.getElementById(// idk //);
    // ctx = c.getContext("2d");
    // draw_path(ctx, toRaw(paths.value[ii]));
  }
});
</script>
