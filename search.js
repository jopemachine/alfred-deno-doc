const cache = require("./cache.json");
const alfy = require("alfy");

const result = [];
const apiNames = Object.keys(cache);

for (const apiName of apiNames) {
  if (apiName.includes(alfy.input)) {
    result.push({
      title: apiName,
      subtitle: cache[apiName],
      autocomplete: apiName,
      text: {
        copy: apiName,
        largetype: apiName,
      },
      arg: apiName,
    });
  }
}

alfy.output(result);
