<template>
  <div class="everything">
    <Header />
    <h1>
      Copy Paste Symbols &nbsp;
      <span class="normal"><a href="/">lukeknotts.com</a></span>
    </h1>
    <hr />
    <h2>Greek</h2>
    <table>
      <tbody>
        <tr>
          <th>Pi</th>
          <th>&#x1d70b;</th>
          <th>Italic Pi</th>
          <th>&#x1d71b;</th>
        </tr>
        <tr>
          <th>Theta</th>
          <th>&#x03b8;</th>
          <th>Theta (italic)</th>
          <th>&#x1d703;</th>
        </tr>
        <tr>
          <th>Phi</th>
          <th>&#x03c6;</th>
          <th>Phi (italic)</th>
          <th>&#x1d711;</th>
        </tr>
      </tbody>
    </table>
    <h2>Math Symbols</h2>
    <table>
      <tbody>
        <tr>
          <th>Euler's Number "e"</th>
          <th>&#x212f;</th>
        </tr>
        <tr>
          <th>Minus sign</th>
          <th>&#x2212;</th>
        </tr>
        <tr>
          <th>Infinity</th>
          <th>&infin;</th>
        </tr>
        <tr>
          <th>Union</th>
          <th>&#x22c3;</th>
        </tr>
        <tr>
          <th>Imaginary "i"</th>
          <th>&#x1d456;</th>
          <th>Vector "j"</th>
          <th>&#x1d457;</th>
        </tr>
        <tr>
          <th>Dot operator</th>
          <th>&#x22c5;</th>
        </tr>
        <tr>
          <th>Magnitude bars</th>
          <th>| &#x1d465; |</th>
        </tr>
        <tr>
          <th>Empty Set</th>
          <th>&#x2205;</th>
        </tr>
        <tr>
          <th>Approximation</th>
          <th>&#x2248;</th>
        </tr>
        <tr>
          <th>Summation</th>
          <th>&#x2211;</th>
        </tr>
      </tbody>
    </table>
    <h2>Misc.</h2>
    <table>
      <tbody>
        <tr>
          <th>Constantine</th>
          <th>&#x2102;</th>
          <th>&#x2102;onstantine</th>
        </tr>
        <tr>
          <th>Cent</th>
          <th>&cent;</th>
        </tr>
      </tbody>
    </table>
    <h2>Phrases:</h2>
    <table>
      <tbody>
        <tr>
          <th>Beautiful equation</th>
          <th>&lceil;&#x1d452;&rceil; = &lfloor;&#x1d70b;&rfloor;</th>
        </tr>
        <tr>
          <th>Luke</th>
          <th>&#x30eb;&#x30fc;&#x30af;</th>
        </tr>
        <tr>
          <th>Bear face</th>
          <th>&#661;&bullet;&#x1d25;&bullet;&#660;</th>
        </tr>
      </tbody>
    </table>
    <h2>Letters</h2>
    <table>
      <tbody>
        <tr>
          <th>Italics</th>
          <th>
            &#x1d44e; &nbsp; &#x1d44f; &nbsp; &#x1d450; &nbsp; &#x1d451; &nbsp;
            &#x1d452; &nbsp; &#x1d453; &nbsp; &#x1d454; &nbsp; &#x210e; &nbsp;
            &#x1d456; &nbsp; &#x1d457; &nbsp; &#x1d458; &nbsp; &#x1d459; &nbsp;
            &#x1d45a; &nbsp; &#x1d45b; &nbsp; &#x1d45c; &nbsp; &#x1d45d; &nbsp;
            &#x1d45e; &nbsp; &#x1d45f; &nbsp; &#x1d460; &nbsp; &#x1d461; &nbsp;
            &#x1d462; &nbsp; &#x1d463; &nbsp; &#x1d464; &nbsp; &#x1d465; &nbsp;
            &#x1d466; &nbsp; &#x1d467;
          </th>
        </tr>
        <tr>
          <th>Bold</th>
          <th>
            &#x1d41a; &nbsp; &#x1d41b; &nbsp; &#x1d41c; &nbsp; &#x1d41d; &nbsp;
            &#x1d41e; &nbsp; &#x1d41f; &nbsp; &#x1d420; &nbsp; &#x1d421; &nbsp;
            &#x1d422; &nbsp; &#x1d423; &nbsp; &#x1d424; &nbsp; &#x1d425; &nbsp;
            &#x1d426; &nbsp; &#x1d427; &nbsp; &#x1d428; &nbsp; &#x1d429; &nbsp;
            &#x1d42a; &nbsp; &#x1d42b; &nbsp; &#x1d42c; &nbsp; &#x1d42d; &nbsp;
            &#x1d42e; &nbsp; &#x1d42f; &nbsp; &#x1d430; &nbsp; &#x1d431; &nbsp;
            &#x1d432; &nbsp; &#x1d433;
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import Header from "/components/Header.vue";
</script>

<style scoped>
/* Generic Styles */

.everything {
  background-color: white;

  padding: 20px;
  margin-left: auto;
  margin-right: auto;

  width: 90%;
  max-width: 1000px;
}

div {
  margin: none;
  padding: none;

  width: 100%;
}

h1 {
  color: black;

  font-family: "Times New Roman", Times, serif;

  font-size: 28px;
}

h2 {
  text-decoration: underline;

  font-size: 22px;

  color: rgb(107, 107, 164);
}

p,
tr,
th {
  background-color: white;
  color: black;

  font-family: "Times New Roman", Times, serif;

  font-size: 20px;

  margin-left: auto;
  margin-right: auto;

  padding: 5px;
  padding-right: 40px;

  border-right: 2px;
  border-color: black;
}

.normal a {
  color: rgb(114, 163, 179);
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: underline;
  font-size: 18px;
}
</style>
