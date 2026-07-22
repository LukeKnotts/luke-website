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

const can_scroll = ref(false);
</script>

<template>
  <div class="header-component">
    <div class="flex-container">
      <p><a href="/">LukeKnotts.com</a></p>
      <p>&emsp;</p>
      <p v-if="can_scroll">
        <button @click="topOfPage()">Top &uparrow;</button>&emsp;
      </p>
      <p v-if="array">|</p>
      <template v-for="newlink in array">
        <p>&emsp;</p>
        <p>
          <a :href="newlink.link">{{ newlink.name }}</a>
        </p>
      </template>
    </div>
  </div>
</template>

<style scoped>
.header-component {
  position: sticky;
  top: 0;
  background-color: white;

  padding: 5px 10px 5px 20px;
  border-bottom: black 2px solid;

  /* TEXT STYLE */
  font-family: georgia, serif;
}

.flex-container {
  display: flex;
  flex-direction: horizontal;
}
</style>
