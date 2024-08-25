import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["primevue"]?: typeof import("nuxt-primevue").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["veeValidate"]?: typeof import("@vee-validate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vueQuery"]?: typeof import("@hebilicious/vue-query-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["nuxt-primevue", Exclude<NuxtConfig["primevue"], boolean>] | ["@vee-validate/nuxt", Exclude<NuxtConfig["veeValidate"], boolean>] | ["@hebilicious/vue-query-nuxt", Exclude<NuxtConfig["vueQuery"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["primevue"]?: typeof import("nuxt-primevue").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["veeValidate"]?: typeof import("@vee-validate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vueQuery"]?: typeof import("@hebilicious/vue-query-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["nuxt-primevue", Exclude<NuxtConfig["primevue"], boolean>] | ["@vee-validate/nuxt", Exclude<NuxtConfig["veeValidate"], boolean>] | ["@hebilicious/vue-query-nuxt", Exclude<NuxtConfig["vueQuery"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },
  }
  interface PublicRuntimeConfig {
   baseUrl: string,

   i18n: {
      baseUrl: string,

      defaultLocale: string,

      defaultDirection: string,

      strategy: string,

      lazy: boolean,

      rootRedirect: any,

      routesNameSeparator: string,

      defaultLocaleRouteNameSuffix: string,

      skipSettingLocaleOnNavigate: boolean,

      differentDomains: boolean,

      trailingSlash: boolean,

      configLocales: Array<{

      }>,

      locales: {
         en: {
            domain: any,
         },

         ar: {
            domain: any,
         },
      },

      detectBrowserLanguage: boolean,

      experimental: {
         localeDetector: string,

         switchLocalePathLinkSSR: boolean,

         autoImportTranslationFunctions: boolean,
      },
   },

   primevue: {
      usePrimeVue: boolean,

      resolvePath: any,

      cssLayerOrder: string,

      importPT: {
         as: string,

         from: string,
      },

      options: any,

      components: Array<{

      }>,

      directives: Array<{

      }>,

      composables: Array<{

      }>,

      config: Array<{

      }>,

      services: Array<{

      }>,

      styles: Array<{

      }>,

      injectStylesAsString: Array<any>,

      injectStylesAsStringToTop: Array<string>,
   },

   vueQuery: {
      stateKey: string,

      autoImports: Array<string>,

      queryClientOptions: {
         defaultOptions: {
            queries: {
               staleTime: number,
            },
         },
      },

      vueQueryPluginOptions: any,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }