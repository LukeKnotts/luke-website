<script setup>
import Layout from "~/pages/langs/slabbic/components/Layout.vue";
import Letter from "~/pages/langs/slabbic/components/Letter.vue";
import word_data from "~/pages/langs/slabbic/data/dictionary.json";

useHead({
  title: "Slabbic - Dictionary",
});

// data formatting and visualizing
const inflection_symbols = ref({ "M-noun": "m", "J-noun": "j", "H-noun": "h" });

// Color words based on word type
const type_color = (type) => {
  if (type == "Verb Affix" || type == "Multi Affix" || type == "Affix Affix") {
    // pink red
    return "#d45965";
  } else if (type == "Noun Affix") {
    // magenta
    return "#cc528c";
  } else if (type == "Noun" || type == "Noun (Compound)") {
    // blue
    return "#607ebd";
  } else if (type == "Verb") {
    // green
    return "#64b364";
  } else if (type == "Grammatical") {
    // gray
    return "#6e6e6e";
  }
};
</script>

<template>
  <div>
    <Layout>
      <h1>Dictionary</h1>
      <p>The words in <a href="/langs/slabbic">Slabbic</a>.</p>
      <!-- One is subtracted from the word_data.length to ignore the comment at the top of the .json file! -->
      <p>
        English translations are sometimes approximate. Words providing a
        "useage" field offer more explanation on their useage. There are
        currently {{ word_data.length - 1 }} registered words and affixes in
        Slabbic.
      </p>
      <p>
        The words are sorted lexicographically per the
        <a href="./alphabet">alphabet</a> page:
        <Letter roman="abcdefghijklmnopqrstuvwxyz1234" class="islab" />.
      </p>
      <hr />
      <div class="dictionary">
        <template v-for="word in word_data">
          <div class="dictionary-word" v-if="word.__comment__ != true">
            <div
              class="word-header-block"
              :style="'background-color: ' + type_color(word.type) + ';'"
            >
              <p class="times-font word-header-text">
                <span v-if="word.inflection == 'Suffix'">~ </span
                ><Letter :roman="word.word" /><span
                  v-if="word.inflection == 'Prefix'"
                >
                  ~</span
                >
                &emsp;|&emsp;
                <span v-if="word.inflection == 'Suffix'">&ndash;</span
                >{{ word.word
                }}<span v-if="word.inflection == 'Prefix'">&ndash;</span
                >&emsp;<span class="word-stem" v-if="word.stem">{{
                  word.stem
                }}</span>
              </p>
            </div>
            <div class="word-content">
              <p>
                <span
                  class="thick-underline"
                  :style="
                    'text-decoration-color: ' + type_color(word.type) + ';'
                  "
                  >Word Type:</span
                >&emsp;{{ word.type }}
              </p>
              <p v-if="word.inflection">
                <span class="underline">Inflection Type:</span>&emsp;
                <span
                  v-if="
                    Object.keys(inflection_symbols).includes(word.inflection)
                  "
                  >(<Letter
                    :roman="inflection_symbols[word.inflection]"
                  />)</span
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
              <div v-if="word.useage">
                <p class="useage-text">
                  <span class="underline">Useage:</span> &emsp;
                </p>
                <p class="useage-text">{{ word.useage }}</p>
              </div>
              <p v-if="word.roots">
                <span class="underline">Etymology:</span>&nbsp;
                <template v-for="(root, index) in word.roots">
                  <span v-if="index != 0"> + </span><i>{{ root }}</i>
                </template>
              </p>
            </div>
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
  margin: 3px;
}
.word-stem {
  color: rgb(105, 105, 105);
  font-size: 80%;
  white-space: nowrap;
}
.word-stem::before {
  content: "( ";
}
.word-stem::after {
  content: " )";
}

.word-header-text {
  background-color: white;
  margin: 8px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid black;
}
.word-header-block {
  padding: 5px;
  border-bottom: 1px solid black;
}
.word-content {
  margin: 10px;
}

.useage-text {
  text-align: left;
  text-justify: none;
  display: inline;
}

.thick-underline {
  text-decoration: underline;
  text-decoration-thickness: 2.5px;
}
</style>
