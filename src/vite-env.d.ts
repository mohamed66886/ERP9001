/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VERCEL: string
  readonly VITE_VERCEL_URL: string
  readonly VITE_VERCEL_DEPLOYMENT_URL: string
  readonly VITE_VERCEL_GIT_COMMIT_SHA: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
