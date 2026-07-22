<script setup>
import FlashCard from "./components/FlashCard.vue";
import { mycards } from "./composables/cards.js";
import Header from "/components/Header.vue";

// shuffle function for list of bugs, take from Google ai, Gemini
function ShuffleArray(array) {
  // (Insert the Fisher-Yates implementation here)
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let cardList = ref(mycards);

let cardAmount = cardList.value.length;

function shuffleCards() {
  cardList.value = ShuffleArray(cardList.value);
}

// ------------------------------------------------------------------------------------------
// AI DANGER ZONE. Thanks Gemini.
// ------------------------------------------------------------------------------------------

import { onMounted, ref } from "vue"; // <-- Import onMounted and ref

// ---------------------------------------------
// MATHJAX INTEGRATION LOGIC
// ---------------------------------------------

// 1. Create a ref to hold the root element of your component
const cardContainer = ref(null);

// 2. Define the MathJax CDN URL
const mathJaxUrl =
  "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";

// 3. Define the function to load MathJax
const loadMathJax = () => {
  // Check if MathJax is already loaded
  if (window.MathJax) {
    // If loaded, just trigger the rendering function
    window.MathJax.typeset();
  } else {
    // Create a script tag to load the library
    const script = document.createElement("script");
    script.src = mathJaxUrl;
    script.async = true;
    // When the script loads, it will automatically process the page
    document.head.appendChild(script);
  }
};

// 4. Call the function after the component is fully mounted
onMounted(() => {
  loadMathJax();
});
</script>

<template>
  <div class="everything">
    <Header :array="[{ link: '/toys', name: 'Toys' }]" />
    <p>
      Luke's PreCalc flash cards. Check out the other stuff at
      <a href="/">lukeknotts.com</a>: [Fake link]. See a mistake? Email me at
      "flukes dot targets0j at icloud dot com"
    </p>
    <p>
      Currently I think there's a bug if you move between web pages on my site,
      but refreshing seems to fix it. Currently there are
      {{ cardAmount }} cards. If you want to reorder the list again, just
      refresh the page.
    </p>
    <hr />
    <button @click="shuffleCards">Shuffle cards</button>
    <FlashCard v-for="card in cardList" :key="card.id" v-bind="card" />
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

h2 {
  text-decoration: underline;

  font-size: 22px;

  color: rgb(107, 107, 164);
}

p,
tr,
th {
  color: black;

  font-family: "Times New Roman", Times, serif;

  font-size: 20px;

  margin-left: auto;
  margin-right: auto;

  padding: 5px;
  padding-right: 40px;

  border-right: 2px;
  border-color: black;
}
</style>
