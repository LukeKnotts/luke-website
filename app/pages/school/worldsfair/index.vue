<template>
  <div class="everything">
    <h1>British Literature at the World's Fair!</h1>
    <p class="subtitle">An Interactive Experience</p>
    <br />
    <p>
      Welcome to this virtual exploration of British literature, ranging from Old English to the Industrial Revolution. Below you will have the option to explore up to three stories. For each story, you will be taken into the story, and you will walk through a circumstance in the shoes of the characters that illustrates themes important to British literature.
    </p>
    <a href="" class="beowulf">Beowulf</a>
    <a href="/" class="canterbury">The Canterbury Tales</a>
    <a href="/" class="scrooge">A Christmas Carol</a>
    <hr />
  </div>
</template>

<script setup>
// The language needs to be set to 'English' in order for the "hyphens" CSS property to split words into multiple lines. The text looks better that way.
useHead({
  htmlAttrs: { lang: "en" },
});
</script>

<style scoped>
@import './main.css';
</style>
