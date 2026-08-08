<script setup>
import Header from "~/components/Header.vue";
import Wipbanner from "~/components/Wipbanner.vue";
</script>

<template>
  <div>
    <Header />
    <Wipbanner />
    <h1>Languages</h1>
    <p>A place for me to put the languages I've made. Woo-hoo!</p>
    <ul>
      <li><a href="/langs/slabbic">Slabbic</a></li>
      <li>
        <a href="https://equilibrilang.netlify.app/">Equilibrilang</a>
      </li>
    </ul>
    <hr />
    <p>Abandoned or barely-started language projects.</p>
    <ul>
      <li><a href="/langs/pathlang/">Pathlang</a></li>
    </ul>
  </div>
</template>
