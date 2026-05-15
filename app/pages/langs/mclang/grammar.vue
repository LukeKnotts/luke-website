<script setup>
import Layout from "~/pages/langs/mclang/components/Layout.vue";
import Letter from "~/pages/langs/mclang/components/Letter.vue";
</script>

<template>
  <div>
    <Layout>
      <h1>Grammar</h1>
      <p>How sentences are structured.</p>
      <h2>Word Order</h2>
      <p>
        Verbs go first. Other than that, the words that are the object or
        subject are conjugated to be such, and those words can be freely ordered
        from there.
      </p>
      <h2>Noun Conjugations</h2>
      <p>
        There are three conjugation classes of nouns. Nouns that <i>end</i> in
        <Letter letter="m" /> (M-nouns), <Letter letter="j" /> (J-nouns), or
        <Letter letter="h" /> (H-nouns).
      </p>
      <p>
        Nouns conjugate based on what role they play in a sentence. The
        conjugations are as follows:
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Object (dict. form)</th>
            <th>Subject Form</th>
            <th>Helper Form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>M-nouns</th>
            <td><Letter letter="m" /></td>
            <td><Letter letter="i" /></td>
            <td><Letter letter="v" /></td>
          </tr>
          <tr>
            <th>J-nouns</th>
            <td><Letter letter="j" /></td>
            <td><Letter letter="k" /></td>
            <td><Letter letter="c" /></td>
          </tr>
          <tr>
            <th>H-nouns</th>
            <td><Letter letter="h" /></td>
            <td><Letter letter="g" /></td>
            <td><Letter letter="p" /></td>
          </tr>
        </tbody>
      </table>
      <p>
        "Object form" or "Dictionary form" nouns are both the form that is
        typically listed in the dictionary, as well as the conjugation used to
        make that noun the object of the sentence's verb. "Subject form" is used
        to make a noun the subject of the sentence. "Helper form" is used in
        other cases like <span class="todo">[TODO]</span> (helper form + sub or
        obj form in clauses?).
      </p>
    </Layout>
  </div>
</template>
