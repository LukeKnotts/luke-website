<script setup>
import Header from "~/components/Header.vue";
</script>

<template>
  <div>
    <Header sectionlink="/codes" sectionname="Codes" />
    <h1>Scream Cipher</h1>
    <p>A substitution cipher for the 26-letter English alphabet.</p>
    <p>
      It was made by xkcd.com, seemingly as a joke based on the fact that all
      text in Scream Cipher looks kind of like screaming.
    </p>
    <img
      src="/images/langs-and-codes/scream-cipher-xkcd.png"
      title="AAAAAA A ÃA̧AȂA̦ ǍÅÂÃĀÁȂ AAAAAAA!"
      class="archive halfWidth"
    />
    <p>
      <span class="image-desc"
        >You can see the original webcomic
        <a href="https://xkcd.com/3054/">here</a>.</span
      >
    </p>
    <p>
      The cipher appeared in an xkcd web comic released on February 21st, 2025.
      The comic featured an image displaying the cipher with one person texting
      "A&#816;&#193;&#258;&#258;&#197;" to another, who replies
      "A&#816;&#7842;".
    </p>
    <p>
      The image comic featured the following mouseover text: "AAAAAA A ÃA̧AȂA̦
      ǍÅÂÃĀÁȂ AAAAAAA!"
    </p>
    <p>
      The comic also featured the following mouseover text: "In the Scream
      Cipher, messages consist of all As, with different letters distinguished
      using diacritics."
    </p>
    <p>Below is the scream cipher in a table.</p>
    <table>
      <thead>
        <tr>
          <td>English</td>
          <td>Scream</td>
          <td>HTML</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td>A</td>
          <td>&amp;#65;</td>
        </tr>
        <tr>
          <td>B</td>
          <td>&#550;</td>
          <td>&amp;#550;</td>
        </tr>
        <tr>
          <td>C</td>
          <td>A&#807;</td>
          <td>&amp;#65;&amp;#807;</td>
        </tr>
        <tr>
          <td>D</td>
          <td>A&#817;</td>
          <td>&amp;#65;&amp;#817;</td>
        </tr>
        <tr>
          <td>E</td>
          <td>&#193;</td>
          <td>&amp;#193;</td>
        </tr>
        <tr>
          <td>F</td>
          <td>A&#814;</td>
          <td>&amp;#65;&amp;#814;</td>
        </tr>
        <tr>
          <td>G</td>
          <td>A&#779;</td>
          <td>&amp;#65;&amp;#779;</td>
        </tr>
        <tr>
          <td>H</td>
          <td>A&#816;</td>
          <td>&amp;#65;&amp;#816;</td>
        </tr>
        <tr>
          <td>I</td>
          <td>A&#777;</td>
          <td>&amp;#65;&amp;#777;</td>
        </tr>
        <tr>
          <td>J</td>
          <td>A&#787;</td>
          <td>&amp;#65;&amp;#787;</td>
        </tr>
        <tr>
          <td>K</td>
          <td>&#7840;</td>
          <td>&amp;#7840;</td>
        </tr>
        <tr>
          <td>L</td>
          <td>&#258;</td>
          <td>&amp;#258;</td>
        </tr>
        <tr>
          <td>M</td>
          <td>&#461;</td>
          <td>&amp;#461;</td>
        </tr>
        <tr>
          <td>N</td>
          <td>&#194;</td>
          <td>&amp;#194;</td>
        </tr>
        <tr>
          <td>O</td>
          <td>&#197;</td>
          <td>&amp;#197;</td>
        </tr>
        <tr>
          <td>P</td>
          <td>A&#815;</td>
          <td>&amp;#65;&amp;#815;</td>
        </tr>
        <tr>
          <td>Q</td>
          <td>A&#804;</td>
          <td>&amp;#65;&amp;#804;</td>
        </tr>
        <tr>
          <td>R</td>
          <td>&#514;</td>
          <td>&amp;#514;</td>
        </tr>
        <tr>
          <td>S</td>
          <td>&#195;</td>
          <td>&amp;#195;</td>
        </tr>
        <tr>
          <td>T</td>
          <td>&#256;</td>
          <td>&amp;#256;</td>
        </tr>
        <tr>
          <td>U</td>
          <td>&#196;</td>
          <td>&amp;#196;</td>
        </tr>
        <tr>
          <td>V</td>
          <td>&#192;</td>
          <td>&amp;#192;</td>
        </tr>
        <tr>
          <td>W</td>
          <td>&#512;</td>
          <td>&amp;#512;</td>
        </tr>
        <tr>
          <td>X</td>
          <td>A&#829;</td>
          <td>&amp;#65;&amp;#829;</td>
        </tr>
        <tr>
          <td>Y</td>
          <td>A&#806;</td>
          <td>&amp;#65;&amp;#806;</td>
        </tr>
        <tr>
          <td>Z</td>
          <td>A&#823;</td>
          <td>&amp;#65;&amp;#823;</td>
        </tr>
      </tbody>
    </table>
    <p>
      I'm not too sure about my transciption of the character for "Z", but it's
      good enough --and at least that encoding isn't ambiguous. So yeah. Scream
      folks.
    </p>
  </div>
</template>
