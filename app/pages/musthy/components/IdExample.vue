<template>
  <div class="idexample-flexcontainer">
    <div class="idexample-content">
      <h1>Binary Scale IDs</h1>
      <EdoSelect
        v-model="edo"
        :include_transpositions="true"
        @update_edo="
          (n, highlight) => {
            edo = n;
            // make sure to reset range_index too!
            range_index = 0;
            // make sure to apply highlight when data changes so it isn't ignored
            highlight_transpositions = highlight;
          }
        "
        @update_highlight="
          (highlight) => (highlight_transpositions = highlight)
        "
      />

      <table v-if="display_range.length > 0">
        <thead>
          <tr>
            <td>Decimal ID</td>
            <!-- You can't really have zero bits, 0edo would use one bit I think -->
            <td v-if="show_binary">{{ edo > 0 ? edo : 1 }}-bit Binary</td>
            <td>Pc Set</td>
          </tr>
        </thead>
        <tbody>
          <template v-for="id in display_range">
            <tr
              :class="
                !get_scale(id).includes(0) &&
                highlight_transpositions &&
                get_scale(id).length > 0
                  ? 'rowhighlight'
                  : null
              "
            >
              <td>
                <div class="cell-data">{{ id }}</div>
              </td>
              <td class="binary" v-if="show_binary">
                <div class="cell-data">{{ scaleID().bin(id, edo) }}</div>
              </td>
              <td>
                <div class="cell-data">
                  {{ String(get_scale(id).join(", ")) }}
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <div v-else>
        <p>Loading scales...</p>
      </div>
      <DisplayRange
        :edo="edo"
        @update_display_range="
          (range) => {
            display_range = range;
          }
        "
      />
    </div>
  </div>
</template>

<script setup>
import EdoSelect from "~/pages/musthy/components/EdoSelect.vue";
import DisplayRange from "~/pages/musthy/components/DisplayRange.vue";
import scaleID from "~/pages/musthy/composables/scaleid.js";

const props = defineProps(["getscalefunction", "showbinary"]);

const show_binary = ref(props.showbinary);

const edo = ref(12);

const get_scale = (id) => {
  return props.getscalefunction(id, edo.value);
};

const highlight_transpositions = ref(false);

const display_range = ref([]);
</script>

<style scoped>
.idexample-flexcontainer {
  display: flex;
  justify-content: center;
}

.idexample-content {
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px 20px 20px 20px;

  width: 60%;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: safe center;

  max-height: 550px;
  overflow-y: scroll;
}
@media only screen and (max-width: 500px) {
  .idexample-content {
    width: 95%;
    overscroll-behavior: auto;
  }
}

h1 {
  margin: 0px;
}
</style>
