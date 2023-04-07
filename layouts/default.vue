<script lang="ts" setup></script>

<template>
  <div>
    <AppHeader />
    <div class="content">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.content {
  min-height: 300px;
}
</style>
