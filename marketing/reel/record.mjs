// Records ad-reel.html to careerchill-ad.mp4 (1080x1920, 24s, no audio).
// Needs: npm i playwright-core ffmpeg-static  (outside the site project), and Edge or Chrome installed.
// Usage: node record.mjs
import { chromium } from 'playwright-core'
import ffmpeg from 'ffmpeg-static'
import { execFileSync } from 'node:child_process'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { mkdtempSync, readdirSync, renameSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'

const here = path.dirname(fileURLToPath(import.meta.url))
const out = path.join(here, 'careerchill-ad.mp4')
const tmp = mkdtempSync(path.join(tmpdir(), 'reel-'))

const browser = await chromium.launch({ channel: 'msedge' })
const ctx = await browser.newContext({
  viewport: { width: 1080, height: 1920 },
  recordVideo: { dir: tmp, size: { width: 1080, height: 1920 } },
})
const page = await ctx.newPage()
const t0 = Date.now()
await page.goto(pathToFileURL(path.join(here, 'ad-reel.html')).href, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
// restart CSS animations so they begin after fonts are ready
await page.evaluate(() => document.getAnimations().forEach((a) => { a.currentTime = 0 }))
const lead = (Date.now() - t0) / 1000
await page.waitForTimeout(24500)
await ctx.close()
await browser.close()

const webm = path.join(tmp, readdirSync(tmp).find((f) => f.endsWith('.webm')))
execFileSync(ffmpeg, ['-y', '-ss', lead.toFixed(2), '-i', webm, '-t', '24', '-r', '30',
  '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '20', '-movflags', '+faststart', out], { stdio: 'inherit' })
rmSync(tmp, { recursive: true, force: true })
console.log('Saved', out)
