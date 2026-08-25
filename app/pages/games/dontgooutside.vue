<script setup>
import Header from "~/components/Header.vue";
</script>

<template>
  <div>
    <Header :array="[{ link: '/games', name: 'Games' }]" />
    <h1>Don't Go Outside</h1>
    <p>A Choose-Your-Own-Adventure style mystery</p>
    <img src="/images/games/dontgooutside/title.png" />
    <p>
      Don't Go Outside is a text based story inspired by
      <i>Choose Your Own Adventure</i> books. It was worked on by myself, John
      Knotts, Aris Fryer, Mattison Brown, with some contributions from Nathan
      Branch and Elkan Lee.
    </p>
    <p>
      This text-based adventure is very much unfinished, but maybe you'll still
      find some bits of it amusing.
    </p>
    <p>You can check it out at the following link:</p>
    <p>
      <a href="https://dontgooutside.lukeknotts.com"
        >dontgooutside.lukeknotts.com</a
      >
    </p>
    <p>
      There is also a handful of pieces of music that I wrote for the game but
      never implemented. They are in the below YouTube playlist. Aris also wrote
      some music for this, perhaps that too will be released at a later date...
    </p>
    <p>
      <a
        href="https://www.youtube.com/playlist?list=PL92r_QBKcm-Fp7wvGf1Ob8Lj745qC_IVh"
        >Luke's Music for DGO</a
      >
    </p>
    <hr />
  </div>
</template>

<style scoped>
img {
  width: 500px;
}
</style>
