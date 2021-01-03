const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const htmlmin = require('html-minifier');
const { minify } = require("terser");

module.exports = function(config) {
    config.addPassthroughCopy("src/assets");

    // add a date formatting filter
    config.addFilter("date", function(date, format) {
      const dateObj = new Date(date);
      const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const results = `${month[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
    
      return results;
    });

    // lazy load all images
    config.addPlugin(lazyImagesPlugin);

    // minify html output
    config.addTransform('htmlmin', function(content, output) {
      if(output.endsWith('.html')){

        return htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
      };

      return content
    });

    // minify inline js
    config.addNunjucksAsyncFilter("jsmin", async function (
      code,
      callback
    ) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error("Terser error: ", err);
        // Fail gracefully.
        callback(null, code);
      }
    });

  
    return {
      dir: {
        input: "src",
        output: "dist",
        data: "_data",
        includes: "_includes",
        layouts: "_layouts"
      }
    };
  };