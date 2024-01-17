module.exports = {
  pattern: /\.json$|\.tokens\.json$|\.tokens$/,
  parse: ({ contents }) => {
    // replace $value/$type with value/type so that style dictionary recognizes it
    const preparedContent = (contents || "{}")
      .replace(/"\$?value"\s*:/g, '"value":')
      .replace(/"\$?type"\s*:/g, '"type":')
      .replace(/"\$?description"\s*:/g, '"description":');
    return JSON.parse(preparedContent);
  },
};
