<script setup>
const props = defineProps(["roman"]);

let show_image = true;

let word = props.roman;

// compatibility to allow nothing to generate
if (word == "!") {
  show_image = false;
}

// the '?' symbol is used for unknowns; let default switch case happen to use the error image.
const getLetterLink = (letter) => {
  switch (letter) {
    case "a":
      return "/images/langs/mclang/a.png";
    case "b":
      return "/images/langs/mclang/b.png";
    case "c":
      return "/images/langs/mclang/c.png";
    case "d":
      return "/images/langs/mclang/d.png";
    case "e":
      return "/images/langs/mclang/e.png";
    case "f":
      return "/images/langs/mclang/f.png";
    case "g":
      return "/images/langs/mclang/g.png";
    case "h":
      return "/images/langs/mclang/h.png";
    case "i":
      return "/images/langs/mclang/i.png";
    case "j":
      return "/images/langs/mclang/j.png";
    case "k":
      return "/images/langs/mclang/k.png";
    case "l":
      return "/images/langs/mclang/l.png";
    case "m":
      return "/images/langs/mclang/m.png";
    case "n":
      return "/images/langs/mclang/n.png";
    case "o":
      return "/images/langs/mclang/o.png";
    case "p":
      return "/images/langs/mclang/p.png";
    case "q":
      return "/images/langs/mclang/q.png";
    case "r":
      return "/images/langs/mclang/r.png";
    case "s":
      return "/images/langs/mclang/s.png";
    case "t":
      return "/images/langs/mclang/t.png";
    case "u":
      return "/images/langs/mclang/u.png";
    case "v":
      return "/images/langs/mclang/v.png";
    case "w":
      return "/images/langs/mclang/w.png";
    case "x":
      return "/images/langs/mclang/x.png";
    case "y":
      return "/images/langs/mclang/y.png";
    case "z":
      return "/images/langs/mclang/z.png";
    case "1":
      return "/images/langs/mclang/za.png";
    case " ":
      return "/images/langs/mclang/zspace.png";
    default:
      // default image as an "error" image.
      return "/images/occulinary-club/banner.png";
  }
};
</script>

<template>
  <div class="inline" v-if="show_image">
    <template v-for="ltr in word">
      <img
        :src="getLetterLink(ltr)"
        :alt="'Slabbic' + ' \'' + ltr + '\''"
        :title="'Slabbic' + ' \'' + ltr + '\''"
        class="letter"
    /></template>
  </div>
</template>

<style scoped>
.inline {
  display: inline;
}
.letter {
  height: 1em;
  vertical-align: text-bottom;
}
</style>
