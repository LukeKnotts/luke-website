<script setup>
import Layout from "~/pages/langs/mclang/components/Layout.vue";
import Letter from "~/pages/langs/mclang/components/Letter.vue";
</script>

<template>
  <div>
    <Layout>
      <h1>Writing</h1>
      <p>
        Writing is built left-to-right in single rows, preferably surrounded by
        one layer of blocks on all sides, perhaps built into a wall.
      </p>
      <p>
        Letter symbol images are either ripped straight from Minecraft or are
        edited versions of Minecraft textures.
      </p>
      <p>
        The alphabet is designed so that all blocks needed for the language can
        be made with stone blocks and a stonecutter.
      </p>
      <hr />
      <h1>Alphabet</h1>
      <div class="alphabet">
        <ul>
          <p>1 - A - <Letter letter="a" /> - Cobblestone Block</p>
        </ul>
        <ul>
          <p>2 - B - <Letter letter="b" /> - Stone Block</p>
        </ul>
        <ul>
          <p>3 - C - <Letter letter="c" /> - Stone Brick Block</p>
        </ul>
        <br />
        <ul>
          <p>4 - D - <Letter letter="d" /> - Cobblestone Slab (lower)</p>
        </ul>
        <ul>
          <p>5 - E - <Letter letter="e" /> - Stone Slab (lower)</p>
        </ul>
        <ul>
          <p>6 - F - <Letter letter="f" /> - Stone Brick Slab (lower)</p>
        </ul>
        <br />
        <ul>
          <p>7 - G - <Letter letter="g" /> - Cobblestone Slab (upper)</p>
        </ul>
        <ul>
          <p>8 - H - <Letter letter="h" /> - Stone Slab (upper)</p>
        </ul>
        <ul>
          <p>9 - I - <Letter letter="i" /> - Stone Brick Slab (upper)</p>
        </ul>
        <br />
        <ul>
          <p>10 - J - <Letter letter="j" /> - Cobblestone Stair (left)</p>
        </ul>
        <ul>
          <p>11 - K - <Letter letter="k" /> - Stone Stair (left)</p>
        </ul>
        <ul>
          <p>12 - L - <Letter letter="l" /> - Stone Brick Stair (left)</p>
        </ul>
        <br />
        <ul>
          <p>13 - M - <Letter letter="m" /> - Cobblestone Stair (back)</p>
        </ul>
        <ul>
          <p>14 - N - <Letter letter="n" /> - Stone Stair (back)</p>
        </ul>
        <ul>
          <p>15 - O - <Letter letter="o" /> - Stone Brick Stair (back)</p>
        </ul>
        <br />
        <ul>
          <p>16 - P - <Letter letter="p" /> - Cobblestone Stair (right)</p>
        </ul>
        <ul>
          <p>17 - Q - <Letter letter="q" /> - Stone Stair (right)</p>
        </ul>
        <ul>
          <p>18 - R - <Letter letter="r" /> - Stone Brick Stair (right)</p>
        </ul>
        <br />
        <ul>
          <p>
            19 - S - <Letter letter="s" /> - Cobblestone Stair (upside down)
          </p>
        </ul>
        <ul>
          <p>20 - T - <Letter letter="t" /> - Stone Stair (upside down)</p>
        </ul>
        <ul>
          <p>
            21 - U - <Letter letter="u" /> - Stone Brick Stair (upside down)
          </p>
        </ul>
        <br />
        <ul>
          <p>22 - [space] - Word delimiter.</p>
        </ul>
        <ul>
          <p>23 - [double space] - Sentence delimiter.</p>
        </ul>
      </div>
    </Layout>
  </div>
</template>
