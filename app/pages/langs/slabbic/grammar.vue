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
        A sentence has three core words. At minimum it must have a verb, and it
        may also have subject and object nouns. These words can go anywhere in
        the sentence, but clauses, adjectives, and other attached words are
        ordered relative to the core words.
      </p>
      <h3>Example</h3>
      <p>
        This means that both <Letter roman="cbe bdbxji oh" class="islab" /> and
        <Letter roman="oh bdbxji cbe" class="islab" /> are valid translations of
        "Unity creates Acacia wood". The order of the words is entirely up to
        the author.
      </p>
      <hr />
      <h2>Noun Declensions</h2>
      <p>
        There are three
        <a href="https://en.wikipedia.org/wiki/Declension">declension</a>
        classes of nouns. Nouns that <i>end</i> in
        <Letter roman="m" /> (M-nouns), <Letter roman="j" /> (J-nouns), or
        <Letter roman="h" /> (H-nouns).
      </p>
      <p>
        Nouns decline based on what role they play in a sentence. The
        declensions are as follows:
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Object (dict. form)</th>
            <th>Subject Form</th>
            <th>Verb Form</th>
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
        typically listed in the dictionary, as well as the declension used to
        make that noun the object of the sentence's verb. "Subject form" is used
        to make a noun the subject of the sentence. "Verb form" is a declension
        that turns the noun into a verb, like how we jokingly verb nouns to turn
        them into action words. Because nouns decline, you can easily list
        multiple subjects, objects and verbs anywhere in the sentence if you
        need to talk about multiple things.
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
        <i>Flexible Verbs</i>, conjugate to specify whether or not they have an
        object.
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
      <h2>Making Verbs into Nouns</h2>
      <p>
        To make a verb into a noun, you add the noun prefix "<Letter
          roman="a"
        />" to the beginning of the verb and give it a suffix to indicate what
        role it plays in the sentence. Add the "<Letter roman="w" />" suffix to
        make the word in dictionary/object form, and use the "<Letter
          roman="y"
        />" suffix to make the word in subject form.
      </p>
      <p>
        In order to make a larger sentence into a noun, you must add the affixes
        to your verb as explained above, and then you can use grammatical words
        to attach subjects and objects to your verb. The subject clause,
        initiated with "<Letter roman="1u" />", makes any following nouns the
        subjects of your verb. The object clause, initiated with "<Letter
          roman="zk"
        />", makes any following nouns the objects of your verb. Any nouns
        listed in these clauses must be in dictionary/object form, and can only
        be placed immediately after their grammatical words. Preventing the
        nouns in these clauses from declining helps remove confusion as to what
        role they play in the sentence at large. Either the subject clause or
        the object clause can be listed first, but they must immediately follow
        the noun-ed verb in question.
      </p>
      <hr />
      <h2>Slabbic Romanization</h2>
      <p>
        There are 27 letters in the slabbic language (excluding spaces). These
        letters are romanized by mapping each one to a latin letter, with the
        numeral "1" used to cover the last slabbic character. See the
        <a href="/langs/slabbic/writing">alphabet page</a> to see the exact
        mapping. For example, the Slabbic "<Letter roman="oh" />" (meaning
        Acacia Woord) romanizes as "oh".
      </p>
      <p>
        To take romanized text and convert it the other way into a slabbic form,
        you simply do the same thing in reverse. Each latin letter already
        corresponds to a slabbic character. For example, the name "Luke Knotts"
        is written as <Letter roman="Luke Knotts" class="islab" /> in Slabbic.
        If anyone's curious, on the developer side of this website, I have a
        special component that converts romanizations into their Slabbic form.
      </p>
      <hr />
      <p><Letter roman="klkl kalbl mlm" /></p>
    </Layout>
  </div>
</template>
