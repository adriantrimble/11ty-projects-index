const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.setTemplateFormats("html,md,njk,11ty.js")
  
}