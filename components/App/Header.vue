<script lang="ts" setup></script>

<template>
  <div>
    <div @click="navigateTo('/')">
      <img src="/favicon.ico" alt=""> {{ useAppConfig().appName }}
    </div>
    <div>
      <div><NuxtLink to="/">Home</NuxtLink></div>
      <div><NuxtLink to="/about">About</NuxtLink></div>
    </div>
  </div>
</template>

<style scoped></style>
