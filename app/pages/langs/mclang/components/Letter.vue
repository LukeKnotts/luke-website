<script setup>
const props = defineProps(["letter"]);

let letter_str = props.letter;
let letter_img_link;
switch (letter_str) {
  case "a":
    letter_img_link = "/images/langs/mclang/a.png";
    break;
  case "b":
    letter_img_link = "/images/langs/mclang/b.png";
    break;
  case "c":
    letter_img_link = "/images/langs/mclang/c.png";
    break;
  case "d":
    letter_img_link = "/images/langs/mclang/d.png";
    break;
  case "e":
    letter_img_link = "/images/langs/mclang/e.png";
    break;
  case "f":
    letter_img_link = "/images/langs/mclang/f.png";
    break;
  case "g":
    letter_img_link = "/images/langs/mclang/g.png";
    break;
  case "h":
    letter_img_link = "/images/langs/mclang/h.png";
    break;
  case "i":
    letter_img_link = "/images/langs/mclang/i.png";
    break;
  case "j":
    letter_img_link = "/images/langs/mclang/j.png";
    break;
  case "k":
    letter_img_link = "/images/langs/mclang/k.png";
    break;
  case "l":
    letter_img_link = "/images/langs/mclang/l.png";
    break;
  case "m":
    letter_img_link = "/images/langs/mclang/m.png";
    break;
  case "n":
    letter_img_link = "/images/langs/mclang/n.png";
    break;
  case "o":
    letter_img_link = "/images/langs/mclang/o.png";
    break;
  case "p":
    letter_img_link = "/images/langs/mclang/p.png";
    break;
  case "q":
    letter_img_link = "/images/langs/mclang/q.png";
    break;
  case "r":
    letter_img_link = "/images/langs/mclang/r.png";
    break;
  case "s":
    letter_img_link = "/images/langs/mclang/s.png";
    break;
  case "t":
    letter_img_link = "/images/langs/mclang/t.png";
    break;
  case "u":
    letter_img_link = "/images/langs/mclang/u.png";
    break;
  default:
    // default image as an "error" image.
    letter_img_link = "/images/occulinary-club/banner.png";
    break;
}
</script>

<template>
  <div class="inline">
    <img
      :src="letter_img_link"
      :alt="'Slabbic' + ' \'' + letter_str + '\''"
      :title="'Slabbic' + ' \'' + letter_str + '\''"
      class="letter"
    />
  </div>
</template>

<style scoped>
.inline {
  display: inline;
}
.letter {
  height: 1lh;
  vertical-align: bottom;
}
</style>
