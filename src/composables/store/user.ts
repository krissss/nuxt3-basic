export const useStoreUser = definePiniaStore('user', {
  state: () => {
    return {
      user: null as TypeApp.User | null,
      loginRedirect: '',
    }
  },
  getters: {
    isLogin: state => !!state.user?.id,
    name: state => state.user?.name ?? '',
  },
  actions: {
    async login(username: string, password: string) {
      // 伪造的登录
      await promiseSleep(500)
      this.user = {
        id: 1,
        name: username.toUpperCase(),
        access_token: password,
      }
    },
    async logout() {
      await promiseSleep(500)
      this.user = null
    },
  },
  persist: {
    paths: ['user'],
  },
})
