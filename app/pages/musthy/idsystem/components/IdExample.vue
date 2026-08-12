<template>
  <div class="id-example-flexcontainer">
    <div class="id-example-content">
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

      <table>
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
      <div class="id-button">
        <p>
          <button
            @click="change_range('down')"
            :class="{ unavailable: !left_arrow }"
          >
            &leftarrow;</button
          >&emsp;
          <span class="cell-data"
            >{{ display_range[0]
            }}<span v-if="display_range[0] != display_range.at(-1)">
              - {{ display_range.at(-1) }}</span
            ></span
          >
          &emsp;<button
            @click="change_range('up')"
            :class="{ unavailable: !right_arrow }"
          >
            &rightarrow;
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import EdoSelect from "~/pages/musthy/components/EdoSelect.vue";
import scaleID from "~/pages/musthy/composables/scaleid.js";

const props = defineProps(["getscalefunction", "showbinary"]);

const show_binary = ref(props.showbinary);

const edo = ref(12);
// When using scale_count, remember to subtract -1 for size comparisons with index if zero-indexed. This "counts zero".
const scale_count = computed(() => {
  // "true" to count transpositions (as is standard in binary numbering)
  return scaleID().count_scales(edo.value, true);
});

const get_scale = (id) => {
  return props.getscalefunction(id, edo.value);
};

const highlight_transpositions = ref(false);

const display_amount = ref(100);
// initialize display range
const range_index = ref(0);
const display_range = computed(() => {
  if (scale_count.value - 1 < (range_index.value + 1) * display_amount.value) {
    return scaleID().range(
      range_index.value * display_amount.value,
      scale_count.value,
    );
  } else {
    return scaleID().range(
      range_index.value * display_amount.value,
      (range_index.value + 1) * display_amount.value,
    );
  }
});
const left_arrow = computed(() => {
  if (display_range.value[0] == 0) {
    return false;
  } else {
    return true;
  }
});
const right_arrow = computed(() => {
  // add one because we're looking if just beyond what's visible is out of bounds.
  if (display_range.value.at(-1) + 1 > scale_count.value - 1) {
    return false;
  } else {
    return true;
  }
});
const change_range = (direction) => {
  if (direction == "down") {
    range_index.value -= 1;
  } else if (direction == "up") {
    range_index.value += 1;
  } else {
    console.error("Invalid direction inputted to change_range() function.");
  }
};
</script>

<style scoped>
.id-example-flexcontainer {
  display: flex;
  justify-content: center;
}

.id-example-content {
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
  .id-example-content {
    width: 95%;
    overscroll-behavior: auto;
  }
}

h1 {
  margin: 0px;
}

.id-button {
  border: 1px solid black;
  padding: 10px;
  margin-top: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #e2e2e2;
}
.id-button p {
  margin: 0px;
}
</style>
