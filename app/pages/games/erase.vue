<script setup>
import Header from "~/components/Header.vue";
</script>

<template>
  <div>
    <Header :array="[{ link: '/games', name: 'Games' }]" />
    <h1>ERASE Employment</h1>
    <p>
      Made during my 2024-25 school year at
      <a href="https://warrentech.jeffcopublicschools.org/">Warren Tech</a>.
    </p>
    <img src="/images/erase-employment-game/basket.png" />
    <ul class="summary">
      <li>
        Team: <a href="https://itch.io/profile/callend-07">Callen Dickerson</a>,
        <a href="https://hirokahara.itch.io/">Hiro Kahara</a>, Luke Knotts (me),
        <a href="https://alexprice2123.github.io/alex.price/">Alex Price</a>,
        <a href="https://www.mushroomsoupcat.com/">Emma Schmucker</a>,
        <a href="https://ratbill.itch.io/">Leo Sheng</a>, and
        <a href="https://itch.io/profile/dqrktimes-lukas">Lukas Wilkens Mota</a>
      </li>
      <li>Engine: Unreal Engine 5</li>
      <li>Role: Project Manager, Lead Designer, Level Design</li>
      <li>Made over the 2024-25 school year as we learned game development.</li>
      <li><a href="https://blob-guy.itch.io/erase-employment">Play it!</a></li>
    </ul>
    <p>
      <i>ERASE Employment</i> is the first "real" game project I have
      participated in, and was developed with love over the course of a school
      year in Warren Tech's game development apprenticeship program.
    </p>
    <p>
      I started with a simple idea about walking on the walls of an office, and
      pitched the concept of a looney and distorted company where people's minds
      were erased to my classmates. I was able to recruit teammates and we were
      off, however bumpy the path ended up!
    </p>
    <p>
      This was my first time leading a real team. I got to work with skilled
      artists and programmers as we learned and hacked together our first
      project in Unreal Engine. I got better at commmunication, writing,
      collaboration, and pushing forward even when I didn't know how. This
      program was a life changing opportunity for me. Our class released games
      under the moniker "<a href="https://www.3to1games.com/">3to1games</a>"
      because we brought together the skills of the three main disciplines in
      games: artists, coders, and designers.
    </p>
    <p>
      I have to give a tremendous thanks to our teacher,
      <a href="https://www.mobygames.com/person/8152/stuart-compton/"
        >Stuart Compton</a
      >
      for being one of the most dedicated leaders I have had ever had the grace
      of following. I learned more than just making games from him.
    </p>
    <p>
      One part of this game development program was to make weekly blogs,
      detailing our work. Sometimes I was annoyed or lazy, and sometimes I went
      overboard and wrote too much. If you want to look at the terrifying time
      capsule that is my
      <NuxtLink to="/games/wtdevlog">Warren Tech dev log</NuxtLink>, note that
      you have been warned, and click that hyperlink.
    </p>
    <p>
      And for those of you who missed the link above, we want YOU to join ERASE!
      Go play the game!:
    </p>
    <p>
      <a href="https://blob-guy.itch.io/erase-employment">ERASE Employment</a>
    </p>
    <hr />
  </div>
</template>

<style scoped>
img {
  width: 500px;
}
</style>
