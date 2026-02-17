<template>
  <div class="everything">
    <StoryHeader />
    <h1>Caroling</h1>
    <p>
      So Scrooge goes on to experience the visions of the second ghost. Charles
      Dickens' A Christmas Carol is an interesting blend of the political
      commentary, holiday and ghost story genres, and it has led to countless
      adaptions that are still released today.
    </p>
    <p>
      If you are curious to read the version I used (and cited from), check out
      <a href="https://www.ibiblio.org/ebooks/Dickens/Carol/Dickens_Carol.pdf"
        >this link</a
      >, of a free PDF of the book.
    </p>
    <p>
      Otherwise, if you want to see the other stories, you can return to the
      <a href="/school/worldsfair">title page</a>. And if you enjoyed this
      project, make sure to peruse some of the other projects as well!
    </p>
    <p><a href="/school/worldsfair">Back to title page.</a></p>
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
