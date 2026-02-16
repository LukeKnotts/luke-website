<template>
  <div class="everything">
    <StoryHeader />
    <h1>Three Fools</h1>
    <p>
      The Pardoner tells the tale of three fools, unioned by the vice of greed.
      You are one of three foolish friends who while at the bar and hearing of
      your friend's death, decide with your pals to vow to set out and kill
      Death himself.
    </p>
    <p>
      But things don't go to plan. As you and your riotous friends are traveling
      you meet an old man. The old man claims to be searching for a young person
      to trade his old age with, but no one is willing. After harassing this
      man, he tells you that Death lies beneath an old tree.
    </p>
    <p>
      So you and your foolish companions search the tree, and there you find
      golden coins buried.
    </p>
    <Quote
      quote="No longer, then, after this Death they sought, / But each of them so glad was of that sight"
      citation="The Pardoner's Tale, 486-487"
    />
    <p>
      Realizing that it would be suspicious to transport gold during broad
      daylight, for fear of being suspected as criminals, you all agree to wait
      until night to take the gold coins home. You randomly pick one member of
      the group to go off to fetch some lunch while you all wait.
    </p>
    <p>Then, the remaining foolish friend says to you,</p>
    <Quote
      quote="You know well that you are my own sworn brother, /
So to your profit I will speak anon. / You know well how our comrade is just gone; / And here is gold, and that in great plenty, / That's to be parted here among us three. / Nevertheless, if I can shape it so / That it be parted only by us two, / Shall I not do a turn that is friendly?"
      citation="The Pardoner's Tale, 522-529"
    />
    <p>
      Your friend offers that you surprise the third when he comes back and kill
      him so you can split the gold only between you two. So what do you do? Do
      you agree to remove your friend for money, or do you stay loyal?
    </p>
    <p>
      A)
      <a href="/school/worldsfair/canterbury-correct"
        >Betray and split the money two ways.</a
      >
    </p>
    <p>
      B)
      <a href="/school/worldsfair/canterbury-wrong"
        >Stay loyal and split the money three ways.</a
      >
    </p>
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
