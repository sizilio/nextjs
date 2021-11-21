const path = require('path')

module.exports = {
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  i18n: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
  },
}