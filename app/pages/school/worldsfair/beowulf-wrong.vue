<template>
  <div class="everything">
    <StoryHeader />
    <h1>Incorrect!</h1>
    <p>
      Actually, this is incorrect. In Anglo-Saxon culture, a person's honor was
      very important. Beowulf is the hero of an epic, and he is meant to show
      off everything powerful and grand.
    </p>
    <p>
      If you want to know how it happened in Beowulf, you can
      <a href="/school/worldsfair/beowulf-start">try again</a>.
    </p>
    <WFFooter />
  </div>
</template>

<script setup>
import StoryHeader from "./components/StoryHeader.vue";
import WFFooter from "./components/WFFooter.vue";

// The language needs to be set to 'English' in order for the "hyphens" CSS property to split words into multiple lines. The text looks better that way.
useHead({
  htmlAttrs: { lang: "en" },
});
</script>

<style scoped>
@import "./main.css";
</style>
