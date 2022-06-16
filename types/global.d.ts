import type { ComponentPublicInstance, FunctionalComponent } from 'vue'

declare global {
  // vue
  declare type PropType<T> = VuePropType<T>

  declare type Nullable<T> = T | null
  declare type Recordable<T = any> = Record<string, T>

  declare type TimeoutHandle = ReturnType<typeof setTimeout>

  declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
  }

  declare interface ChangeEvent extends Event {
    target: HTMLInputElement
  }

  interface ImportMetaEnv extends ViteEnv {
    __: unknown
  }

  declare interface ViteEnv {
    VITE_PORT: number
    VITE_USE_MOCK: boolean
    VITE_USE_PWA: boolean
    VITE_PUBLIC_PATH: string
    VITE_PROXY: [string, string][]
    VITE_GLOB_APP_TITLE: string
    VITE_GLOB_APP_SHORT_NAME: string
    VITE_USE_CDN: boolean
    VITE_DROP_CONSOLE: boolean
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
    VITE_LEGACY: boolean
    VITE_USE_IMAGEMIN: boolean
    VITE_GENERATE_UI: string
  }
}

export interface GlobEnvConfig {
  // 网站名称
  VITE_GLOB_APP_TITLE: string
  // 服务接口 URL
  VITE_GLOB_API_URL: string
  // 服务接口 URL 前缀
  VITE_GLOB_API_URL_PREFIX?: string
  // 项目缩写
  VITE_GLOB_APP_SHORT_NAME: string
  // 上传 URL
  VITE_GLOB_UPLOAD_URL?: string
}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>
}
