const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ args: ["--start-maximized"] });
  const page = await browser.newPage();

  await page.setViewport({ width: 1366, height: 768 });

  await page.goto("https://www.npmjs.com/package/puppeteer");
  
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
