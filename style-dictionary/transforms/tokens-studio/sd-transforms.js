const { registerTransforms } = require("@tokens-studio/sd-transforms");

module.exports = (StyleDictionary) => {
  // sd-transforms, 2nd parameter for options can be added
  // See docs: https://github.com/tokens-studio/sd-transforms

  registerTransforms(StyleDictionary, {
    expand: { composition: true, typography: true, border: false, shadow: false },
    excludeParentKeys: false,
  });
};
