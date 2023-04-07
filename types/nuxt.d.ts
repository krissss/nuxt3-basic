declare module '@nuxt/schema' {
  interface AppConfigInput {
    /** 应用名称 */
    appName: string
  }
}
// 在扩充类型时，确保导入/导出某些内容总是很重要的
export {}
