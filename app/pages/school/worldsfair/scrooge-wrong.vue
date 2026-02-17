<template>
  <div class="everything">
    <StoryHeader />
    <h1>Incorrect!</h1>
    <p>
      Interestingly, Scrooge does not hide from this second ghost. Once he
      realizes that the ghost is waiting for him in another room, he complies
      and follows. There is some humor to how quickly Scrooge accepts the
      reality that he is being haunted. Perhaps Scrooge doesn't see another way
      through the nightmare. Or perhaps he recognizes that they are there to
      help him.
    </p>
    <p>
      If you're curious, consider picking the
      <a href="/school/worldsfair/scrooge-start">other option</a>, and reading
      on. Enjoy the haunt!
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
