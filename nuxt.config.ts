// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtPage } from '@nuxt/schema'

export default defineNuxtConfig({
  srcDir: 'src',
  ssr: true,
  typescript: {
    strict: true,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    api: {
      base_url: '', // 接口代理地址
      log: false, // 记录 proxy log
    },
  },
  css: ['@/assets/scss/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/var.scss" as *;
          `,
        },
      },
    },
  },
  imports: {
    dirs: ['composables/**/*.ts'],
  },
  hooks: {
    'pages:extend': function (pages: NuxtPage[]) {
      // remove routes
      function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
        const pagesToRemove = []
        for (const page of pages) {
          if (pattern.test(page.path)) {
            pagesToRemove.push(page)
          }
          else {
            removePagesMatching(pattern, page.children)
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }
      }
      removePagesMatching(/\/__/, pages)
    },
  },
  devtools: {
    enabled: true,
  },
  modules: [
    // https://nuxt.com.cn/modules/vueuse
    '@vueuse/nuxt',
    // https://nuxt.com.cn/modules/pinia
    '@pinia/nuxt',
    // https://nuxt.com.cn/modules/pinia-plugin-persistedstate
    '@pinia-plugin-persistedstate/nuxt',
    // https://unocss.dev/integrations/nuxt
    '@unocss/nuxt',
    // https://nuxt.com.cn/modules/lodash
    'nuxt-lodash',
  ],
  pinia: {
    autoImports: [['defineStore', 'definePiniaStore']],
  },
  lodash: {
    prefix: '__',
    prefixSkip: false,
    upperAfterPrefix: false,
  },
})
