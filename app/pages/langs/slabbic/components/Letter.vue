<script setup>
const props = defineProps(["roman"]);

let show_image = true;

const word = props.roman;

// compatibility to allow nothing to generate
if (word == "!") {
  show_image = false;
}

// For use of "Wall ligature" characters
const wall_connects = ["a", "b", "c", "d", "k", "l"];

const handle_undefined = (letter) => {
  if (!letter) {
    return " ";
  } else {
    return letter;
  }
};

// the '?' symbol is used for unknowns; let default switch case happen to use the error image.
const getLetterLink = (before, letter, after) => {
  switch (letter) {
    case "a":
      return "/images/slabbic/slabbic_a.png";
    case "b":
      return "/images/slabbic/slabbic_b.png";
    case "c":
      return "/images/slabbic/slabbic_c.png";
    case "d":
      return "/images/slabbic/slabbic_d.png";
    case "e":
      return "/images/slabbic/slabbic_e.png";
    case "f":
      return "/images/slabbic/slabbic_f.png";
    case "g":
      return "/images/slabbic/slabbic_g.png";
    case "h":
      return "/images/slabbic/slabbic_h.png";
    case "i":
      return "/images/slabbic/slabbic_i.png";
    case "j":
      return "/images/slabbic/slabbic_j.png";
    case "k":
      if (wall_connects.includes(before)) {
        if (wall_connects.includes(after)) {
          return "/images/slabbic/slabbic_k-mid.png";
        } else {
          return "/images/slabbic/slabbic_k-left.png";
        }
      } else if (wall_connects.includes(after)) {
        return "/images/slabbic/slabbic_k-right.png";
      } else {
        return "/images/slabbic/slabbic_k-lone.png";
      }
    case "5":
      return "/images/slabbic/slabbic_k-lone.png";
    case "6":
      return "/images/slabbic/slabbic_k-right.png";
    case "7":
      return "/images/slabbic/slabbic_k-left.png";
    case "8":
      return "/images/slabbic/slabbic_k-mid.png";
    case "l":
      if (wall_connects.includes(before)) {
        if (wall_connects.includes(after)) {
          return "/images/slabbic/slabbic_l-mid.png";
        } else {
          return "/images/slabbic/slabbic_l-left.png";
        }
      } else if (wall_connects.includes(after)) {
        return "/images/slabbic/slabbic_l-right.png";
      } else {
        return "/images/slabbic/slabbic_l-lone.png";
      }
    case "9":
      return "/images/slabbic/slabbic_l-lone.png";
    case "@":
      return "/images/slabbic/slabbic_l-right.png";
    case "#":
      return "/images/slabbic/slabbic_l-left.png";
    case "$":
      return "/images/slabbic/slabbic_l-mid.png";
    case "m":
      return "/images/slabbic/slabbic_m.png";
    case "n":
      return "/images/slabbic/slabbic_n.png";
    case "o":
      return "/images/slabbic/slabbic_o.png";
    case "p":
      return "/images/slabbic/slabbic_p.png";
    case "q":
      return "/images/slabbic/slabbic_q.png";
    case "r":
      return "/images/slabbic/slabbic_r.png";
    case "s":
      return "/images/slabbic/slabbic_s.png";
    case "t":
      return "/images/slabbic/slabbic_t.png";
    case "u":
      return "/images/slabbic/slabbic_u.png";
    case "v":
      return "/images/slabbic/slabbic_v.png";
    case "w":
      return "/images/slabbic/slabbic_w.png";
    case "x":
      return "/images/slabbic/slabbic_x.png";
    case "y":
      return "/images/slabbic/slabbic_y.png";
    case "z":
      return "/images/slabbic/slabbic_z.png";
    case "1":
      return "/images/slabbic/slabbic_1.png";
    case "2":
      return "/images/slabbic/slabbic_2.png";
    case "3":
      return "/images/slabbic/slabbic_3.png";
    case "4":
      return "/images/slabbic/slabbic_4.png";
    case " ":
      return "/images/slabbic/slabbic_space.png";
    default:
      // default image as an "error" image.
      return "/images/occulinary-club/banner.png";
  }
};
</script>

<template>
  <span class="inline" v-if="show_image">
    <template v-for="(ltr, index) in word">
      <img
        :src="
          getLetterLink(
            handle_undefined(word[index - 1]).toLowerCase(),
            word[index].toLowerCase(),
            handle_undefined(word[index + 1]).toLowerCase(),
          )
        "
        :alt="'Slabbic' + ' \'' + word[index].toUpperCase() + '\''"
        :title="'Slabbic' + ' \'' + word[index].toUpperCase() + '\''"
        class="letter"
      />
    </template>
  </span>
</template>

<style scoped>
.inline {
  display: inline;
  margin: none;
}
.letter {
  height: 1em;
  vertical-align: text-top;

  width: auto;
  border: none;
  display: inline;

  margin: none;
  padding: none;
}
img {
  margin: none;

  image-rendering: pixelated;
}
</style>
