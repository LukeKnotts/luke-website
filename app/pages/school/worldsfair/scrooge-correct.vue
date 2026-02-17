<template>
  <div class="everything">
    <StoryHeader />
    <h1>Correct!</h1>
    <p>
      You are correct! Scrooge sees he has to go along with these super natural
      entities. He is afraid, but he recognizes that they aren't there to hurt
      him, so he wants to get things over with.
    </p>
    <Quote
      quote='"Spriti," said Scrooge submissively, "conduct me where you will. I went forth last night on compulsion, and I learnt a lesson which is working now. To-night, if you have aught to teach me, let me profit by it."'
      citation="Dickens, pg.48"
    />
    <p>A part of Scrooge also sees that he needs to change.</p>
    <p><a href="/school/worldsfair/scrooge-end">Continue.</a></p>
    <WFFooter />
  </div>
</template>

<script setup>
import StoryHeader from "./components/StoryHeader.vue";
import WFFooter from "./components/WFFooter.vue";
import Quote from "./components/Quote.vue";

// The language needs to be set to 'English' in order for the "hyphens" CSS property to split words into multiple lines. The text looks better that way.
useHead({
  htmlAttrs: { lang: "en" },
});
</script>

<style scoped>
@import "./main.css";
</style>
