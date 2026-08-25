<script setup lang="ts">
import Header from "~/components/Header.vue";

const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("wtdevlog").all(),
);
</script>

<template>
  <div>
    <Header
      :array="[
        { link: '/games/', name: 'Games' },
        { link: '/games/wtdevlog', name: 'WT Devlog' },
      ]"
    />
    <h1>Warren Tech Devlog</h1>
    <p>
      Posts written while I was a student at Warren Tech's game development
      appreticeship program. Games from this program have been branded under
      3to1games, a name that references the program's cross-discipline nature.
    </p>
    <p>
      It was during this year that I worked on
      <NuxtLink to="/games/thehunt">The Hunt</NuxtLink>,
      <NuxtLink to="/games/erase">ERASE Employment</NuxtLink>,
      <NuxtLink to="/games/occulinaryclub">The Occulinary Club</NuxtLink>, and
      <NuxtLink to="/games/worldthumbboxing">World Thumb Boxing</NuxtLink>.
    </p>
    <ul>
      <li v-for="post in posts" :key="post.date">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
