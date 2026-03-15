import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || 'http://localhost:3000';
const outDir = path.join(__dirname, 'temporary screenshots');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const outFile = path.join(outDir, `screenshot-${timestamp}.png`);

try {
  // Try puppeteer if available
  const { default: puppeteer } = await import('puppeteer');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: outFile, fullPage: true });
  await browser.close();
  console.log(`Screenshot saved: ${outFile}`);
} catch {
  console.log('Puppeteer not available. Install with: npm install puppeteer');
  console.log(`View the site at: ${url}`);
}
