<script setup>
import Header from "~/components/Header.vue";
</script>

<template>
  <div>
    <Header :array="[{ link: '/codes', name: 'Codes' }]" />
    <h1>Anne Frank's Numeric Substitution Cipher</h1>
    <p>
      On April 2nd, 2025, I began exploring
      <a href="https://www.annefrankmanuscripten.org/"
        >www.annefrankmanuscripten.org/</a
      >, a website that contains Anne Frank's diaries. I did not expect to find
      two substitution ciphers from Frank, and I knew immediately that I wanted
      to make note of these.
    </p>
    <p>
      However, I must make some disclaimers. First, if you click that link, you
      might find that it's blocked in your country, as it was for me. I used a
      VPN to get around that, so if the people who own the copyright to Anne
      Frank's work get mad at me, I will do my best to comply and remove this
      webpage. Secondly, I don't know Dutch. I'm pretty sure that's the language
      that the site used. While Google translate is cool, I have increased
      doubts about how well I am actually cataloguing this code. And last, I
      don't know a lot about history --I haven't even read all of the famous
      book of Anne Frank's diary writing. So I just want to disclose that I am
      not an expert on these topics.
    </p>
    <p>
      Disclaimers disclosed, this is a substitution cipher that pairs each of
      the 26 letters of the alphabet to a number. Interestly, similar numbers
      are clumped together, but the order seems to be random. Maybe Frank used
      some method to get this configuration, or maybe it's a random order.
    </p>
    <p>Below are screenshots from the website:</p>
    <img src="/images/codes/annefranknum/pagesandkey.png" />
    <img src="/images/codes/annefranknum/leftpage.png" />
    <img src="/images/codes/annefranknum/rightpage.png" />
  </div>
</template>

<style scoped>
img {
  width: 500px;
  border: solid black 2px;
  display: block;
  margin: 10px;
}
</style>
