<template>
  <div class="everything">
    <StoryHeader />
    <h1>Correct!</h1>
    <p>
      Of course you defend your honor! Especially before King Hrothgar, your
      honor is important, and you need to affirm that you are powerful and able
      to slay the monster Grendel. Some may call your claims of strength
      boasting, but in fact, it's the truth.
    </p>
    <Quote
      quote="Ah! Unferth, my friend, your face is hot with ale … no man swims the sea / As I can, no strength is match for mine. … He could never leave me behind, swim faster / Across the waves than I could, and I / Had chosen to remain by his side. / I remained near him five long nights, / Until a flood swept us apart; … Lucky or not, nine was the number / Of sea-huge monsters I killed … And there's more: you murdered your brothers, / Your own kin … Now / The Geats will show [Grendel] courage … when the sun / Comes up again, … that evil will be gone!"
      citation="Beowulf, 262-339"
    />
    <p>
      In Anglo-Saxon culture, honor is important, and defending it isn't just
      about arrogance.
    </p>
    <p><a href="/school/worldsfair/beowulf-end">Continue.</a></p>
    <WFFooter />
  </div>
</template>

<script setup>
import StoryHeader from "./components/StoryHeader.vue";
import WFFooter from "./components/WFFooter.vue";
import Quote from "./components/Quote.vue";
</script>

<style scoped>
@import "./main.css";
</style>
