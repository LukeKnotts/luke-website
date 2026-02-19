<template>
  <div class="everything">
    <h1>Which Countries Neighbor the Republic of Turkey?!?</h1>
    <div class="cards">
      <div class="section">
        <p class="underline">West of Turkey!</p>
        <FlashCard term="No.1" def="Bulgaria" />
        <FlashCard term="No.2" def="Greece" />
        <p class="underline">North of Turkey!</p>
        <FlashCard term="No.3" def="Really just the Black Sea!" />
      </div>
      <div class="section">
        <p class="underline">South of Turkey!</p>
        <FlashCard term="No.4" def="Cyprus (kinda)" />
        <FlashCard term="No.5" def="Syria" />
        <FlashCard term="No.6" def="Iraq" />
        <FlashCard term="No.7" def="...but mainly, the Mediterranean Sea!" />
      </div>
      <div class="section">
        <p class="underline">East of Turkey!</p>
        <FlashCard term="No.8" def="Georgia" />
        <FlashCard term="No.9" def="Armenia" />
        <FlashCard term="No.10" def="Azerbaijan (barely!)" />
        <FlashCard term="No.11" def="Iraq" />
      </div>
    </div>
    <br />
    <br />
    <hr />
    <p class="footer">Check out the rest of <a href="/">LukeKnotts.com</a>!</p>
    <br />
    <br />
  </div>
</template>

<script setup>
import FlashCard from "/components/FlashCard.vue";
</script>

<style scoped>
.cards {
  font-size: 24px;

  width: 100%;
  justify-content: center;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  flex-direction: grid;
  gap: 50px;
}
.section {
}

.underline {
  text-decoration: underline;
}

.everything {
  margin-left: 30px;
}
.footer {
  font-size: 18px;
  color: grey;

  text-align: center;
}
</style>
