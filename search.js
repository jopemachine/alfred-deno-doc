const cache = require("./cache.json");
const alfy = require("alfy");
const path = require("path");
const apiNames = Object.keys(cache);

const result = [];

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
