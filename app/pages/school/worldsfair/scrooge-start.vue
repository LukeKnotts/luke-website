<template>
  <div class="everything">
    <StoryHeader />
    <h1>The Ghosts of Christmas</h1>
    <p>
      You are wealthy and reserved, hardened and selfish. But one night near
      Christmas, a ghost visits you. At first you are completely terrified, but
      he does you know harm. Instead the ghost shows you your own childhood. He
      makes you realize how you have pushed everyone else away in selfish
      security. And tragically, he makes you relive how you abandoned your love.
      It is too much to bare. You try to ward off this ghost.
    </p>
    <Quote
      quote='"Leave me! Take me back! Haunt me no longer!"
        In the struggle, if that can be called a struggle in which the Ghost with no visible resistance on its own part was undisturbed by any effort of its adversary, Scrooge observed that its light was burning high and bright; and dimly connecting that with its influence over him, he seized the extinguisher-cap, and by a sudden action pressed it down upon its head.'
      citation="Dickens, pg.44"
    />
    <p>
      So you are very startled after your first ghost encounter, and you know
      that at least two more ghosts have yet to haunt you. So you wait for the
      next ghost.
    </p>
    <Quote
      quote="Now, being prepared for almost anything, he was not by any means prepared for nothing; and, consequently, when the Bell struck One, and no shape appeared, he was taken with a violent fit of trembling."
      citation="Dickens, pg.45"
    />
    <p>
      Scared, you realize that light is coming from an adjacent room. Perhaps
      the second ghost is waiting for you. Do you approach the next ghost, or do
      you attempt to evade and resist the subsequent specter?
    </p>
    <p>A) <a href="">Resist the ghost!</a></p>
    <p>B) <a href="">Approach the ghost...</a></p>
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
