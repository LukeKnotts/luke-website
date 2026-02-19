<script setup>
defineProps(["term", "def"]);

var flipcardfront = ref("showface");
var flipcardback = ref("hideface");

function flip() {
  if (flipcardfront.value == "showface") {
    flipcardfront.value = "hideface";
    flipcardback.value = "showface";
  } else {
    flipcardfront.value = "showface";
    flipcardback.value = "hideface";
  }
}
</script>

<template>
  <div class="flip-card">
    <div class="flip-card-outer">
      <div class="flip-card-inner" @click="flip">
        <div :class="flipcardfront">
          <div class="front">
            <p>{{ term }}</p>
          </div>
        </div>
        <div :class="flipcardback">
          <div class="back">
            <p>{{ def }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.showface {
  display: visible;
  transition: 0.2s;
}

.hideface {
  display: none;
  transition: 0.2s;
}

.flip-card-inner {
  margin-left: auto;
  margin-right: auto;
}
.front {
  background-color: rgb(178, 178, 178);
  height: 100px;
  width: 300px;

  padding: 10px;
  margin: 5px;

  border-radius: 10px;
  border: solid black 2px;
}
.back {
  background-color: rgb(148, 175, 198);
  height: 100px;
  width: 300px;

  padding: 10px;
  margin: 5px;

  border-radius: 10px;
  border: solid black 2px;
}
</style>
