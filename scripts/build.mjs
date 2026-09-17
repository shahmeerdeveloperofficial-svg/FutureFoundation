import { build } from 'vite'

await build({
  root: process.cwd(),
  configFile: false,
  build: {
    assetsDir: 'website-assets',
  },
})
