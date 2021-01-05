const webdriver = require("selenium-webdriver");
const By = require("selenium-webdriver").By;
const chrome = require("selenium-webdriver/chrome");
const sleep = require("sleep");
const fs = require("fs");
const utf8Encoding = {
  encoding: "utf8",
};

(async function main() {
  const driver = new webdriver.Builder().forBrowser("chrome").build();
  await driver.get("https://doc.deno.land/builtin/stable");
  sleep.sleep(3);

  const texts = await driver.findElements(By.css("nav div div p"));
  const api = {};
  const apiNameList = [];

  for (const text of texts) {
    const apiName = await text.getText();
    apiNameList.push(apiName);
  }

  // !fs.existsSync("cache") && fs.mkdirSync("cache");

  for (const apiName of apiNameList) {
    const apiCard = await driver.findElement(By.id(apiName));
    if (apiName === "Deno") continue;
    api[apiName] = await apiCard.getText();
  }

  fs.writeFileSync(
    "cache.json",
    "\ufeff" + JSON.stringify(api, null, 2),
    utf8Encoding
  );
})();
