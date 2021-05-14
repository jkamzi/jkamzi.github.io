// module.exports = {
//   markdownTemplateEngine: "liquid",
// };
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (config) => {
  config.addPlugin(syntaxHighlight);
};
