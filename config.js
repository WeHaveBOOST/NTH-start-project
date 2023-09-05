/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    'form-validation'
    // 'sprite-svg',
    // 'sprite-png',
  ],
  'addStyleBefore': [
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    '../../node_modules/swiper/swiper.scss',
    // '../../node_modules/swiper/modules/autoplay/autoplay.scss',
    // '../../node_modules/@fancyapps/ui/src/Fancybox/Fancybox.scss',

    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/img/*.{png,svg,jpg,jpeg,webp}': 'img/',
    'src/fonts/*.{woff2,woff}': 'fonts/',
    'src/video/*': 'video/',
    'src/favicon/*.{png,ico,svg}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
