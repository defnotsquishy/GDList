import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { test } from 'node:test'
import { TRANSLATIONS, LANGUAGES } from '../src/i18n/translations.js'

const output = new URL('../dist-beta/', import.meta.url)
const readOutput = path => readFileSync(new URL(path, output), 'utf8')
const index = readOutput('index.html')

test('beta has separate branding and is not indexed as the live site', () => {
  assert.match(index, /<title>Basement List Beta - GD Community<\/title>/)
  assert.match(index, /name="robots" content="noindex, nofollow"/)
  assert.match(index, /property="og:url" content="https:\/\/defnotsquishy\.github\.io\/GDList\/"/)
  assert.match(index, /shares accounts and records with the main site/)
  assert.match(readOutput('robots.txt'), /Disallow: \/\n/)
  for (const file of ['CNAME', 'sitemap.xml', 'google5fdd41fa2fd9bff9.html']) {
    assert.equal(existsSync(new URL(file, output)), false, `${file} must not be deployed to the fork`)
  }
})

test('beta assets and direct-link fallback stay inside /GDList/', () => {
  assert.equal(readOutput('404.html'), index)
  const assetPaths = [...index.matchAll(/(?:src|href)="(\/[^"\s]+)"/g)].map(match => match[1])
  assert.ok(assetPaths.length > 0)
  for (const path of assetPaths) {
    assert.ok(path.startsWith('/GDList/'), `Incorrect beta asset path: ${path}`)
    assert.ok(existsSync(new URL(path.slice('/GDList/'.length), output)), `Missing asset: ${path}`)
  }
  assert.ok(existsSync(new URL('.nojekyll', output)))
})

test('English and Russian have matching translation keys including the beta notice', () => {
  const keys = (value, prefix = '') => Object.entries(value).flatMap(([key, item]) =>
    typeof item === 'string' ? [`${prefix}${key}`] : keys(item, `${prefix}${key}.`))
  assert.deepEqual(LANGUAGES.map(language => language.code), ['en', 'ru'])
  assert.deepEqual(keys(TRANSLATIONS.en).sort(), keys(TRANSLATIONS.ru).sort())
  assert.ok(TRANSLATIONS.en.beta.sharedData)
  assert.ok(TRANSLATIONS.ru.beta.sharedData)
})
