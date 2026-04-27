<template>
  <div>
    <!-- This is a special variation of the pathlang paths page meant to be printed! -->
    <!-- It is being made haphazardly so I can get this done fast for the student showcase tomorrow! -->
    <h1>Every Combination of Line Segments on a 3x3 Grid.</h1>
    <p>
      This page lists every possible combination of different line segments on a
      3x3 grid. Combinations that are identical besides being rotated are
      considered the same, with a "Rotations" label indicating how many unique
      rotations they have. The "Continuous" and "Pokey Continuous" labels
      indicate how many ways a combination can be drawn without 'lifting up your
      pencil.' Go to LukeKnotts.com or scan the below QR code to learn more!
    </p>
    <img src="/images/langs/pathlang/pathlang-qrcode.png" />

    <hr />
    <!-- v-if scale generation has finished. -->
    <div v-if="mounted">
      <p>{{ path_amount }} sets</p>
      <hr />
      <div class="path-gallery">
        <template v-for="(ele, index) in paths" :key="ele.num">
          <div class="path" :style="{ 'flex-basis': ele.width + 'px' }">
            <div class="main-column">
              <div>
                <p>
                  No. {{ ele.num }}, &ensp; Lines: {{ ele.arr.length }} &ensp;
                  #{{ index }}
                </p>
                <hr />
              </div>

              <div>
                <p>Side Array: {{ ele.arr }}</p>
                <hr />
              </div>

              <canvas
                :id="'c' + ele.num"
                :height="canvas_height"
                :width="canvas_width"
                :ref="
                  (el) => {
                    c_refs['c' + ele.num] = el;
                  }
                "
                class="canvas"
              ></canvas>

              <hr />
              <!-- Continuous Stats -->
              <div v-if="ele.cont.num > 0">
                <p>
                  <button @click="toggleSec(ele.cont)">
                    Continuous: {{ ele.cont.num }}
                  </button>
                </p>
                <div v-if="ele.cont.show">
                  <hr />
                  <div class="cont-values">
                    <template v-for="ii in ele.cont.seqs"
                      ><p>{{ ii }}</p></template
                    >
                  </div>
                </div>
              </div>
              <div v-else>
                <p>Continuous: {{ ele.cont.num }}</p>
              </div>

              <!-- Pokey variation of Continuous stats -->
              <div
                v-if="
                  ele.pokeycont.num > 0 &&
                  !usePath().arr_equal(ele.pokeycont.seqs, ele.cont.seqs)
                "
              >
                <hr />
                <p>
                  <button @click="toggleSec(ele.pokeycont)">
                    Pokey Continuous: {{ ele.pokeycont.num }}
                  </button>
                </p>
                <div v-if="ele.pokeycont.show">
                  <hr />
                  <div class="cont-values">
                    <template v-for="ii in ele.pokeycont.seqs"
                      ><p>{{ ii }}</p></template
                    >
                  </div>
                </div>
              </div>
              <div v-else><!-- Nothing! --></div>
              <hr />
              <div v-if="ele.modes.list.length >= 1">
                <button
                  @click="
                    () => {
                      if (toggleSec(ele.modes)) {
                        renderModes(ele.num, ele.modes.list);
                        card_width(true, ele);
                      } else {
                        card_width(false, ele);
                      }
                    }
                  "
                >
                  Rotations: {{ ele.modes.list.length + 1 }}
                </button>
              </div>
              <div v-else>
                <p>Rotations: {{ ele.modes.list.length + 1 }}</p>
              </div>
            </div>
            <div class="rotation-column">
              <div v-if="ele.modes.show" class="rotation-sec">
                <p>Rotations of No.{{ ele.num }}</p>
                <hr />
                <div class="rotations">
                  <template
                    v-for="(rot, mindex) in ele.modes.list"
                    :key="ele.num + 'r' + mindex"
                  >
                    <div class="single-rotation">
                      <!-- Rotation (mode) Canvases -->
                      <canvas
                        :id="'c' + ele.num + 'r' + mindex"
                        :height="canvas_height"
                        :width="canvas_width"
                        :ref="
                          (el) => {
                            c_rot_refs['c' + ele.num + 'r' + mindex] = el;
                          }
                        "
                        class="canvas"
                      ></canvas>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <!-- v-else content is still loading! -->
    <div v-else>
      <h2>...Loading content!</h2>
      <p>
        Don't refresh the page! You may need to wait a moment, but the page will
        update automatically when it is ready. If you refresh this window, the
        loading process will restart. I apologize for this funky in-development
        setup! If this takes for than 2 minutes, something might be broken and I
        would give up waiting.
      </p>
    </div>
  </div>
</template>

<script setup>
// component imports
import Header from "~/components/Header.vue";
import Wipbanner from "~/components/Wipbanner.vue";
import list_scales from "~/composables/scalelist.js";
// vue imports
import { onMounted } from "vue";
// composable imports
import draw_path from "./composables/drawpath";
import usePath from "./composables/pathplay";

// size of path_cards
const path_card_width = ref(200);

// generate all path arrays
const path_data = ref(list_scales(12, true));
const path_amount = ref(path_data.value.size);
const paths = ref([]);
let used_paths = [];
for (let ii = 0; ii < path_amount.value; ii++) {
  let ele = { num: ii, arr: path_data.value.arr[ii] };
  let unique = true;

  for (let jj = 0; jj < used_paths.length; jj++) {
    if (usePath().arr_equal(ele.arr, used_paths[jj])) {
      unique = false;
    }
  }

  if (unique) {
    // organize data and compute stats
    let edges = usePath().edgeNotate(ele.arr);
    ele.edges = usePath().prettyEdges(edges);
    // ele.path = usePath().isConnected(toRaw(ele.arr));

    ele.cont = usePath().continuous(ele.arr);
    // set up display var for each element to toggle continuous stats
    ele.cont.show = false;
    // pokey variant of continuous
    ele.pokeycont = usePath().continuous(ele.arr, true);
    ele.pokeycont.show = false;

    ele.modes = { list: usePath().makeModes(ele.arr), show: false };
    for (let jj = 0; jj < ele.modes.list.length; jj++) {
      used_paths.push(ele.modes.list[jj].arr);
    }

    // how big to make each path card per ele. But dynamic!
    ele.width = path_card_width.value;

    // add ele to paths
    paths.value.push(ele);
    used_paths.push(ele.arr);
  }
}
paths.value = paths.value.sort((a, b) => {
  if (a.cont.num == 0 && b.cont.num == 0) {
    if (a.pokeycont.num != b.pokeycont.num) {
      return b.pokeycont.num - a.pokeycont.num;
    } else {
      return a.modes.list.length - b.modes.list.length;
    }
  } else if (a.cont.num != b.cont.num) {
    return a.cont.num - b.cont.num;
  } else {
    return b.modes.list.length - a.modes.list.length;
  }
});
path_amount.value = paths.value.length;

// canvas dimensions
const canvas_height = ref(100);
const canvas_width = ref(100);

// only load canvas stuff after mounted
const mounted = ref(false);
// store canvas refs.
const c_refs = ref(Array(path_amount.value));

// test to draw rotated canvases
const c_rot_refs = ref(Array(path_amount.value));

onMounted(async () => {
  // once mounted load canvases
  mounted.value = true;

  // wait for list to finish loading
  await c_refs.value["c4095"];

  // draw each 'path'
  let cindex;
  let c;
  let ctx;
  for (var ii = 0; ii < paths.value.length; ii++) {
    cindex = paths.value[ii].num;
    // console.log("Log canvas", "c" + cindex + ":", c_refs.value["c" + cindex]);
    c = c_refs.value["c" + cindex];
    ctx = c.getContext("2d");

    ctx.lineWidth = 5;
    draw_path(ctx, paths.value[ii].arr);
  }
});

const renderModes = async (ele_num, mode_arr) => {
  // wait for v-for to load all modes
  await c_rot_refs.value["c" + ele_num + "r" + (mode_arr.length - 1)];

  // render each mode in the mode_arr
  for (let ii = 0; ii < mode_arr.length; ii++) {
    // console.log("c_rot_refs:", c_rot_refs.value["c" + ele_num + "r" + ii]);

    let c = c_rot_refs.value["c" + ele_num + "r" + ii];
    let ctx = c.getContext("2d");

    draw_path(ctx, mode_arr[ii].arr);
  }
};

//
//
// cosemetic functions
//

const show_info = ref({});
show_info.show = false;

// taken an object with .show prop and toggle it
const toggleSec = (ele) => {
  ele.show = !ele.show;
  return ele.show;
};

const card_width = (grow, ele) => {
  if (grow) {
    ele.width += path_card_width.value;
  } else {
    ele.width -= path_card_width.value;
  }
};
</script>

<style scoped>
img {
  width: 500px;
}

@media print {
  div {
    break-inside: avoid;
  }
}

.hide {
  display: none;
}

.path-gallery {
  background-color: grey;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.path {
  /* flex-basis: v-bind(path_card_width + "px"); */
  align-self: flex-start;
  background-color: white;
  padding: 10px;
  margin: 10px;
  border: solid, black, 1px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.path div {
  max-width: 200px;
}
.path p {
  margin-top: 5px;
  margin-bottom: 5px;
}

.cont-values {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  max-height: 200px;
  overflow-y: scroll;

  font-size: 14px;
  border: solid 2px black;
}

.rotation-sec {
  background-color: white;
  padding: 10px;
  margin: 10px;
  border: solid 1px black;

  align-self: flex-start;
}

.rotations {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.single-rotation {
  margin: 5px;
}

/* Make scrollbars always visible so user can tell if content scrolls */
/* Code taken from https://stackoverflow.com/questions/22907777/make-scrollbar-visible-in-mobile-browsers */
::-webkit-scrollbar {
  -webkit-appearance: none;
}
::-webkit-scrollbar:vertical {
  width: 12px;
}
::-webkit-scrollbar:horizontal {
  height: 12px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: 2px solid #ffffff;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #ffffff;
}

.canvas {
  border: solid, black, 1px;
  width: 200px;
}

/* HTML Table */
table {
  background-color: grey;
  border-radius: 5px;
}
thead tr td {
  background-color: lightgrey;
}
td {
  background-color: white;
}
th,
td {
  padding: 5px;
  border-radius: 2px;
}
</style>
