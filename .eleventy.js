module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/worklet.js");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
