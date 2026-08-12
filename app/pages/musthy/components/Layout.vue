<template>
  <div>
    <Header :array="[{ link: '/musthy', name: 'Music Theory' }]" />
    <div class="flex-display">
      <div class="page-content">
        <slot />
      </div>
    </div>
    <br />
    <br />
    <hr />
    <p>LukeKnotts.com</p>
  </div>
</template>

<script setup>
import Header from "/components/Header.vue";

useHead({
  meta: [{ name: "format-detection", content: "telephone=no" }],
});
</script>

<style scoped>
.flex-display {
  display: flex;
  justify-content: center;
}

.page-content {
  width: 80%;
  max-width: 1000px;
}
@media only screen and (max-width: 650px) {
  .page-content {
    width: 95%;
  }
}

:slotted(h1) {
  font-family: Georgia, "Times New Roman", Times, serif;
}

:slotted(p) {
  font-size: 18px;
  text-align: left;
  line-height: 1.5em;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: justify;
}

:slotted(:deep(button)) {
  padding: 0px 5px 0px 5px;

  font-size: 15px;
  font-family: Georgia, "Times New Roman", Times, serif;
  background-color: #f5f5f5;

  border: 1px solid rgb(30, 30, 30);
  border-radius: 2px;

  box-shadow: 1px 1px 1px rgb(79, 79, 79);
}
:slotted(:deep(button:active)) {
  box-shadow: none;
}

:slotted(:deep(table)) {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black;

  table-layout: fixed;
}
:slotted(:deep(thead)) {
  background-color: #e2e2e2;
}
:slotted(:deep(td)) {
  border: 1px solid grey;
  padding: 5px;
  background-color: none;
}
:slotted(:deep(.cell-data)) {
  overflow-y: scroll;
  overflow-x: scroll;
}
:slotted(:deep(.cell-data:hover)) {
  /* TODO: only show hover icon if content is scrollable. */
  text-overflow: clip;
  cursor: ew-resize;
}
:slotted(:deep(.cell-data::before)) {
  content: "[";
  color: green;
}
:slotted(:deep(.cell-data::after)) {
  content: "]";
  color: green;
}
:slotted(:deep(tr.rowhighlight td)) {
  background-color: rgb(252, 248, 207);
}
:slotted(:deep(.unavailable)) {
  opacity: 0.5;
  pointer-events: none;
}

:slotted(:deep(::-webkit-scrollbar)) {
  -webkit-appearance: none;
  width: 10px;
  height: 5px;
}
:slotted(:deep(::-webkit-scrollbar-thumb)) {
  border-radius: 7px;
  margin: 2px;

  background-color: rgb(229, 229, 229);
}
:slotted(:deep(::-webkit-scrollbar-corner)) {
  background-color: transparent;
}

:slotted(:deep(.binary)) {
  font-family: "Fira Mono", monospace;
}

:slotted(:deep(.highlight)) {
  color: green;
  font-weight: bold;
}
</style>
