const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require("babel-register")({
  presets: [es2015, presetReact]
});
// require("babel-register")({
//   presets: ["es2015", "react"]
// });

// Import our routes
const router = require('./router').default
const Sitemap = require('react-router-sitemap').default

// build refers to my DOMAIN, save to the LOCATION in my ROOT
const generateSitemap = () => {
    return (
        new Sitemap(router).build('http://127.0.0.1').save('./public/sitemap.xml')
    )
}

generateSitemap()
