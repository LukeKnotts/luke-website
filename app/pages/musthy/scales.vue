<template>
  <div>
    <Header :array="[{ link: '/musthy', name: 'Music Theory' }]" />
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
          console.log(generation_state);
        }
      "
      id="transpose"
    >
      Calculate Scales!
    </button>
    <p>Generated {{ scale_amount }} scales.</p>
    <hr />
    <div v-if="generation_state == done">
      <template v-for="ele in scale_list">
        <p>{{ ele }}</p>
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
import { list_scales } from "./js/scalelist";

const max_edo = ref(22);
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
  console.log(scale_list);
};
</script>

<style scoped>
.user-options {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
