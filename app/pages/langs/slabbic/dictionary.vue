<script setup>
import Layout from "~/pages/langs/slabbic/components/Layout.vue";
import Letter from "~/pages/langs/slabbic/components/Letter.vue";
import word_data from "~/pages/langs/slabbic/data/dictionary.json" with { type: "json" };

// data formatting and visualizing
const conjTypeSymbol = (conjType) => {
  switch (conjType) {
    case "M-noun":
      return "m";
    case "J-noun":
      return "j";
    case "H-noun":
      return "h";
    case "Standard Verb":
      return "!";
    default:
      return "?";
  }
};
</script>

<template>
  <div>
    <Layout>
      <h1>Dictionary</h1>
      <p>The words in Slabbic.</p>
      <hr />
      <div class="ditionary">
        <template v-for="word in word_data">
          <div class="dictionary_word">
            <p>
              <Letter :roman="word.word" />
              &emsp;|&emsp; {{ word.word }}
            </p>
            <hr />
            <p>
              <span class="underline">Word Type:</span> &emsp;{{ word.type }}
            </p>
            <p v-if="word.conjugation_type">
              <span class="underline">Conjugation Type:</span> &emsp;<Letter
                :roman="conjTypeSymbol(word.conjugation_type)"
              />
              {{ word.conjugation_type }}
            </p>
            <p>
              <span class="underline">English:</span> &emsp;{{ word.english }}
            </p>
          </div>
        </template>
      </div>
    </Layout>
  </div>
</template>

<style scoped>
.dictionary {
  display: flex;
  flex-direction: column;
}
.dictionary_word {
  border: solid 1px black;
  padding: 10px;
  margin: 5px;
}
</style>
