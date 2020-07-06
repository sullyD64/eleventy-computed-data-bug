module.exports = (eleventyConfig) => {
  eleventyConfig.setDataDeepMerge(true);
  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  };
};
