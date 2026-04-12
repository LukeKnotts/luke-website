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
        <label>Notes per octave: </label>
        <select v-model="edo" name="edo" , id="edo">
          <template v-for="(ele, index) in max_edo + 1">
            <option :value="index">{{ index }}</option>
          </template>
        </select>
      </div>
      <div>
        <label>Include transpositions: </label>
        <input v-model="include_transpositions" type="checkbox" />
      </div>
    </div>
    <button @click="generateScales()">Calculate Scales!</button>
    <hr />
    <div v-if="done_generating">
      <template v-for="ele in scale_list">
        <p>{{ ele }}</p>
      </template>
    </div>
    <div v-else>
      <p>
        {{ generating_scales ? "Generating..." : "Click to generate scales!" }}
      </p>
    </div>
  </div>
</template>

<script setup>
import Header from "/components/Header.vue";
import { list_scales } from "./js/scalelist";

const max_edo = ref(22);
const edo = ref(12);

const include_transpositions = ref(false);

const generating_scales = ref(false);
const done_generating = ref(false);

const scale_list = ref([]);

const generateScales = () => {
  generating_scales.value = true;

  scale_list.value = list_scales(edo.value, include_transpositions.value);
  done_generating.value = true;
  generating_scales.value = false;
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
