<template>
  <div>
    <Header :array="[{ link: '/musthy', name: 'Music Theory' }]" />
    <Wipbanner />
    <h1>Musical Scale Calculator</h1>
    <p>
      Calculate the pc sets of every music scale in an equal temperment of your
      choice! Right now, things don't really work for the bigger scales. Sorry,
      but it will break D:
    </p>
    <div class="user-options">
      <div>
        <label for="edo">Notes per octave: </label>
        <select
          v-model="edo"
          @change="
            () => {
              generation_state = clickTo;
            }
          "
          name="edo"
          id="edo"
        >
          <template v-for="(ele, index) in max_edo + 1">
            <option :value="index">{{ index }}</option>
          </template>
        </select>
      </div>
      <div>
        <label for="transpose">Include transpositions: </label>
        <input v-model="include_transpositions" type="checkbox" />
      </div>
    </div>
    <button
      @click="
        () => {
          generation_state = generating;
          // console.log(generation_state);
        }
      "
      id="transpose"
    >
      Calculate Scales!
    </button>
    <p>Generated {{ scale_amount }} scales.</p>
    <hr />
    <div v-if="generation_state == done" class="scales">
      <template v-for="ele in scale_list">
        <p>{{ ele }}</p>
        <button
          @click="
            () => {
              playScale(ele);
            }
          "
        >
          Play
        </button>
        <button
          @click="
            () => {
              playScale(ele, true);
            }
          "
        >
          Chord
        </button>
        <br />
      </template>
    </div>
    <div v-else>
      <p>{{ generation_state }}</p>
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";
import Header from "/components/Header.vue";
import Wipbanner from "/components/Wipbanner.vue";
import useSimpleTone from "/composables/simpleTones.js";
import list_scales from "/composables/scalelist.js";

// max_edo is dependent on how large things can be before website breaks D:
const max_edo = ref(17);
const edo = ref(12);

const include_transpositions = ref(false);

// display messages
const generating = ref("Generating...");
const clickTo = ref("Click to generate!");
const done = "Done!";
const generation_state = ref(clickTo.value);

// init scale list
const scale_list = ref([]);
const scale_amount = ref(0);

watch(generation_state, async () => {
  if (generation_state.value == generating.value) {
    generateScales();
    generation_state.value = done;
  }
});

const generateScales = () => {
  const scales = list_scales(edo.value, include_transpositions.value);
  scale_list.value = scales.arr;
  scale_amount.value = scales.size;
  // console.log(scale_list);
};

const playScale = async (scale, isChord = false) => {
  const tonic = 261.63;

  const freq = (ele) => {
    if (ele == 0) {
      return tonic;
    } else {
      return (
        Math.round(
          (Math.pow(2, ele / edo.value) * tonic + Number.EPSILON) * 100,
        ) / 100
      );
    }
  };

  // stolen from below link to wait for an amount of time (to play arpeggio style).
  // https://stackoverflow.com/questions/64387549/wait-for-settimeout-to-complete-then-proceed-to-execute-rest-of-the-code
  function wait(seconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, seconds * 1000);
    });
  }

  for (let ii = 0; ii < scale.length; ii++) {
    useSimpleTone().playTone(freq(scale[ii]));
    if (!isChord) {
      await wait(0.5);
    }
  }
};
</script>

<style scoped>
.user-options {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.scales {
  display: grid;
  flex-direction: row;
  justify-content: center;
}
.scales * {
  text-align: center;
}
.scales button {
  width: 200px;
  justify-content: center;
}
</style>
