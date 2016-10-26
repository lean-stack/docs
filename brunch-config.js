
module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'js/vendors.js': /^(?!app)/,
        'js/app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: {
        'css/vendors.css': /^(?!app)/,
        'css/app.css': /^app/
      }
    },
    templates: {joinTo: 'app.js'}
  },
  paths: {
    'public': 'docs/'
  },
  npm: {
    styles: {
      bootstrap: ['dist/css/bootstrap.css']
    },
    globals: {
      '$': 'jquery',
      'jQuery': 'jquery',
      'Tether': 'tether'
    },
    static: ['node_modules/bootstrap/dist/js/bootstrap.js']
  }
};