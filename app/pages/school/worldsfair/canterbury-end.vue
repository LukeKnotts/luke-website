<template>
  <div class="everything">
    <StoryHeader />
    <h1>The Pardoner Himself</h1>
    <p>
      So the Pardoner tells this tale on everyone's journey to Canterbury. But
      what is especially interesting is the Pardoner's own hypocrisy. He asks
      for gold and jewel while preaching of salvation and the folly of greed.
    </p>
    <p>
      So this Canterbury tale not only describes the religious values of the
      times, but also some of the problems with using religion for profit.
    </p>
    <Quote
      quote="My holy pardon cures and will suffice, / So that it brings me gold, or silver brings, / Or else, I care not- brooches, spoons, or rings."
      citation="The Pardoner's Tale, 620-622"
    />
    <p>
      Chaucer's Canterbury Tales are an interesting look into medieval society.
      His method of portraying characters by what stories they tell is
      interesting.
    </p>
    <p>
      If you want to learn more, you can read the
      <a href="http://www.librarius.com/canttran/pardtrfs.htm"
        >translation I used</a
      >
      which also has additional information on the tale. If you enjoyed this,
      look at the <a href="/school/worldsfair">other options</a>, and some of
      the other presentations!
    </p>
    <p><a href="/school/worldsfair">Back to title.</a></p>
    <br />
    <p class="subtitle">Thank you for playing!</p>
    <br />
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
