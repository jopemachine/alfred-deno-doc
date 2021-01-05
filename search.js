const alfy = require("alfy");

if (!require('fs').existsSync('cache.json')) {
  alfy.output([
    {
      title: `Please run "deno > cache" first`
    }
  ]);
  return;
}

const cache = require("./cache.json");
const path = require("path");

const result = [];
const apiNames = Object.keys(cache);

for (const apiName of apiNames) {
  if (apiName.toLowerCase().includes(alfy.input.toLowerCase())) {
    result.push({
      title: apiName,
      subtitle: cache[apiName],
      autocomplete: apiName,
      text: {
        copy: apiName,
        largetype: apiName,
      },
      arg: `https://doc.deno.land/builtin/stable#${apiName}`,
      // quicklookurl: `${__dirname}${path.sep}cache${path.sep}${apiName}.html`
    });
  }
}

alfy.output(result);
