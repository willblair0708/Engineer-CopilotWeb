// Generated by nitro

// App Config
import type { Defu } from 'defu'

import type { default as appConfig0 } from "/Users/williamblair/Engineer-CopilotWeb/app.config";
import type { default as appConfig1 } from "/Users/williamblair/Engineer-CopilotWeb/node_modules/@nuxt-themes/docus/app.config";
import type { default as appConfig2 } from "/Users/williamblair/Engineer-CopilotWeb/node_modules/@nuxt-themes/typography/app.config";
import type { default as appConfig3 } from "/Users/williamblair/Engineer-CopilotWeb/node_modules/@nuxt-themes/elements/app.config";

type UserAppConfig = Defu<{}, [typeof appConfig0, typeof appConfig1, typeof appConfig2, typeof appConfig3]>

declare module 'nitropack' {
  interface AppConfig extends UserAppConfig {}
}
    
export {}