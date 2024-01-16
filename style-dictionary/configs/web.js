const components = require("../../tokens/components");
const core = require("../../tokens/core");
const semantic = require("../../tokens/semantic");

module.exports = () => {
  return {
    // CSS Core Variables
    "css/core": {
      transformGroup: "custom/web",
      buildPath: `build/scss/core/`,
      files: core.map((tokenCategory) => {
        return {
          destination: `_${tokenCategory}.scss`,
          format: "css/variables",
          filter: function (token) {
            return token.filePath.includes(`core/${tokenCategory}`);
          },
        };
      }),
    },

    "css/semantic": {
      transformGroup: "custom/web",
      buildPath: `build/scss/semantic/`,
      files: semantic.map((tokenCategory) => {
        return {
          destination: `_${tokenCategory}.scss`,
          format: "css/variables",
          filter: function (token) {
            return token.filePath.includes(`semantic/${tokenCategory}`);
          },
        };
      }),
    },

    // Component partials
    "scss/components": {
      transformGroup: "custom/web",
      buildPath: `build/scss/components/`,
      files: components.map((tokenCategory) => {
        return {
          destination: `_${tokenCategory}.scss`,
          format: "scss/variables",
          filter: function (token) {
            return token.filePath.includes(tokenCategory);
          },
        };
      }),
    },
  };
};
