<script setup>
import Layout from "~/pages/langs/slabbic/components/Layout.vue";
import Letter from "~/pages/langs/slabbic/components/Letter.vue";
</script>

<template>
  <div>
    <Layout>
      <h1>Grammar</h1>
      <p>How sentences are structured.</p>
      <hr />
      <h2>Word Order</h2>
      <p>
        Verbs go first. Other than that, the words that are the object or
        subject are conjugated to be such, and those words can be freely ordered
        from there.
      </p>
      <h3>Example</h3>
      <p>
        This means that both <Letter roman="cbe bdbxji oh" class="islab" /> and
        <Letter roman="cbe oh bdbxji" class="islab" /> are valid translations of
        "Unity creates Acacia wood". The order of the words
        <Letter roman="bdbxji" class="islab" /> and
        <Letter roman="oh" class="islab" /> is entirely up to the author.
      </p>
      <hr />
      <h2>Noun Conjugations</h2>
      <p>
        There are three conjugation classes of nouns. Nouns that <i>end</i> in
        <Letter roman="m" /> (M-nouns), <Letter roman="j" /> (J-nouns), or
        <Letter roman="h" /> (H-nouns).
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
            <td><Letter roman="m" /></td>
            <td><Letter roman="i" /></td>
            <td><Letter roman="v" /></td>
          </tr>
          <tr>
            <th>J-nouns</th>
            <td><Letter roman="j" /></td>
            <td><Letter roman="k" /></td>
            <td><Letter roman="c" /></td>
          </tr>
          <tr>
            <th>H-nouns</th>
            <td><Letter roman="h" /></td>
            <td><Letter roman="g" /></td>
            <td><Letter roman="p" /></td>
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
      <hr />
      <h2>Verb Types</h2>
      <p>
        In Slabbic, verbs conjugate to tell you whether or not they have
        objects. This way, you can leave out the nouns of a sentence and still
        get a meaning across. Some verbs do not conjugate however, and play a
        stricter role. <i>Strictly Intransitive</i> verbs can never have an
        object, while <i>Strictly Transitive</i> verbs always have an object, so
        no conjugation is necessary. All of the other verbs, called
        <i>Flexible Verbs</i>, however, conjugate to specify whether or not they
        have an object.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Transitive (dict.)</th>
            <th>Intransitive form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Flexible Verbs</th>
            <td>
              <Letter roman="e" />
            </td>
            <td><Letter roman="1" /></td>
          </tr>
        </tbody>
      </table>
    </Layout>
  </div>
</template>
