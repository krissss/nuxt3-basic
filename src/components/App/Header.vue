<script lang="ts" setup></script>

<template>
  <header class="header">
    <div class="logo-container" @click="navigateTo('/')">
      <img class="logo-img" src="/favicon.ico" alt="" />
      <span class="logo-name">{{ useAppConfig().appName }}</span>
    </div>
    <div class="menu">
      <div class="item"><NuxtLink to="/">Home</NuxtLink></div>
      <div class="item"><NuxtLink to="/about">About</NuxtLink></div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eaeaea;

  .logo-container {
    display: flex;
    align-items: center;
    padding-left: 20px;

    .logo-img {
      width: 40px;
    }

    .logo-name {
      margin-left: 10px;
      font-weight: bold;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    margin-right: 20px;

    .item {
      margin-right: 10px;
    }
  }
}
</style>
