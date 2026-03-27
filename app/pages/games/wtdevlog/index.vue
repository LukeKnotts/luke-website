<script setup lang="ts">
import Header from "~/components/Header.vue";

const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("wtdevlog").all(),
);
</script>

<template>
  <div>
    <Header :array="[{ link: '/games/', name: 'Games' }]" />
    <h1>Warren Tech Devlog</h1>
    <p>
      Posts written while I was a student at Warren Tech's game development
      appreticeship program. Games from this program have been branded under
      3to1games, a name that references the program's cross-discipline nature.
    </p>
    <p>
      It was during this year that I worked on
      <a href="games/thehunt">The Hunt</a>,
      <a href="games/erase">ERASE Employment</a>,
      <a href="games/occulinaryclub">The Occulinary Club</a>, and
      <a href="games/worldthumbboxing">World Thumb Boxing</a>.
    </p>
    <ul>
      <li v-for="post in posts" :key="post.date">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
