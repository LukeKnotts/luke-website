<script setup>
import Header from "~/components/Header.vue";
</script>

<template>
  <div>
    <Header :array="[{ link: '/games', name: 'Games' }]" />
    <h1>World Thumb Boxing (Canceled)</h1>
    <p>The first game jam I failed to complete...!</p>
    <img src="/images/WorldThumbBoxing/credits.png" />
    <p>
      World Thumb Boxing was the unfinished game jam project for Warren Tech's
      December 2024 game jam, "Relentless". It was worked on by Dillan Gray,
      Declan Mahoney, Magnus Wiese, Luke Knotts, and "ghost".
    </p>
    <p>
      It was planned to be a Punch Out-inspired fighting game, where two thumbs
      duke it out in a fight. I even wrote some music for the project:
    </p>
    <audio controls>
      <source src="/music/musicbattleWTB.wav" />
      Your browser does not support the audio element.
    </audio>

    <audio controls>
      <source src="/music/NewMusicRelentlessWTB.wav" />
      Your browser does not support the audio element.
    </audio>

    <p>Music made for WTB.</p>
    <p>
      However, I think because we never pulled the mechanics down into a
      playable state, we weren't able to create a complete project by the end of
      the jam.
    </p>
    <p>
      I wrote about it more in-depth in
      <a class="inline-link" href="/games/wtdevlog/021-dec-17-2024">this</a>
      blog post.
    </p>
    <p>
      I suppose sometimes you learn more when you fail then when you succeed. I
      initially didn't want to show this webpage to the public, but I thought it
      would be cool to show that not everything I have done has been a success.
    </p>
    <p>
      You can also check out our (mostly) empty itch.io page for the project:
    </p>
    <p>
      <a href="https://blob-guy.itch.io/world-thumb-boxing"
        ><i>World Thumb Boxing</i> itch.io page</a
      >
    </p>
  </div>
</template>
