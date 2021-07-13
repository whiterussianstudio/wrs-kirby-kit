import './store'

import 'alpinejs'
import 'lazysizes'
import 'unfetch/polyfill'

import smoothscroll from 'smoothscroll-polyfill'

import '@components'
import { is, ready, resized, scrolled, nextTick } from '@utils'

/**
 * Polyfill for scroll-behavior .scrollIntoView and .scroll
 * https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
 *
 * Demo: http://iamdustan.com/smoothscroll/
 */
smoothscroll.polyfill()

ready(() => {
  resized()
})


// Swup instance
//
// var swup = new Swup({
//   cache: false,
//   containers: ["#root"],
//   animationSelector: "[data-transition-delay]",
//   plugins: [new SwupPreloadPlugin()],
// });
