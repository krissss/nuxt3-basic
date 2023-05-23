import type { H3Event } from 'h3'

function proxy(event: H3Event) {
  const dirname = 'api' // 同当前目录名
  const runtimeConfig = useRuntimeConfig()
  const url = `${runtimeConfig.api.base_url}/${event.node.req.url!.slice(`/${dirname}/`.length)}`
  if (runtimeConfig.api.log) {
    // eslint-disable-next-line no-console
    console.log(`proxy: ${url}`)
  }
  return proxyRequest(event, url)
}

export default defineEventHandler(async (event) => {
  return proxy(event)
})
