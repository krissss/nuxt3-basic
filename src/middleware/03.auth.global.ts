import { msgToast } from '~/utils/msg'

export default defineNuxtRouteMiddleware(to => {
  const permissionPaths = ['/user']

  const storeUser = useStoreUser()
  if (storeUser.isLogin) {
    // 已登录
    return
  }
  // 未登录
  if (to.path === '/login') {
    // 登录页忽略
    return
  }
  // 需要登录的页面
  if (permissionPaths.includes(to.path)) {
    // 需要登录的页面
    storeUser.loginRedirect = to.path
    msgToast.error('请先登录')
    return navigateTo('/login')
  }
  // 无需登录的页面忽略
})
