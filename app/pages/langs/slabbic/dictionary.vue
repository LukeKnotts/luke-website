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
      <p>The words in <a href="/langs/slabbic">Slabbic</a>.</p>
      <p>
        English translations are sometimes approximate. Words providing a
        "useage" field offer more explanation on their useage.
      </p>
      <hr />
      <div class="dictionary">
        <template v-for="word in word_data">
          <div class="dictionary-word">
            <p>
              <span v-if="word.inflection == 'Suffix'">~ </span
              ><Letter :roman="word.word" /><span
                v-if="word.inflection == 'Prefix'"
              >
                ~</span
              >
              &emsp;|&emsp;
              <span v-if="word.inflection == 'Suffix'">&ndash;</span
              >{{ word.word
              }}<span v-if="word.inflection == 'Prefix'">&ndash;</span>
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
              <span class="underline">English:</span>
              <span v-for="(translation, index) in word.english"
                ><span v-if="index > 0" class="highlight">&nbsp;;&nbsp;</span
                ><span v-else>&nbsp;&nbsp;</span>{{ translation }}</span
              >
            </p>
            <p v-if="word.useage">
              <span class="underline">Useage:</span> &emsp;{{ word.useage }}
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
