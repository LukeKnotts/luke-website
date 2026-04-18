<template>
  <div>
    <Header :array="[{ link: '/langs', name: 'Langs' }]" />
    <Wipbanner />
    <h1>Paths (new)</h1>
    <p>Hello. here will be the paths.</p>
    <hr />
    <!-- v-if scale generation has finished. -->
    <div v-if="path_data">
      <p>{{ path_amount }} sets</p>
      <template v-for="(ele, index) in paths">
        <p>{{ index }}: {{ ele }}</p>
      </template>
    </div>
    <div v-else>
      <p>
        Content is still loading. You may need to wait a moment, but the page
        will update automatically when it is ready. If you refresh this window,
        the loading process will restart. I apologize for this funky
        in-development setup! But seriously, if this takes for than 2 minutes,
        something might be broken and I would give up waiting.
      </p>
    </div>
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Wipbanner from "~/components/wipbanner.vue";
import list_scales from "~/composables/scalelist.js";

const path_data = ref(list_scales(12, true));
const paths = ref(path_data.value.arr);
const path_amount = ref(path_data.value.size);
</script>
