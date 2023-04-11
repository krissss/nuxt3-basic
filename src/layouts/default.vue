<script lang="ts" setup></script>

<template>
  <div>
    <LayoutHeader />
    <div class="content">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>

<style scoped lang="scss">
.content {
  min-height: 300px;
}
</style>
