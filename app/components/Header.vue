<script setup>
defineProps({
  array: {
    type: Array,
  },
});

// array is of the form [{link: hi, name: bye}, {link: hi2, name: bye2}]
</script>

<template>
  <div>
    <div class="flex-container">
      <p><a href="/">Home</a></p>
      <p>&nbsp;</p>
      <p><a href="/about">About</a></p>
      <template v-for="newlink in array">
        <p>&nbsp;</p>
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
</style>
