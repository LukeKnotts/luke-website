<template>
  <div>
    <DefLayout>
      <Header />
      <slot> </slot>
    </DefLayout>
  </div>
</template>

<script setup>
import DefLayout from "~/components/DefLayout.vue";
import Header from "~/components/Header.vue";
</script>
