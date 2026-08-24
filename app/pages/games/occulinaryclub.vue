<script setup>
import Header from "~/components/Header.vue";
</script>

<template>
  <div>
    <Header :array="[{ link: '/games', name: 'Games' }]" />
    <h1>The Occulinary Club</h1>
    <p>A strange club with even stranger members...</p>
    <img
      title="An almost official club of Hippocampus High School!"
      src="/images/occulinary-club/banner.png"
      alt="A mad scientist smiles over the 'Culinary Club' banner. He has a whisk. And a knife."
    />
    <ul>
      <li>Team Size: Six</li>
      <li>Languages: Javascript, HTML, CSS</li>
      <li>My Role: Project Manager, Design, Web Development</li>
      <li>Made In: &#8776; 2 Weeks</li>
      <li>
        <a href="https://rollsroyce21.itch.io/the-occulinary-club">Play it!</a>
      </li>
    </ul>
    <p>
      A project produced during a two week game jam at Warren Tech based on the
      prompt <i>Paralyzed!</i> in September 2024. I got to work with some
      amazing people: Cade, Luma Volta, Royce Reinwald, and Vixen.
    </p>
    <p>
      We ended up creating a crypit ARG with a weird spooky mystery.
      Unfortunately, our project turned out to be way too crypitic for anybody
      to make sense of. Because of this, as of December 2024, I improved some
      things that will hopefully make the game at least slightly playable.
    </p>
    <p>
      Well, if you enjoy strange crypitic games with puzzles that are hard in
      all of the least fun ways, perhaps you'll get a kick out of our game.
    </p>
    <p>Check out the link to the itch.io page!</p>
    <p>
      <a href="https://rollsroyce21.itch.io/the-occulinary-club"
        >rollsroyce21.itch.io/the-occulinary-club</a
      >
    </p>
    <p>Or just jump straight in:</p>
    <p>
      <a href="https://main--fabulous-sunflower-3e8bef.netlify.app"
        >The ocCulinary Club official Website</a
      >
    </p>
  </div>
</template>

<style scoped>
img {
  width: 600px;
}
</style>
