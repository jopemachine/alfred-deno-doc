const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const driver = new webdriver.Builder().forBrowser('chrome').build();
const sleep = require('sleep');
const fs = require('fs');

driver.get('https://doc.deno.land/builtin/stable');
sleep.sleep(3);


fs.writeFile("cache.json", data, "utf8", function (error) {
  console.log("write end");
});

