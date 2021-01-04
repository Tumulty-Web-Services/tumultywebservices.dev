const htmlmin = require('html-minifier');

module.exports = function(config) {
    config.addPassthroughCopy("src/assets");

    // add a date formatting filter
    config.addFilter("date", function(date) {
      const dateObj = new Date(date);
      const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const results = `${month[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
    
      return results;
    });

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