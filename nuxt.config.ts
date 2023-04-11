// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtPage } from '@nuxt/schema'

export default defineNuxtConfig({
  srcDir: 'src',
  ssr: true,
  typescript: {
    strict: true,
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
})
