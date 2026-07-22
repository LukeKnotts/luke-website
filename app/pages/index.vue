<template>
  <div>
    <Header />
    <DefLayout>
      <p>
        Howdy! I'm Luke, an undergraduate in Mathematics at the University of
        Denver. On this website you can find my video game projects, music
        theory work, and other schenanigans.
      </p>
      <img src="/images/homepage/me.jpg" class="portrait" />
      <hr />
      <h1>Projects</h1>
      <ul>
        <li><a href="/games">Video Games</a></li>
        <li><a href="/musthy">Music Theory</a></li>
      </ul>
      <hr />
      <h1>Shenanigans</h1>
      <p>
        I also work on a variety of casual for-fun projects. You can explore
        some of those below:
      </p>
      <ul>
        <li><a href="/langs">Languages</a></li>
        <li><a href="/toys">Toys</a></li>
        <li><a href="/codes">Code Catalogue</a> (in progress)</li>
      </ul>
      <hr />
    </DefLayout>
  </div>
</template>

<script setup>
import Header from "/components/Header.vue";
import DefLayout from "/components/DefLayout.vue";
</script>
