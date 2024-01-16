module.exports = (StyleDictionary) => {
  StyleDictionary.registerTransform({
    type: "value",
    name: "css/padding/shorthand",
    transitive: true,
    matcher: function (token) {
      return token.path.includes("padding");
    },
    transformer: function (token) {
      const padding = token.value;
      if (typeof padding !== "object") return padding;

      const { x, y, top, right, bottom, left } = padding;
      const result = [y, top, x, right, bottom, left];

      return result.filter((value) => Boolean(value)).join(" ");
    },
  });
};
