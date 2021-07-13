const conf = {
  scripts: 'src/js/index.js', // String or Array
  styles: 'src/scss/index.scss', // String or Array
  static: 'src/static', // Static files images, icons etc.
  public: 'assets',
  watch: [
    'site/templates/**/*.php',
    'site/snippets/**/*.php',
    'assets/**/*.{css,js}',
  ],
  aliases: {
    '@utils': 'src/js/utils',
    '@components': 'src/js/components',
    '@vendors': 'src/js/vendors',
  },
}

/**
 * Global imports
 * Mix (https://laravel-mix.com/docs/5.0/installation)
 * Path (https://nodejs.org/api/path.html)
 */
const mix = require('laravel-mix')
const path = require('path')

const inProduction = mix.inProduction()

/**
 * Returns a new object with the values at each key mapped using callback function
 * @param {object} object Object for reduce
 * @param {function} fn Callback function for every object's key
 */
// function objectMap(object, fn) {
//   return Object.keys(object).reduce((result, key) => {
//     result[key] = fn(object[key])
//     return result
//   }, {})
// }

/**
 * Create js folders aliases and remove ../../../ hell
 * https://webpack.js.org/configuration/resolve/
 */
if (conf.aliases) {
  mix.alias(conf.aliases)
}

/**
 * Build .js files
 * https://laravel-mix.com/docs/5.0/mixjs
 */
if (conf.scripts) {
  if (conf.scripts instanceof Array) {
    conf.scripts.forEach((file) => {
      mix.js(file, path.resolve(__dirname, '.')).extract()
    })
  } else {
    mix.js(path.resolve(__dirname, conf.scripts), '.').extract()
  }
}

/**
 * Build .scss files
 * https://laravel-mix.com/docs/5.0/css-preprocessors
 */
if (conf.styles) {
  if (conf.styles instanceof Array) {
    conf.styles.concat(conf.styles).forEach((file) => {
      mix.sass(file, path.resolve(__dirname, '.'))
    })
  } else {
    mix.sass(path.resolve(__dirname, conf.styles), '.')
  }
}

if (conf.static) {
  mix.copyDirectory(conf.static, path.join(conf.public, 'static'))
}

/**
 * Browsersync
 * Mix (https://laravel-mix.com/docs/5.0/browsersync)
 * BrowserSync (https://browsersync.io/docs/options)
 */
const projectName = path.basename(path.resolve(__dirname)).concat('.test')
mix.browserSync({
  ghostMode: false,
  notify: false,
  files: conf.watch || [],
  proxy: projectName,
})

/**
 * Misc
 */
mix
  .disableNotifications()
  .setPublicPath(conf.public || '')
  .options({
    processCssUrls: false,
    postCss: [
      require('tailwindcss')(path.resolve(__dirname, 'tailwind.config.js')),
    ],
  })

if (inProduction) {
  mix.version()
}
