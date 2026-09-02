import { copyFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { build, loadEnv } from 'vite'

const root = fileURLToPath(new URL('..', import.meta.url))
const output = resolve(root, 'dist-beta')
const betaUrl = 'https://defnotsquishy.github.io/GDList/'
const betaTitle = 'Basement List Beta - GD Community'
const betaDescription = 'Test the latest Basement List features on defnotsquishy. This beta shares accounts and records with the main site.'
const env = loadEnv('github', root, 'VITE_FIREBASE_')
const required = ['API_KEY', 'AUTH_DOMAIN', 'PROJECT_ID', 'STORAGE_BUCKET', 'MESSAGING_SENDER_ID', 'APP_ID']
const missing = required.map(key => `VITE_FIREBASE_${key}`).filter(key => !env[key]?.trim())
if (missing.length) {
  throw new Error(`Beta Firebase configuration is missing: ${missing.join(', ')}`)
}

await build({
  root,
  // Reuse the existing, ignored Firebase configuration without copying secrets.
  mode: 'github',
  base: '/GDList/',
  define: { 'import.meta.env.VITE_BETA_SITE': JSON.stringify('true') },
  build: { outDir: output },
  plugins: [{
    name: 'basement-beta-metadata',
    transformIndexHtml(html) {
      return {
        html: html
          .replace(/<title>[^<]*<\/title>/, `<title>${betaTitle}</title>`)
          .replace(/(<meta (?:name|property)="(?:og:title|twitter:title)" content=")[^"]*/g, `$1${betaTitle}`)
          .replace(/(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]*/g, `$1${betaDescription}`)
          .replace(/(<meta property="og:url" content=")[^"]*/, `$1${betaUrl}`)
          .replace(/(<meta property="og:site_name" content=")[^"]*/, '$1Basement List Beta'),
        tags: [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' }, injectTo: 'head' }],
      }
    },
  }],
})

// Only remove generated copies. The main site's domain and SEO files stay intact.
for (const filename of ['CNAME', 'sitemap.xml', 'google5fdd41fa2fd9bff9.html']) {
  await rm(resolve(output, filename), { force: true })
}
// Serve the app at the requested path instead of redirecting deep links to '/'.
await copyFile(resolve(output, 'index.html'), resolve(output, '404.html'))
await writeFile(resolve(output, 'robots.txt'), 'User-agent: *\nDisallow: /\n')
await writeFile(resolve(output, '.nojekyll'), '')
console.log(`Beta ready for ${betaUrl} (shared live Firebase data).`)
