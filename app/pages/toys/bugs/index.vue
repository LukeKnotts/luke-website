<script setup>
// imports
import { useAnimations, bugs } from "./composables/bugs.js";
import Bug from "./components/Bug.vue";
const { runAnimations } = useAnimations();

let bugList = bugs;

// shuffle function for list of bugs, take from Google ai, Gemini
function ShuffleArray(array) {
  // (Insert the Fisher-Yates implementation here)
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

bugList = ShuffleArray(bugList);

// run all animations
onMounted(() => {
  runAnimations();
});

// Header import
import Header from "/components/Header.vue";
import AIwarn from "/components/AIwarn.vue";
</script>

<template>
  <div class="everything">
    <Header :array="[{ link: '/toys', name: 'Toys' }]" />
    <AIwarn
      :array="[
        'I did not document my AI useage enough to remember what was used where on this page. I think it was just a little bit of help exporting functions between files.',
      ]"
    />
    <!----------------Title Heading------------------>
    <div>
      <h1>Luke's Hall of Bugs &nbsp; {{ bugOne }}</h1>
    </div>
    <Bug
      class="bug_display"
      v-for="bug in bugList"
      :key="bug.id"
      v-bind="bug"
    />
  </div>
</template>

<style scoped>
/* Generic Styles */

.everything {
  background-color: white;

  padding: 20px;
  margin-left: auto;
  margin-right: auto;

  width: 90%;
  max-width: 1000px;
}

div {
  margin: none;
  padding: none;

  width: 100%;
}

h1 {
  color: black;

  font-family: "Times New Roman", Times, serif;

  font-size: 28px;
}

p {
  color: black;

  font-family: "Times New Roman", Times, serif;

  font-size: 16px;

  width: 100%;
}
</style>
