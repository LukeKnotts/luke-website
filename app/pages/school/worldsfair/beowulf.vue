<template>
  <div class="everything">
    <StoryHeader />
    <h1>Beowulf</h1>
    <img src="/images/school/worldsfair/Beowulf.png" />
    <p>
      Beowulf is an ancient Anglo-Saxon story that was originally told orally,
      perhaps as a way to pass the time during travels. The story teaches
      historians about Anglo-Saxon history from the seventh and eighth
      centuries, and as a "hero epic," it's elements have permeated English
      culture.
    </p>
    <p>
      You, the reader, will be placed in the heroic Beowulf's shoes and be
      tasked with trying to follow in his footsteps.
    </p>
    <p><a href="/school/worldsfair/beowulf-start">Continue.</a></p>

    <WFFooter />
  </div>
</template>

<script setup>
import WFFooter from "./components/WFFooter.vue";
import StoryHeader from "./components/StoryHeader.vue";

// The language needs to be set to 'English' in order for the "hyphens" CSS property to split words into multiple lines. The text looks better that way.
useHead({
  htmlAttrs: { lang: "en" },
});
</script>

<style scoped>
@import "./main.css";
</style>
