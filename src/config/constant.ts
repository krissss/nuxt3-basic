// 本地存储
export const I_STORAGE = {
  PREFIX: 'MyApp-', // 前缀
  KEYS: ['user'] as const, // 所有的 key 必须在此处定义
  DEFAULT_STORAGE: process.server ? 'cookies' : 'localStorage', // 'cookies', 'localStorage', 'sessionStorage'，开启了 ssr 只支持 cookies
}
