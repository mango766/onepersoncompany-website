/**
 * Push URLs to search engines (IndexNow, Baidu, Bing)
 * Usage:
 *   npx tsx scripts/push-search-engines.ts           # pushes all sitemap URLs
 *   npx tsx scripts/push-search-engines.ts /nav      # pushes specific URL
 *
 * Env vars (optional, for Baidu):
 *   BAIDU_PUSH_TOKEN — from 百度资源平台 → 普通收录 → 接口调用地址 (tail after token=)
 */

const SITE_URL = 'https://onepersoncompany.one'
const HOST = 'onepersoncompany.one'
const INDEXNOW_KEY = '01f1e0a4b73f48b3a120335569909132'

const DEFAULT_URLS = [
  '/',
  '/nav',
  '/tutorials',
  '/tutorials/seo-from-zero-to-indexed',
  '/tutorials/launch-your-website-from-zero',
  // 以下教程暂未完成，隐藏中（有内容后再取消注释推送）
  // '/tutorials/ai-tools-automation',
  // '/tutorials/building-in-public',
  // '/tutorials/side-project-to-fulltime',
  // '/tutorials/solo-saas-playbook',
  // '/tutorials/tech-stack-guide',
]

function fullUrls(paths: string[]): string[] {
  return paths.map(p => (p.startsWith('http') ? p : `${SITE_URL}${p}`))
}

// IndexNow (Bing + Yandex + others). Single API covers multiple engines.
async function pushIndexNow(urls: string[]) {
  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  }
  try {
    const res = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    })
    console.log(`[IndexNow] ${res.status} ${res.statusText} for ${urls.length} URLs`)
    if (res.status >= 400) {
      const text = await res.text()
      console.log(`[IndexNow] response: ${text}`)
    }
  } catch (err) {
    console.error('[IndexNow] failed:', err)
  }
}

// Baidu 普通收录 (requires token from 百度资源平台)
async function pushBaidu(urls: string[]) {
  const token = process.env.BAIDU_PUSH_TOKEN
  if (!token) {
    console.log('[Baidu] skipped — set BAIDU_PUSH_TOKEN to enable')
    return
  }
  try {
    const res = await fetch(
      `http://data.zz.baidu.com/urls?site=${SITE_URL}&token=${token}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: urls.join('\n'),
      },
    )
    const data = await res.json()
    console.log(`[Baidu] ${res.status}`, data)
  } catch (err) {
    console.error('[Baidu] failed:', err)
  }
}

// Bing direct (legacy API, still works)
async function pushBing(urls: string[]) {
  // IndexNow already covers Bing, but this is a direct fallback if needed.
  // Bing URL submission also lives at www.bing.com/webmasters — no public API without auth.
  console.log('[Bing] covered by IndexNow — no separate push needed')
}

async function main() {
  const args = process.argv.slice(2)
  const paths = args.length > 0 ? args : DEFAULT_URLS
  const urls = fullUrls(paths)

  console.log(`Pushing ${urls.length} URLs to search engines:`)
  urls.forEach(u => console.log(`  - ${u}`))
  console.log('')

  await Promise.all([pushIndexNow(urls), pushBaidu(urls), pushBing(urls)])

  console.log('\nDone. Manual steps still required:')
  console.log('  1. Google Search Console: submit sitemap at https://search.google.com/search-console')
  console.log('  2. Baidu: get BAIDU_PUSH_TOKEN from https://ziyuan.baidu.com → 普通收录')
  console.log(`  3. Sitemap URL: ${SITE_URL}/sitemap.xml`)
}

main()
