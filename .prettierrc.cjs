module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  rules: {
    quotes: [2, "single", { avoidEscape: true }],
  },
};
