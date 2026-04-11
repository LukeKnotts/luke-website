<template>
  <div>
    <Header :array="[{ link: '/musthy', name: 'Music Theory' }]" />
    <h1>Musical Scale Calculator</h1>
    <p>
      Calculate the pc sets of every music scale in an equal temperment of your
      choice!
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
  </div>
</template>

<script setup>
import Header from "/components/Header.vue";
import { list_scales } from "./js/scalelist";

const max_edo = ref(22);
const edo = ref(12);

const include_transpositions = ref(false);

const generateScales = () => {
  const scale_list = list_scales(edo.value, include_transpositions.value);
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
