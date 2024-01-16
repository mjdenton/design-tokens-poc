module.exports = (StyleDictionary) => {
  const transforms = StyleDictionary.transformGroup["tokens-studio"];
  StyleDictionary.registerTransformGroup({
    name: "custom/web",
    transforms: [...transforms, "css/padding/shorthand"],
  });
};
