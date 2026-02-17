<template>
  <div class="everything">
    <StoryHeader />
    <h1>Incorrect!</h1>
    <p>
      It might be admirable to abstain from killing your friend, but this is not
      what the fools did! The two decided to take out their friend to split the
      money only two ways, but things did not go as planned.
    </p>
    <p>
      This is a warning tale of vices, not an example. If you want to know how
      things turn out for the remaing two, consider trying the
      <a href="/school/worldsfair/canterbury-start">other option</a>.
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
