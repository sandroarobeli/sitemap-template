const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require("babel-register")({
  presets: [es2015, presetReact]
});

// Import our routes
const router = require('./router').default
const Sitemap = require('react-router-sitemap').default

// Config format for replacing params :param in the path /path/:param Object{'string', [Array]}
/*
const paramsConfig = {
  '/path/:param': [
    { param: 'value' }
  ]
}
*/

// NOTE: babel-node is not recommended for PRODUCTION.

// The code below is for testing for now
const userId = 'Alex'

// build refers to my DOMAIN, save to the LOCATION in my ROOT
const generateSitemap = () => {
  const paramsConfig = {
    'users/:userId': [
      {
        userId: userId
      }
      ]
    } 
    return (
      new Sitemap(router)
        .applyParams(paramsConfig)
        .build('http://127.0.0.1')
        .save('./public/sitemap.xml')
    )
}

generateSitemap()


// new Sitemap(router())
// .applyParams(paramsConfig)
// {
//   '/path/:param': [
//     { param: 'value' }
//   ]
// }