<script setup>
defineProps({
  array: {
    type: Array,
  },
});
// array is of the form [{link: hi, name: bye}, {link: hi2, name: bye2}]

const topOfPage = () => {
  window.scrollTo(0, 0);
};
</script>

<template>
  <div class="everything">
    <div class="flex-container">
      <p><a href="/">LukeKnotts.com</a></p>
      <p>&emsp;</p>
      <p><a href="/about">About</a></p>
      <p>&emsp;</p>
      <p><button @click="topOfPage()">Top &uparrow;</button></p>
      <p>&emsp;</p>
      <p v-if="array">|</p>
      <template v-for="newlink in array">
        <p>&emsp;</p>
        <p>
          <a :href="newlink.link">{{ newlink.name }}</a>
        </p>
      </template>
    </div>
    <hr />
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: horizontal;
}
.everything {
  position: sticky;
  top: 0;
  background-color: white;
}
</style>
