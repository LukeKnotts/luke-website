<template>
  <div>
    <Header :array="[{ link: '/games', name: 'Games' }]" />
    <h1>Down for the Count!</h1>
    <p>Made in four days for the 2026 GMTK game jam.</p>
    <img src="/images/games/downforthecount/dtfc.png" />
    <ul class="summary">
      <li>
        Team: <a href="https://cherrihoney.itch.io/">CherriHoney</a>,
        <a href="https://itch.io/profile/cultistbird">Cultistbird</a>,
        <a href="https://itch.io/profile/danceinabyss">DanceInAbyss</a>,
        <a href="https://gamedagamez-dev.itch.io/">Gamedagamez-dev</a>,
        <a href="https://blob-guy.itch.io/">Luke Knotts</a>,
        <a href="https://papa-shrim.itch.io/">Christopher Marini Herron</a>,
        <a href="https://oochiiehehe3.itch.io/">Zaida Martin</a>, and
        <a href="https://ratbill.itch.io/">Leo Sheng</a>
      </li>
      <li>Engine: Godot 4.7</li>
      <li>My Role: Project Management, Level Designer</li>
      <li>OS: MacOS, Windows, Linux</li>
      <li>Made for the 2026 GMTK game jam.</li>
      <li>
        <a href="https://blob-guy.itch.io/down-for-the-count">Play it!</a>
      </li>
    </ul>
    <p>
      When I first heard the pitch for this game, I assumed it would be a joke
      and we would move on to a more "serious" idea. But soon enough, I found
      myself working on a game about trying to kiss as many vampires as
      possible. Oddly enough, I think <i>Down for the Count!</i> is the most fun
      game I have worked on to-date. Designing the map over four days was a
      fairly uncomfortable process for me, being my first real time working in
      Godot. But with our programmer's good movement work and lots testing, I
      believe the map design is almost kinda fun! After the project was
      finished, seeing people speedrun the game was really rewarding, and I
      think this experience taught me a lot about making fun worlds.
    </p>
    <p>
      If you're interested in a silly 3d platformer dating-sim fusion game, I
      hope you will try our game. Even if you <i>don't</i> like how that sounds,
      I hope you try our game. Who knows, you might be the next dashing hottie
      to kiss all the vampires before the ball drops.
    </p>
    <hr />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
</script>
