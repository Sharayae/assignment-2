const { chromium } = require('playwright');
const path = require('path');

const out = path.join(__dirname, '..', '.verify-shots');
require('fs').mkdirSync(out, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const [slug, url, datasetIndex] of [
    ['worker-progress', 'http://localhost:5500/worker-progress-report/index.html', 1],
    ['medical-expense', 'http://localhost:5500/medical-travel-expense/index.html', 1],
  ]) {
    await page.emulateMedia({ media: 'screen' });
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.selectOption('#datasetSelect', { index: datasetIndex });
    await page.waitForTimeout(300);
    await page.emulateMedia({ media: 'print' });
    await page.pdf({
      path: path.join(out, `${slug}-print.pdf`),
      format: 'A4',
      printBackground: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
    });
    console.log(`${slug}: PDF written`);
  }

  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
