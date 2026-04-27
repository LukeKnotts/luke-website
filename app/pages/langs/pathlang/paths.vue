<template>
  <div>
    <Header
      :array="[
        { link: '/langs', name: 'Langs' },
        { link: '/langs/pathlang', name: 'Pathlang' },
      ]"
    />
    <Wipbanner />
    <p>**this is a work of fiction.</p>
    <h1>Every Combination of Line Segments on a 3x3 Grid.</h1>
    <p>
      This page lists every possible combination of different line segments on a
      3x3 grid. Cool! Click the button below to learn the lore!
    </p>
    <button @click="toggleSec(show_info)">
      {{ show_info.show ? "Hide" : "Show" }} Exposition
    </button>
    <div v-if="show_info.show">
      <hr />
      <h2>Intro</h2>
      <p>
        There was a 3x3 grid. I sat and wondered how many symbols could be drawn
        by connecting the grid dots, without even diagnols. The number of
        possible combinations is large, 4096 by my count. This makes sense,
        because every possible line segment can be "turned on" or "turned off"
        in a given symbol, meaning that the amount of possible symbols is equal
        to the number of binary numbers with as many digits as possible line
        segments. In this case there are 12 possible lines, and 2^12 = 4096.
      </p>
      <h2>Labels</h2>
      <p>
        I have done similar studies on the
        <a href="/musthy">music theory</a> side of this website, and I realized
        that just as possible musical scales can be written as arrays of which
        notes they include, the possible symbols on 3x3 grids can be written as
        arrays of the line segments they contain. This is a nice system, and
        using it here allows every musical scale to have an analogous grid
        symbol, which is kind of fun! I have sense realized that other
        programmers may have written the line segments as
        <i>arrays of vertices</i>, rather than as arbitrary numbers, so I have
        also labeled the grid's vertices and provided this alternative notation
        too (though I have kept with my original method for the most part). The
        below image shows how parts of a grid symbol are labeled.
      </p>
      <img src="/images/langs/pathlang/labels.png" />
      <p>
        I ordered every grid symbol according their line segment arrays, and
        assigned them numbers accordingly. I think this method could be
        considered a form of lexicographical ordering, because a set like
        [0,1,2] comes before [0,1,3] and [1,2,4]. It is worth noting that all
        grid symbols with 3 lines come before any grid symbols with 4 lines, and
        all 4-liners come before any 5-liners (and so on). I am not sure if that
        is standard in the fields of math that study these kinds of patterns,
        but I think it makes sense. Unfortunately, I do not yet know how to
        reverse engineer one of these numeric labels from a given array. Such
        will be a future project, I suppose.
      </p>
      <h2>Adjacent Line Segments</h2>
      <p>
        In order to study the visually apparent properties of different grid
        symbols, figuring out which line segements are connected to which other
        line segments is necessary. Below is a 'table' that shows numerically
        which line segments are adjacent to each other.
      </p>
      <table>
        <thead>
          <tr>
            <td>Line Segment</td>
            <td>(vertices)</td>
            <td>Adjacent Lines</td>
            <td>(vertices)</td>
          </tr>
        </thead>
        <tbody>
          <template v-for="ii in 12">
            <tr>
              <td>{{ ii - 1 }}</td>
              <td>
                {{
                  usePath().prettyEdges(
                    usePath().edgeNotate(usePath().new_arr(ii - 1)),
                  )
                }}
              </td>
              <td>
                {{ usePath().adj(ii - 1) }}
              </td>
              <td>
                {{
                  usePath().prettyEdges(
                    usePath().edgeNotate(usePath().adj(ii - 1)),
                  )
                }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <p>
        One downside to writing in terms of line segments is that without
        considering vertices, there is no recognition of which side of a line
        segment one is on. In retrospect, I should have probably used
        coordinates like (0,0) and (0,1) to make the calculations less
        arbitrary. This downside of line segment notations like [0,1,2,4] came
        up when making the 'continuous' metrics.
      </p>

      <h2>'Continuous' Metric</h2>
      <p>
        If we imagine each grid symbol is a 'path' that could be walked on, it
        is clear that for certain grid symbols somebody could move between
        adjacent line segments and eventually travel to every part of a grid
        symbol without having to backtrack or 'jump' and skip over an adjacent
        line segment. Such grid symbols are labeled with a "continuous" metric
        above zero. This property can be thought of like continuous contour line
        drawings from art, drawings that are made without lifting up one's pen
        from the beginning to the end.
      </p>
      <p>
        For grid symbols that have a degree of continuousness, the number shown
        indicates how many possible ways there are to drawn that grid symbol
        continuously. For a simple two-segment line, the continous metric is 2,
        because that line can be drawn starting from either end. For more
        complex symbols that intersect themselves, things get a little more
        complicated. The one quirk here is that grid symbols with only one line
        segment have a continuousness of 1. This is because my code looks
        through each grid symbol in terms of its line segments, not its
        vertices, so there is no individual 'side' of a single line segment.
      </p>
      <p>
        Currently on mobile, the display for continuous or pokey continuous
        routes does not show a scrollbar so it is not obvious that you can
        scroll through all possible routes. My apologies, I would like to figure
        out how to fix this in the future!
      </p>
      <h2>Pokey Continuousness</h2>
      <p>
        As mentioned above, computing grid symbols as arrays of line segments
        rather than as arrays of vertice pairs means that without extra
        consideration, there is no difference between opposite sides of a given
        line segment. When I was programming the continuous metric, I mistakenly
        did not account for this, and found that grid symbols were considered
        continuous even if segments "poked" out. When the adjacent line segments
        from a given line were being calculated, there was no consideration
        about which direction the line segment had come from. While it makes
        sense to consider how line segments can connect by simply looking though
        all of their adjacent lines, this does not make sense visually because I
        imagine traveling across the line segments from vertice to vertice, not
        from line segment to line segment. If I traveled to one end of a line
        segment, I shouldn't be able to 'backtrack' and go to a line segment
        adjacent to the vertice I just crossed.
      </p>
      <p>
        To account for this, the continuous metric only allows for adjacent line
        segments that are not adjacent to the previous line segment in the
        'route'. Because the previous line segment in a given 'route' across a
        grid symbol shares the vertice that is mistakenly being reused, removing
        all previously adjacent lines from the current line segment's adjacent
        lines fixes the unintuitive problem.
      </p>
      <p>
        However, there is nothing technically wrong about including the "pokey"
        variation of continuousness. In fact, from a line segment perspective,
        it makes perfect sense. So this alternative "pokey continuous" metric
        has also been recorded. In places where the "pokey continous" metric
        ends up being the same as the continuous metric (meaning there were no
        opportunities for disagreement in the two adjacent calculations), the
        pokey continuous metric is simply left out and implied to be the same.
        In places where it is unique from the continous metric, it is shown.
      </p>
      <!-- Repeate button so people can close Exposition from bottom. Right now this is duplicate code, so be careful! -->
      <button @click="toggleSec(show_info)">
        {{ show_info.show ? "Hide" : "Show" }} Exposition
      </button>
    </div>

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
              <div>
                <p>Vertice edges: {{ ele.edges }}</p>
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
  width: 250px;
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
