const path = require('path');

module.exports = {
  siteTitle: `Piggybank`,
  siteTitleShort: `Piggybank`,
  siteDescription: `A place for your digital loose change`,
  siteUrl: `https://getpiggybank.dev`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/logo.png'),
  social: {
    twitter: `gatsbyjs`,
    fbAppId: `966242223397117`,
  },
};
