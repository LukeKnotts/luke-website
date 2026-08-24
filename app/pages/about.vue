<template>
  <div>
    <Header />
    <Layout>
      <h1>About</h1>
      <p>
        Howdy! My name is Luke Knotts, and I'm currently pursuing a BS in
        Mathematics at the University of Denver, with minors in computer science
        in Japanese.
      </p>
      <p><a href="/">Home page</a>.</p>
      <img src="/images/homepage/me.JPG" class="portrait" />
      <hr />
      <p>Socials:</p>
      <ul>
        <li><a href="https://blob-guy.itch.io/">Itch.io</a></li>
        <li>
          <a href="https://www.youtube.com/@BlobiousCity">YouTube</a>
        </li>
      </ul>
      <hr />
    </Layout>
  </div>
</template>

<script setup>
import Layout from "~/components/DefLayout.vue";
import Header from "~/components/Header.vue";
</script>
