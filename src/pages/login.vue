<script lang="ts" setup>
const form = reactive({
  username: 'admin',
  password: '123456',
})

const storeUser = useStoreUser()

async function handleLogin() {
  await storeUser.login(form.username, form.password)
  const redirect = storeUser.loginRedirect
  if (redirect) {
    storeUser.loginRedirect = ''
    navigateTo(redirect)
  }
  else {
    navigateTo('/')
  }
}
</script>

<template>
  <div>
    <div>username: <input v-model="form.username" type="text"></div>
    <div>password: <input v-model="form.password" type="password"></div>
    <div>
      <button @click="handleLogin()">
        登录
      </button>
    </div>
  </div>
</template>
