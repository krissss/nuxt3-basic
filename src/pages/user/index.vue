<script lang="ts" setup>
const storeUser = useStoreUser()

const handleLogout = async () => {
  await storeUser.logout()
  msgToast.success('退出成功')
  navigateTo('/')
}
</script>

<template>
  <div>
    <div>Hello {{ storeUser.name }}</div>
    <div><button @click="handleLogout()">退出登录</button></div>
  </div>
</template>
