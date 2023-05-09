<script lang="ts" setup>
import ColumnLeft from './__components/ColumnLeft.vue'
import ColumnRight from './__components/ColumnRight.vue'

const lodashTest = ref('lodash test')
function toUpper() {
  lodashTest.value = __toUpper(lodashTest.value)
}
</script>

<template>
  <div>
    <div>about</div>
    <ColumnLeft />
    <ColumnRight />

    <div>
      {{ lodashTest }}
      <button @click="toUpper">
        toUpper
      </button>
    </div>
  </div>
</template>
