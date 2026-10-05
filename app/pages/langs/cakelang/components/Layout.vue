<template>
  <div>
    <Header
      :array="[
        { link: '/langs', name: 'Langs' },
        { link: '/langs/cakelang', name: 'Cakelang' },
      ]"
    />
    <WIPbanner />
    <div class="cakelang-wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import WIPbanner from "~/components/Wipbanner.vue";
</script>

<style scoped>
.cakelang-wrapper {
  margin-left: 20%;
  margin-right: 20%;
  width: auto;
  --primary-color: rgb(80, 80, 233);
  --secondary-color: rgb(151, 33, 151);
}
@media all and (max-width: 500px) {
  .cakelang-wrapper {
    /* Small margins for phone screens */
    margin: 0px 20px 20px 20px;
  }
}

:deep(h1) {
  font-family: Georgia, "Times New Roman", Times, serif;
}
:deep(h2) {
  color: var(--primary-color);
  font-size: 28px;
}
:deep(.h-num) {
  color: black;
}
:deep(.h-num::after) {
  content: "\00A0";
}
:deep(h3) {
  color: var(--primary-color);
  font-size: 24px;
  text-decoration: underline;
  text-decoration-color: var(--secondary-color);
}
:deep(p) {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 18px;
  line-height: 1.5em;
  text-align: justify;
}
:deep(a) {
  font-family: Georgia, "Times New Roman", Times, serif;
  color: var(--primary-color);
}

:deep(.def) {
  font-weight: bold;
  color: var(--primary-color);
  display: inline;
}
:deep(.external) {
  color: var(--secondary-color);
}
:deep(.external::after) {
  content: " ↗";
}
</style>
