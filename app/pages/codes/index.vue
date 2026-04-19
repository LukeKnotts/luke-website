<script setup>
import Header from "~/components/Header.vue";
import Wipbanner from "~/components/Wipbanner.vue";
</script>

<template>
  <div>
    <Header />
    <Wipbanner />
    <h1>Code Catalogue</h1>
    <p>
      A place for me to catalogue codes, whenever I feel like it. Don't expect
      much from here, I can't promise I'll update again anytime soon.
    </p>
    <hr />
    <ul>
      <li><a href="/codes/screamcipher">Scream Cipher</a>, xkcd</li>
      <li>
        Anne Frank's
        <a href="/codes/annefranknum">Numeric Substitution Cipher</a>
      </li>
    </ul>
  </div>
</template>
