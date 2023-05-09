<script lang="ts" setup></script>

<template>
  <header class="header">
    <div class="flex items-center pl-5" @click="navigateTo('/')">
      <img class="w-10" src="~/assets/images/logo.png" alt="">
      <span class="ml-2.5 font-bold">{{ useAppConfig().appName }}</span>
    </div>
    <div class="menu">
      <div class="item">
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/about">
          About
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/user">
          User
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  @apply flex items-center justify-between py-2.5;
  border-bottom: 1px solid #eaeaea;

  .menu {
    @apply flex items-center mr-5;

    .item {
      @apply mr-2.5;
    }
  }
}
</style>
