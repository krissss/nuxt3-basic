// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtPage } from '@nuxt/schema'

export default defineNuxtConfig({
  srcDir: 'src',
  ssr: true,
  typescript: {
    strict: true,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
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
    'pages:extend'(pages: NuxtPage[]) {
      // remove routes
      function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
        const pagesToRemove = []
        for (const page of pages) {
          if (pattern.test(page.path)) {
            pagesToRemove.push(page)
          } else {
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
  modules: [
    // https://nuxt.com.cn/modules/vueuse
    '@vueuse/nuxt',
    // https://nuxt.com.cn/modules/pinia
    '@pinia/nuxt',
    // https://nuxt.com.cn/modules/pinia-plugin-persistedstate
    '@pinia-plugin-persistedstate/nuxt',
  ],
  pinia: {
    autoImports: [['defineStore', 'definePiniaStore']],
  },
})
