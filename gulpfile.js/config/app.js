const isProd = process.argv.includes("--production") || process.argv.includes("--prod");
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,

  
  gulpSize: {
    before: {
      title: "До сборки:",
      showFiles: true
    },
    after: {
      title: "После сборки:",
      showFiles: true
    }
  },

  gulpHtmlMin: {
    collapseWhitespace: isProd,
    quoteCharacter: "\"",
    removeComments: isProd,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true
  },

  gulpConcat: {
    destCssFile: "main.css"
  },

  gulpCssO: {
    restructure: isProd,
    sourceMap: false,
    debug: true
  },

  gulpRename: {
    suffix: '.min'
  },

  webpack: {
    mode: isProd ? "production" : "development",
    devtool: "eval-source-map"
  },

  gulpImagemin: {
    verbose: true,
    silent: false
  },

  gulpFonter: {
    formats: ["ttf", "eot", "woff", "svg", "otf"]
  }
};