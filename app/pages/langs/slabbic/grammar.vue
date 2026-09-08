<script setup>
import Layout from "~/pages/langs/slabbic/components/Layout.vue";
import Letter from "~/pages/langs/slabbic/components/Letter.vue";

useHead({
  title: "Slabbic - Grammar",
});
</script>

<template>
  <div>
    <Layout>
      <h1>Grammar</h1>
      <p>
        How sentences are structured in the
        <a href="/langs/slabbic">Slabbic</a>.
      </p>
      <hr />
      <h2>Word Order</h2>
      <p>
        Slabbic has free word order. The sentence's main verb, object, and
        subject can go anywhere, and additional words are placed relative to
        these words.
      </p>
      <p>
        Thus, the main verbs, subjects, and objects of a sentence are called
        "<span class="highlight">Core words</span>", and are essentially the
        roots of a sentence.
      </p>
      <h3>Example</h3>
      <p>
        Both <Letter roman="cbe bdbxji oh" class="islab" /> and
        <Letter roman="oh bdbxji cbe" class="islab" /> are valid translations of
        "Unity creates Acacia Trees". The order of the core words is entirely up
        to the author.
      </p>
      <hr />
      <h2>Multiple Core Words</h2>
      <p>
        In Slabbic, a sentence can have as many of each kind of core word as you
        wish. You can list multiple subjects, objects and verbs anywhere in a
        sentence.
      </p>
      <h3>Example</h3>
      <p>
        Using multiple of each kind of core word with free word order allows one
        to write sentences like <Letter />
      </p>
      <hr />
      <h2>Noun Declensions</h2>
      <p>
        Because of Slabbic's free word order, the role of a noun in a sentence
        is determined by
        <a
          href="https://en.wikipedia.org/wiki/Declension"
          target="_blank"
          class="external-link"
          >declension</a
        >. Nouns come in three types, those that end in
        <Letter roman="m" /> (M-nouns), those that end in
        <Letter roman="j" /> (J-nouns), and those that end in
        <Letter roman="h" /> (H-nouns). Nouns decline differnetly based on these
        endings.
      </p>
      <p>
        There are three declensions a given noun can take on. An "<span
          class="highlight"
          >Object</span
        >" / "<span class="highlight">Dictionary</span>" form, a "<span
          class="highlight"
          >Subject</span
        >" form, and a "<span class="highlight">Verb</span>" form.
      </p>
      <p>
        The below table indicates how the different kinds of noun decline when
        used in different parts of a sentence.
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
        "<span class="highlight">Object form</span>", also called "<span
          class="highlight"
          >Dictionary form</span
        >", is used as a base form of the word to be listed in dictionaries.
        This <i>Object form</i> is also used to indicate the sentence's core
        object(s).
      </p>
      <p>
        "<span class="highlight">Subject form</span>" is used to make a noun the
        subject of the sentence.
      </p>
      <p>
        "<span class="highlight">Verb form</span>" is a declension that turns
        the noun into a verb, like how we often <i>verb</i> nouns in English to
        turn them into action words. Nouns often have specific meanings when
        used in <i>Verb form</i> (these are listed with the word's definition in
        the <a href="./dictionary">dictionary</a>). However, in other cases,
        verbing a word has a context-dependent meaning that is completely up to
        the author, or a noun is verbed that has yet to have an established verb
        meaning.
      </p>
      <hr />
      <h2>Plural Nouns</h2>
      <p>
        By default, it is implied through context whether or not a noun is
        plural or singular. "<span class="highlight">Noun Affixes</span>" are
        used to concretely specify a noun's count.
      </p>
      <hr />
      <h2>Verb Types</h2>
      <p>
        In Slabbic, verbs conjugate based on whether or not they have objects.
        This allows speakers to omit nouns from a sentence while still
        indicating that an object exists. Some verbs do not conjugate however,
        and play a stricter role. "<span class="highlight"
          >Strictly <span class="underline">In</span>transitive</span
        >" verbs can never have an object, while "<span class="highlight"
          >Strictly Transitive</span
        >" verbs always have an object. Because of these words' 'strict' roles,
        they do not need to conjugate. All of the other verbs, called "<span
          class="highlight"
          >Flexible Verbs</span
        >", conjugate to specify whether or not they have an object.
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
      <p>
        Noun-ed verbs are an exception to this rule, instead working
        context-dependently. A noun in "Verb form" does not have any suffixes
        telling the reader what role it is playing.
      </p>
      <hr />
      <h2>Making Verbs into Nouns</h2>
      <p>
        To make a verb into a noun, the noun prefix "<Letter roman="a" />" is
        added to the beginning of the verb. If the word is in dictionary/object
        form, no suffix is added to the word. If you need to indicated that the
        noun-ed verb is in subject form, the "<Letter roman="y" />" suffix is
        added to the word.
      </p>
      <hr />
      <h2>Converting a Verb with Subjects and Objects into a Noun</h2>
      <p>
        In order to convert a verb with subject(s) and/or object(s) into a noun,
        the normal noun conversion affixes are applied to verb, and then
        grammatical words are used to attach subjects and objects to that verb.
        The subject clause, initiated with the word "<Letter roman="1u" />",
        makes any following nouns the subjects of your verb. The object clause,
        initiated with the word "<Letter roman="zk" />", makes any following
        nouns the objects of your verb. Any nouns listed in these clauses must
        be in dictionary/object form, and can only be placed immediately after
        their grammatical words. Preventing the nouns in these clauses from
        declining helps remove confusion as to what role they play in the
        sentence at large. Either the subject clause or the object clause can be
        listed first, but they must immediately follow the noun-ed verb in
        question.
      </p>
      <p>
        It is worth noting that if multiple nouns are listed in an object
        clause, it can be ambiguous whether or not any of them beyond the first
        noun are a part of the object clause or are simply core words of the
        sentence at large. This is can be fixed by listing the object clause
        before the subject clause, as clause-ed noun words must be written in
        sequence, but this method only works to disambiguate phrases that use
        both an object clause and a subject clause.
      </p>
      <hr />
      <h2>Verb Tense</h2>
      <p>
        By default, verb tense is implied through context. To specify a tense, a
        "<span class="highlight">Verb Affix</span>" can be used.
      </p>
      <hr />
      <h2>Affix Descriptive Words</h2>
      <p>
        Descriptive words in Slabbic are <i>affixes</i>, meaning they are
        attached to a word. They can come immediately after (suffixes) or
        immediately before (prefixes) the words that they describe or alter.
        They come in four classes: descriptive words for nouns called "<span
          class="highlight"
          >Noun Affixes</span
        >", descriptive words for verbs called "<span class="highlight"
          >Verb Affixes</span
        >", words that can describe nouns and verbs called "<span
          class="highlight"
          >Multi Affixes</span
        >", and special "<span class="highlight">Affix Affixes</span>" which
        describe or alter other affixes.
      </p>
      <p>
        Examples of "<span class="highlight">Noun Affixes</span>" include the
        prefix "<Letter roman="b" />-", which means that the noun is large in
        size, literally or metaphorically; and the suffix "-<Letter
          roman="cc"
        />", which means planks made from the used noun (likely some kind of
        wood).
      </p>
      <p>
        Examples of "<span class="highlight">Verb Affixes</span>" include the
        suffix "-<Letter roman="d" />", which means that the verb happened in
        the past; and the prefix "<Letter roman="a" />-", which turns a verb
        into a noun meaning the action of doing that verb.
      </p>
      <p>
        An example of a "<span class="highlight">Multi Affix</span>" (i.e., can
        apply to either nouns or verbs) is the prefix "<Letter roman="v2" />-",
        which changes a verb or noun to mean the <i>opposite</i> of that word.
        This could be context dependent, especially if a word has multiple
        meanings, like changing "fire" into "ice" in one context, and changing
        "fire" into "hire" in another context.
      </p>
      <h2>Turning Affixes into Nouns</h2>
      <p>
        Affixes can be turned into nouns with a special "<span class="highlight"
          >Affix Affix</span
        >" (that is, an affix that alters another affix) prefix "<Letter
          roman="yy"
        />-" which turns an affix into a noun meaning "the property of having
        that affix". For example, "<Letter roman="yyd" />" means "the property
        of having happened in the past".
      </p>
      <p></p>
      <hr />
      <h2>Specific Affix Uses</h2>
      <p>
        Some <i>Noun + Affix</i> combinations have established, perhaps
        arbitrary meanings in Slabbic. For example, "<Letter roman="chjga" />"
        (using the affix "-<Letter roman="ga" />" meaning 'material made from
        ~') usually refers to "Oak wood logs", even though it technically could
        refer to Oak leaves, or even sticks or apples as well.
      </p>
      <hr />
      <h2>Slabbic Romanization</h2>
      <p>
        There are 30 letters in the slabbic language (excluding spaces). These
        letters are romanized by mapping each one to a latin letter with the
        numerals "1" through "4" used to cover the last slabbic characters. See
        the
        <a href="/langs/slabbic/alphabet">alphabet page</a> for the exact
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
      <h2>Suffix Appending for Foreign Nouns</h2>
      <p>
        Say you wanted to convert something into a noun and that was not a
        normal Slabbic word, such as a loan word. It coule be ambiguous what
        role that word plays in a sentence if it doesn't end in a typical noun
        declension (if it did, it is typical to then decline the word as if it
        were a Slabbic word, even using a declined form as the 'dictionary form'
        of the word in Slabbic). In these unconforming cases, the base form of
        the word is considered the "Object" or dictionary form, and the suffixes
        "-<Letter roman="b" />" and "-<Letter roman="z" />" change the word into
        the "Subject" and "Verb" forms, respectively. This creates the "<span
          class="highlight"
          >B-noun</span
        >" class, as shown in the below table.
      </p>
      <table>
        <thead>
          <tr>
            <th>Object (dict. form)</th>
            <th>Subject Form</th>
            <th>Verb Form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>[base form]</td>
            <td>-<Letter roman="b" /></td>
            <td>-<Letter roman="z" /></td>
          </tr>
        </tbody>
      </table>
      <p>
        Thus if you wanted to convert the foreign name "<Letter roman="luke" />
        (Luke)" into a Slabbic noun, "<Letter roman="luke" />" would represent
        the dictionary form, "<Letter roman="lukeb" />" would represent the
        subject form, and "<Letter roman="lukez" />" would represent the verb
        form.
      </p>
      <hr />
    </Layout>
  </div>
</template>
