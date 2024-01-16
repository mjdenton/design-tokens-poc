const { transform } = require("@divriots/style-dictionary-to-figma");

module.exports = (StyleDictionary) => {
  StyleDictionary.registerFormat({
    name: "figmaTokensPlugin",
    formatter: ({ dictionary }) => {
      // Transform the tokens from the style dictionary instance
      const parsedTokens = transform(dictionary.tokens);
      const removeKeys = (obj, keys) =>
        obj !== Object(obj)
          ? obj
          : Array.isArray(obj)
          ? obj.map((item) => removeKeys(item, keys))
          : Object.keys(obj)
              .filter((k) => !keys.includes(k))
              .reduce((acc, x) => Object.assign(acc, { [x]: removeKeys(obj[x], keys) }), {});

      const cleanedTokens = removeKeys(parsedTokens, ["filePath", "isSource", "original", "attributes", "path"]);

      // Turn the object into JSON, the "2" third param is used to format indents with 2 spaces
      return JSON.stringify(cleanedTokens, null, 2);
    },
  });
};
