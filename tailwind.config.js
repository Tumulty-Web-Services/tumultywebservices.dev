module.exports = {
    theme: {
      extend: {
        backgroundImage: theme => ({
          'hero-pattern': "url('/assets/images/banner-2000x680.jpg')",
         })
      }
    },
    purge: [
      './src/**/*.njk',
    ],
    variants: {},
    plugins: []
  }