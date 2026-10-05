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
      <h2><span class="h-num">1.0</span> Three Cakes</h2>
      <p>
        A sentence in Cakelang consists of three <Def>cakes</Def>, one of them
        secretly fake (i.e., not cake).
      </p>
      <p>
        By consequence, there is exactly one <i>inedible</i> fake cake, and
        exactly two <i>edible</i> cakes in every complete sentence in Cakelang.
      </p>
      <h3><span class="h-num">1.1</span> Cake layers</h3>
      <p>
        Despite sentences only having three <i>cakes</i>, Cakelang is still
        capable of conveying arbitrarily long and complex utterances in a single
        sentence. The way Cakelang does this is <Def>cake layers</Def>. Each
        cake in a Cakelang utterance contains one or more layers, each
        representing a <Def>word</Def> in Cakelang.
      </p>
      <p>Here, <i>cake layer</i> and <i>word</i> are used synonymously.</p>
      <h3><span class="h-num">1.2</span> Cake vocabulary</h3>
      <p>
        The first of the three cakes is referred to as the <Def>unucake</Def>,
        the second the <Def>duocake</Def>, and the third the
        <Def>triacake</Def>.
      </p>
      <p>
        The cake in the utterance that happens to be fake is referred to as
        <Def>inedible</Def>, and the other cakes <Def>edible</Def>.
      </p>
      <p>
        For example, some grammatical rules may only apply to certain cakes,
        like the
        <i>inedible unucake</i>, or to <i>edible triacakes</i>.
      </p>
      <hr />
      <h2><span class="h-num">2.0</span> Word Composition</h2>
      <p>
        Words in Cakelang exist as individual cake layers spread across the
        three cakes.
      </p>
      <p>
        Cakelang words have two components. The <Def>index</Def> and the
        <Def>value</Def>. The <i>index</i> tells you how that particular cake
        layer is related to the rest of the sentence, and the <i>value</i> is
        the particular concept that layer represents.
      </p>
      <hr />
      <!-- Footer -->
      <br />
      <br />
    </Layout>
  </div>
</template>

<script setup>
import Layout from "./components/Layout.vue";
import Def from "./components/Highlight.vue";
</script>
