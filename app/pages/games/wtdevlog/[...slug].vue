<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("wtdevlog").path(route.path).first();
});

import Header from "~/components/Header.vue";
</script>

<template>
  <div>
    <Header
      :array="[
        { link: '/games/', name: 'Games' },
        { link: '/games/wtdevlog', name: 'WT Devlog' },
      ]"
    />
    <template v-if="page">
      <ContentRenderer :value="page" />
    </template>
    <template v-else>
      <div class="empty-page">
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </template>
  </div>
</template>
