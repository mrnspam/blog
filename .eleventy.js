module.exports = function (eleventyConfig) {
  // Alles uit /static wordt 1-op-1 gekopieerd naar de output-root
  eleventyConfig.addPassthroughCopy({ "static": "/" });

  return {
    dir: { input: "content", output: "_site" },
    pathPrefix: "/blog/",
  };
};
