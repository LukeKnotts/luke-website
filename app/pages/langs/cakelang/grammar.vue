<template>
  <div>
    <Layout>
      <h1>A Grammar of the Cakelang Language</h1>
      <p>
        <Def>Cakelang</Def> is a conlang (i.e.,
        <a
          class="external"
          href="https://en.wikipedia.org/wiki/Constructed_language"
          >constructed language</a
        >) created by <a href="/">Luke Knotts</a>.
      </p>
      <p>
        A sentence in Cakelang consists of a row of objects and object-looking
        cakes. Cakelang speakers prepare and present these cakes, while Cakelang
        listeners sus out which objects are secretly cake and cut into and taste
        them to "hear" the Cakelang message.
      </p>
      <hr />
      <h2><span class="h2-num">1.0</span> Three Cakes</h2>
      <p>
        A sentence in Cakelang consists of <Def>three</Def> cakes, one of them
        secretly fake (i.e., not cake).
      </p>
      <p>
        Despite this limitation, Cakelang is still capable of conveying
        arbitrarily long and complex utterances. The way Cakelang does this is
        <Def>Cake layers</Def>. Each cake in a Cakelang utterance contains some
        amount of layers, each represent a <Def>word</Def> in Cakelang.
      </p>
      <hr />
    </Layout>
  </div>
</template>

<script setup>
import Layout from "./components/Layout.vue";
import Def from "./components/Highlight.vue";
</script>
