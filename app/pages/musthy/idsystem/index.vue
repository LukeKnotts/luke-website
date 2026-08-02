<template>
  <div>
    <Layout>
      <h1>ID Systems for Musical Scales</h1>
      <p>by Luke Knotts</p>
      <hr />
      <p>
        When making a website, having a numeric ID for each musical scale is
        useful. <i>Ian Ring</i> used binary representations of musical scales on
        <a href="https://ianring.com/musictheory/">their website</a>. An example
        of the system is below.
      </p>
      <BinaryExample />
      <p>
        A binary system is cool because it can be calculated quickly by
        computers. It is also cool because it sorts all scales with lower notes
        before listing scales that use higher notes. It can be slightly awkward
        to work with however, because the order isn't always intuitive. The fact
        that scale No.16 is "[4]" while No.32 is "[5]" only makes sense if you
        recognize that 16 and 32 are the fourth and fifth powers of two,
        respectively.
      </p>
    </Layout>
  </div>
</template>

<script setup>
import Layout from "~/pages/musthy/components/Layout.vue";
import BinaryExample from "~/pages/musthy/idsystem/components/BinaryExample.vue";
</script>
