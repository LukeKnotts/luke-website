<template>
  <div class="id-button">
    <p>
      <button
        @click="
          () => {
            change_range('down');
          }
        "
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
        @click="
          () => {
            change_range('up');
          }
        "
        :class="{ unavailable: !right_arrow }"
      >
        &rightarrow;
      </button>
    </p>
  </div>
</template>

<script setup>
import scaleID from "~/pages/musthy/composables/scaleid.js";

const props = defineProps(["edo"]);
const edo = ref(props.edo);

const unwatch_edo = watch(
  () => props.edo,
  (oldValue, newValue) => {
    edo.value = props.edo;
  },
);

const emit = defineEmits(["update_display_range"]);

// When using scale_count, remember to subtract -1 for size comparisons with index if zero-indexed. This "counts zero".
const scale_count = computed(() => {
  // "true" to count transpositions (as is standard in binary numbering)
  return scaleID().count_scales(edo.value, true);
});

const display_range = computed(() => {
  if (
    scale_count.value - 1 <
    (display_range_index.value + 1) * display_amount.value
  ) {
    return scaleID().range(
      display_range_index.value * display_amount.value,
      scale_count.value,
    );
  } else {
    return scaleID().range(
      display_range_index.value * display_amount.value,
      (display_range_index.value + 1) * display_amount.value,
    );
  }
});

const display_amount = ref(100);
// initialize display range
const display_range_index = ref(0);
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
    display_range_index.value -= 1;
  } else if (direction == "up") {
    display_range_index.value += 1;
  } else {
    console.error("Invalid direction inputted to change_range() function.");
  }
  update_range();
};

const update_range = () => {
  emit("update_display_range", display_range.value);
};

const unwatch_range = ref(() => {});

// initialize display range
onMounted(() => {
  update_range();
  unwatch_range.value = watch(edo, async (newValue, oldValue) => {
    console.log(display_range.value);
    display_range_index.value = 0;
    update_range();
  });
});
onUnmounted(() => {
  unwatch_range.value();
  unwatch_edo;
});
</script>

<style scoped>
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
