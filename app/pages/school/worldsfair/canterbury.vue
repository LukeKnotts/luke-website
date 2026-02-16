<template>
  <div class="everything">
    <StoryHeader />
    <h1>The Canterbury Tales</h1>
    <img src="/images/school/worldsfair/Canterbury.png" />
    <p>
      The Canterbury Tales is a Middle English writing by Geoffrey Chaucer,
      written at the end of the 1400s. The story consists of pilgrims making the
      journey to Canterbury, each telling a story during their travels. Chaucer
      never finished this tale, but it contains commentary of the medieval
      society Chaucer lived in. Because this story was made before the printing
      press, it has survived through handwritten copies.
    </p>
    <p>
      You, the reader, will play a character from the Pardoner's Tale, one of
      the stories in The Canterbury Tales. The Pardoner's tale is told by the
      Pardoner, a religious working trying to make a profit.
    </p>
    <p><a href="/school/worldsfair/canterbury-start">Continue.</a></p>
    <WFFooter />
  </div>
</template>

<script setup>
import WFFooter from "./components/WFFooter.vue";
import StoryHeader from "./components/StoryHeader.vue";
</script>

<style scoped>
@import "./main.css";
</style>
