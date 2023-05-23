import type { UseFetchOptions } from '#app'

type ReqType = string | (() => string)
type ReqOptions<ResT> = UseFetchOptions<ResT>

export class useHttp {
  private static defaultOptions<ResT>(): ReqOptions<ResT> {
    return {
      onRequest({ options }) {
        options.baseURL = '/api' // 通过 server/api/ 转发接口
      },
      onResponse({ response }) {
        const type = response.headers.get('content-type') || ''
        if (type.includes('text/json')) {
          response._data = JSON.parse(response._data)
        }
        return response._data
      },
    }
  }

  private static request<ResT>(url: ReqType, options: ReqOptions<ResT> = {}) {
    options = {
      ...this.defaultOptions(),
      ...options,
    }
    return useFetch(url, options)
  }

  static get<ResT>(url: ReqType, query: any = {}, options: ReqOptions<ResT> = {}) {
    return this.request<ResT>(url, {
      query,
      ...options,
    })
  }

  static post<ResT>(url: ReqType, body: any = {}, options: ReqOptions<ResT> = {}) {
    return this.request<ResT>(url, {
      method: 'POST',
      body,
      ...options,
    })
  }
}
