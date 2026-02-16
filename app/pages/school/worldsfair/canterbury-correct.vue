<template>
  <div class="everything">
    <StoryHeader />
    <h1>Correct!</h1>
    <p>
      You are correct! The foolish two decided to take out the foolish third.
      However, this tale was meant to illustrate the vice of greed, so that is
      not all that happens. As it were, the third, while off fetching some food,
      thought,
    </p>
    <Quote
      quote="... if so be that I might / Have all this treasure to myself alone, / There is no man who lives beneath the throne / Of God that should be then so merry as I."
      citation="The Pardoner's Tale, 554-557"
    />
    <p>
      And he plotted to poison the food of the other two so he could split the
      gold only with himself. But after getting killed by the other two rogues,
      they ate his food, not knowing it was poisoned.
    </p>
    <p>And thus, all the greedy rogues got to meet Death.</p>
    <p><a href="/school/worldsfair/canterbury-end">Continue.</a></p>
    <WFFooter />
  </div>
</template>

<script setup>
import StoryHeader from "./components/StoryHeader.vue";
import WFFooter from "./components/WFFooter.vue";
import Quote from "./components/Quote.vue";
</script>

<style scoped>
@import "./main.css";
</style>
