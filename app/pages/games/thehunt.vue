<template>
  <div>
    <Header :array="[{ link: '/games', name: 'Games' }]" />
    <h1>The Hunt</h1>
    <p>for Warren Tech's 2025 Creative Jam: Run!</p>
    <img src="/images/thehunt/unsafe.png" />
    <ul>
      <li>Team Size: Nine</li>
      <li>Engine: Unreal Engine 5</li>
      <li>My Role: Project Manager, Level Design</li>
      <li>OS: MacOS, Windows</li>
      <li>Made In: &#8776; 48 Hours</li>
      <li>
        <a href="https://blob-guy.itch.io/overclocked-cj-2025">Play it!</a>
      </li>
    </ul>
    <p>
      <i>The Hunt</i> is a small project made during Warren Tech's 2025
      "Creative Jam," a schoolwide game jam that invites other disciplines as
      well. The theme we had was "Run!". Our team consisted of 9 people, and we
      called ourselves Overclocked Studios. The project we completed has a
      couple problems, but if you can get passed the technical difficulties, it
      can be quite fun. Windows and mac can download it below:
    </p>

    <a href="https://blob-guy.itch.io/overclocked-cj-2025"
      >blob-guy.itch.io/overclocked-cj-2025</a
    >
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
</script>

<style scoped>
img {
  width: 500px;
}
</style>
