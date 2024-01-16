module.exports = () => {
  return {
    // CSS Core Variables
    "json/figma": {
      transformGroup: "js",
      buildPath: `build/tokens/`,
      files: [
        {
          destination: "figma.tokens.json",
          format: "figmaTokensPlugin",
        },
      ],
    },
  };
};
