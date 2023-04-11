<script lang="ts" setup>
import { usePageCounter } from '../__store'

const counter = usePageCounter()
</script>

<template>
  <div>
    <div><button @click="counter++">Left</button>: {{ counter }}</div>
  </div>
</template>
