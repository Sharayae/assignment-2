const { chromium } = require('playwright');
const path = require('path');

const shots = path.join(__dirname, '..', '.verify-shots');
require('fs').mkdirSync(shots, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  page.on('console', (msg) => {
    if (msg.type() === 'error') console.log('CONSOLE ERROR:', msg.text());
  });
  page.on('pageerror', (err) => console.log('PAGE ERROR:', err.message));

  for (const [slug, url] of [
    ['worker-progress', 'http://localhost:5500/worker-progress-report/index.html'],
    ['medical-expense', 'http://localhost:5500/medical-travel-expense/index.html'],
  ]) {
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForSelector('.doc-page');
    const countA = await page.locator('.doc-page').count();
    const countTextA = await page.locator('#pageCount').textContent();
    await page.screenshot({ path: path.join(shots, `${slug}-sampleA.png`), fullPage: true });
    console.log(`${slug} sampleA: ${countA} .doc-page elements, label="${countTextA}"`);

    await page.selectOption('#datasetSelect', { index: 1 });
    await page.waitForTimeout(300);
    const countB = await page.locator('.doc-page').count();
    const countTextB = await page.locator('#pageCount').textContent();
    await page.screenshot({ path: path.join(shots, `${slug}-sampleB.png`), fullPage: true });
    console.log(`${slug} sampleB: ${countB} .doc-page elements, label="${countTextB}"`);
  }

  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
