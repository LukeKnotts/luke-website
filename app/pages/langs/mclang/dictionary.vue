<script setup>
import Layout from "~/pages/langs/mclang/components/Layout.vue";
import Letter from "~/pages/langs/mclang/components/Letter.vue";
import word_data from "~/pages/langs/mclang/data/dictionary.json" with { type: "json" };
</script>

<template>
  <div>
    <Layout>
      <h1>Dictionary</h1>
      <p>The words in Slabbic.</p>
      <p>---</p>
      <div class="ditionary">
        <template v-for="word in word_data">
          <div class="dictionary_word">
            <p>
              <template v-for="letter in word.word">
                <Letter :letter="letter" />
              </template>
              &emsp;|&emsp; {{ word.word }}
            </p>
            <hr />
            <p>
              <span class="underline">Word Type:</span> &emsp;{{ word.type }}
            </p>
            <p v-if="word.conjugation_type">
              <span class="underline">Conjugation Type:</span> &emsp;{{
                word.conjugation_type
              }}
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
