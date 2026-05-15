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
          <p>1 - A - <Letter roman="a" /> - Cobblestone Block</p>
        </ul>
        <ul>
          <p>2 - B - <Letter roman="b" /> - Stone Block</p>
        </ul>
        <ul>
          <p>3 - C - <Letter roman="c" /> - Stone Brick Block</p>
        </ul>
        <br />
        <ul>
          <p>4 - D - <Letter roman="d" /> - Cobblestone Slab (lower)</p>
        </ul>
        <ul>
          <p>5 - E - <Letter roman="e" /> - Stone Slab (lower)</p>
        </ul>
        <ul>
          <p>6 - F - <Letter roman="f" /> - Stone Brick Slab (lower)</p>
        </ul>
        <br />
        <ul>
          <p>7 - G - <Letter roman="g" /> - Cobblestone Slab (upper)</p>
        </ul>
        <ul>
          <p>8 - H - <Letter roman="h" /> - Stone Slab (upper)</p>
        </ul>
        <ul>
          <p>9 - I - <Letter roman="i" /> - Stone Brick Slab (upper)</p>
        </ul>
        <br />
        <ul>
          <p>10 - J - <Letter roman="j" /> - Cobblestone Stair (left)</p>
        </ul>
        <ul>
          <p>11 - K - <Letter roman="k" /> - Stone Stair (left)</p>
        </ul>
        <ul>
          <p>12 - L - <Letter roman="l" /> - Stone Brick Stair (left)</p>
        </ul>
        <br />
        <ul>
          <p>13 - M - <Letter roman="m" /> - Cobblestone Stair (back)</p>
        </ul>
        <ul>
          <p>14 - N - <Letter roman="n" /> - Stone Stair (back)</p>
        </ul>
        <ul>
          <p>15 - O - <Letter roman="o" /> - Stone Brick Stair (back)</p>
        </ul>
        <br />
        <ul>
          <p>16 - P - <Letter roman="p" /> - Cobblestone Stair (right)</p>
        </ul>
        <ul>
          <p>17 - Q - <Letter roman="q" /> - Stone Stair (right)</p>
        </ul>
        <ul>
          <p>18 - R - <Letter roman="r" /> - Stone Brick Stair (right)</p>
        </ul>
        <br />
        <ul>
          <p>19 - S - <Letter roman="s" /> - Cobblestone Stair (up left)</p>
        </ul>
        <ul>
          <p>20 - T - <Letter roman="t" /> - Stone Stair (up left)</p>
        </ul>
        <ul>
          <p>21 - U - <Letter roman="u" /> - Stone Brick Stair (up left)</p>
        </ul>
        <br />
        <ul>
          <p>22 - V - <Letter roman="v" /> - Cobblestone Stair (up back)</p>
        </ul>
        <ul>
          <p>23 - W - <Letter roman="w" /> - Stone Stair (up back)</p>
        </ul>
        <ul>
          <p>24 - X - <Letter roman="x" /> - Stone Brick Stair (up back)</p>
        </ul>
        <br />
        <ul>
          <p>25 - Y - <Letter roman="y" /> - Cobblestone Stair (up right)</p>
        </ul>
        <ul>
          <p>26 - Z - <Letter roman="z" /> - Stone Stair (up right)</p>
        </ul>
        <ul>
          <p>27 - ZA - <Letter roman="1" /> - Stone Brick Stair (up right)</p>
        </ul>
        <br />
        <ul>
          <p>28 - [space] - Word delimiter.</p>
        </ul>
        <ul>
          <p>29 - [double space] - Sentence delimiter.</p>
        </ul>
      </div>
    </Layout>
  </div>
</template>
