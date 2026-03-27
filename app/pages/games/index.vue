<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<template>
  <div>
    <Header />
    <h1>Games</h1>
    <p>
      Every project here I've worked on with the help of cool coders, musicians,
      artists, and writers.
    </p>
    <p>
      I have listed the projects in the order that I suggest new people look at
      my work in.
    </p>
    <ul>
      <li>
        <NuxtLink to="/games/thehunt">The Hunt!</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/games/erase">ERASE Employment</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/games/occulinaryclub">The Occulinary Club</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/games/dontgooutside">Don't Go Outide</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/games/worldthumbboxing">World Thumb Boxing</NuxtLink>
        (Canceled)
      </li>
    </ul>
  </div>
</template>
