<template>
  <div>
    <Layout>
      <h1>Text &rightarrow; Emoji Syntax Converter</h1>
      <p>
        Convert a text into those letters with specific prefixes and suffixes on
        either sides. This website is designed to convert an alphabetical cipher
        into a format that could be used to substitute the text with
        corresponding discord emojis, like emojis for each letter in
        <a href="./">Slabbic</a>!
      </p>
      <h2>Settings</h2>
      <p>
        <label for="prefix">Prefix:</label>&nbsp;<input
          id="prefix"
          v-model="prefix"
        />
        <label for="suffix">Suffix:</label>&nbsp;<input
          id="suffix"
          v-model="suffix"
        />
      </p>
      <p>
        <label for="casesetting">Case Setting:</label>&nbsp;
        <select
          id="casesetting"
          v-model="case_setting"
          @change="
            () => {
              input_text = process();
            }
          "
        >
          <option value="lower">All "lowercase"</option>
          <option value="upper">All "UPPERCASE"</option>
          <option value="none">None</option>
        </select>
      </p>
      <p>
        <label for="spacechar">Space Substitution:</label>&nbsp;<input
          id="spacechar"
          v-model="space_char"
        />
      </p>
      <h2><label for="textinput">Input</label></h2>
      <input
        id="textinput"
        class="converter-box"
        v-model="input_text"
        @keyup="
          () => {
            input_text = process();
          }
        "
      />
      <p>
        <button @click="copy_text(output_text)">Copy Text</button>
      </p>
      <h2>Output</h2>
      <input class="converter-box" :value="output_text" />
      <br />
      <p>
        Please enjoy using this to quickly convert letters into a different
        format!
      </p>
    </Layout>
  </div>
</template>

<script setup>
import Layout from "./components/Layout.vue";

const prefix = ref(":_");
const suffix = ref(":");
const case_setting = ref("lower");
const space_char = ref("space");

const input_text = ref("");
const output_text = computed(() => {
  let word = process();
  let output = "";
  for (let ii = 0; ii < word.length; ii++) {
    let letter = word[ii];
    switch (word[ii]) {
      case " ":
        letter = space_char.value;
        break;
      default:
        break;
    }
    output += prefix.value + letter + suffix.value;
  }
  return output;
});
const process = (input = input_text.value) => {
  let output = input;
  switch (case_setting.value) {
    case "lower":
      return output.toLowerCase();
      break;
    case "upper":
      return output.toUpperCase();
      break;
    default:
      return output;
      break;
  }
};

const copy_text = async (text) => {
  await navigator.clipboard.writeText(text);
};
</script>

<style scoped>
.converter-box {
  width: 60%;
  height: 5em;
}
</style>
