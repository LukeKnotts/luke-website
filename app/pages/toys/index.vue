<script setup>
import Header from "/components/Header.vue";
</script>

<template>
  <div>
    <Header :array="[{ link: '/toys', name: 'Toys' }]" />
    <h1>Toys</h1>
    <p>A place for lots of random little web toys I want to show off!</p>
    <ul>
      <li><a href="/toys/bugs/">Bugs</a></li>
      <li><a href="/toys/flashcards">Flash Cards</a></li>
    </ul>
  </div>
</template>
