Package.describe({
  name: 'aramk:rangeslider',
  summary: 'Simple polyfill for HTML5 range input slider element.',
  version: '1.2.2',
  git: 'https://github.com/aramk/rangeslider.js'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use([
    'jquery'
  ], 'client');
  api.addFiles([
    'dist/rangeslider.js',
    'dist/rangeslider.css'
  ], 'client');
});
