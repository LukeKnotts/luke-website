<template>
  <div>
    <Layout>
      <h1>ID Systems for Musical Scales</h1>
      <p>by Luke Knotts</p>
      <hr />
      <p>How do you make an ID system for musical scales?</p>
      <p>
        Having labels for musical scales make them easy to organize on a
        website. Specifically, labels make it easy to know which musical scales
        to show viewers without having to access <i>all</i> of the scales that
        exist.
      </p>
      <p>So what ID systmes are already out there?</p>
      <h1>Naming Scales</h1>
      <p>
        The most common way to label specific scales is by giving them names.
        Some of the most common scale names include the "Major scale", "Natural
        Minor scale", "Harmonic Minor scale", and the "Pentatonic scale".
      </p>
      <p>
        One downside to scale names is that they usually can't be determined
        just by looking at the scale. Instead, they often have explanations
        rooted in history and culture.
      </p>
      <p>
        The music theorist <i>Ian Ring</i> has a
        <a href="https://ianring.com/musictheory/scales/finder/"
          >large database</a
        >
        of musical scales along with a wealth of scale names from a variety of
        naming systems.
      </p>
      <p>
        Another downside to traditional names is that they simply don't exist
        for scales that haven't been named yet.
      </p>
      <p>
        Let's look at another system that can generate names for an
        <i>arbitrary</i> amount of scales.
      </p>
      <h1>Describing Scales</h1>
      <p>
        Describing a scale is a simple way of labeling it. All you need to do is
        explain what tuning system you are using, and then state the notes that
        are in that scale.
      </p>
      <p>
        For example, if I explained that I was using
        <a href="https://musiccrashcourses.com/lessons/tuning_systems.html"
          >12-tone equal temperment</a
        >
        tuning and that my scale had the notes "C", "D", "E", "F", "G", "A", and
        "B", you would know that I was talking about the C Major scale.
      </p>
      <p>
        The main downside with this system is that it is cumbersome. Stating
        every note present in your scale is not very convenient.
      </p>
      <p>It also has another problem.</p>
    </Layout>
  </div>
</template>

<script setup>
import Layout from "~/pages/musthy/components/Layout.vue";
</script>
