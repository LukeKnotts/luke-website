<template>
  <div class="everything">
    <StoryHeader />
    <h1>Questioned Honor</h1>
    <p>
      You, the great hero Beowulf, have come to Herot Hall to help the Danes. A
      powerful monster named Grendel has been terrorizing them, eating men. You
      sail across the sea having heard of such a foe, and you intend to free
      your fellow man.
    </p>
    <p>
      When you get there, one of the Danes named Unferth, being jealous of your
      esteem, challenges your strength and discourages you.
    </p>
    <Quote
      quote="You're Beowulf, are you—the same / Boastful fool who fought a swimming / Match with Brecca, both of you daring / And young and proud, exploring the deepest / Seas, risking your lives for no reason … And at the end victory was his … You've been lucky in battles, Beowulf / but I think / Your luck may change if you challenge Grendel."
      citation="Beowulf, 239-259"
    />
    <p>
      How do you respond to this attack before the Dane's king? Do you explain
      how the storms had brought about monsters forcing you to slay them,
      proclaiming your strength and instead question Unferth's own character; or
      do you ignore this attack to your honor, and not be concerned with the
      criticism?
    </p>
    <p>
      A) <a href="/school/worldsfair/beowulf-correct">Defend your honor.</a>
    </p>
    <p>B) <a href="/school/worldsfair/beowulf-wrong">Ignore Unferth.</a></p>
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
