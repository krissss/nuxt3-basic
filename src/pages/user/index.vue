<script lang="ts" setup>
const storeUser = useStoreUser()

async function handleLogout() {
  await storeUser.logout()
  msgToast.success('退出成功')
  navigateTo('/')
}
</script>

<template>
  <div>
    <div>Hello {{ storeUser.name }}</div>
    <div>
      <button @click="handleLogout()">
        退出登录
      </button>
    </div>
  </div>
</template>
