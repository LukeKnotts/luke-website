<script setup>
import Layout from "~/pages/langs/slabbic/components/Layout.vue";
import Letter from "~/pages/langs/slabbic/components/Letter.vue";
import word_data from "~/pages/langs/slabbic/data/dictionary.json";

// data formatting and visualizing
const inflection_symbols = ref({ "M-noun": "m", "J-noun": "j", "H-noun": "h" });
</script>

<template>
  <div>
    <Layout>
      <h1>Dictionary</h1>
      <p>The words in Slabbic.</p>
      <p>
        English translations with that include an asterisk (*) require
        additional context to understand their useage.
      </p>
      <hr />
      <div class="dictionary">
        <template v-for="word in word_data">
          <div class="dictionary-word">
            <p>
              <Letter :roman="word.word" />
              &emsp;|&emsp; {{ word.word }}
            </p>
            <hr />
            <p>
              <span class="underline">Word Type:</span>&emsp;{{ word.type }}
            </p>
            <p v-if="word.inflection">
              <span class="underline">Inflection Type:</span>&emsp;
              <span
                v-if="Object.keys(inflection_symbols).includes(word.inflection)"
                >(<Letter :roman="inflection_symbols[word.inflection]" />)</span
              >
              {{ word.inflection }}
            </p>
            <p v-if="word.english">
              <span class="underline">English:</span> &emsp;{{ word.english }}
            </p>
            <p v-if="word.useage">
              <span class="underline">Useage:</span> &emsp;{{ word.useage }}
            </p>
            <p v-if="word.note">{{ word.note }}</p>
          </div>
        </template>
      </div>
    </Layout>
  </div>
</template>

<style scoped>
.dictionary {
  display: flex;
  flex-wrap: wrap;
}
.dictionary-word {
  display: inline-block;
  width: 300px;

  border: solid 1px black;
  padding: 10px;
  margin: 5px;
}
</style>
