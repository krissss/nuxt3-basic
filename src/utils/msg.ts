export const msgToast = {
  show(message: string, type = 'info') {
    if (process.server) {
      // 服务端处理，可以记录日志
      return
    }
    // 客户端弹出提示
    // eslint-disable-next-line no-alert
    alert(`${type.toUpperCase()}: ${message}`)
  },
  error(msg: string) {
    this.show(msg, 'error')
  },
  success(msg: string) {
    this.show(msg, 'success')
  },
  warning(msg: string) {
    this.show(msg, 'warning')
  },
  info(msg: string) {
    this.show(msg, 'info')
  },
}
