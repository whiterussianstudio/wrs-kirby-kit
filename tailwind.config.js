var generateSpacing = (m, c) => {
  m = m || 5
  c = c || 100
  var result = {}

  for (var i = c; i >= 0; i--) {
    var r = i * m
    result[r] = r + 'px'
  }

  return result
}

module.exports = {
  corePlugins: {
    fontVariantNumeric: false,
    placeholderColor: false,
    placeholderOpacity: false,
    maxHeight: false,
    maxWidth: false,
    container: false,
    animation: false,
    appearance: false,
    fontSize: false,
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['site/templates/**/*.php', 'site/snippets/**/*.php'],
  theme: {
    extend: {
      padding: {
        '1/2-screen' : '50vh',
      }
    },
    screens: {
      xs: '540px',
      sm: '768px',
      md: '1040px',
      lg: '1440px'
    },
    borderRadius: {
      'base': '10px'
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'transparent': 'transparent'
    },
    fontFamily: {
     'base': ['ArialNarrow', 'sans-serif'],
     'norm': ['NormffitiGX', 'sans-serif'],
    },
    spacing: generateSpacing()
  },
  variants: {
    transitionTimingFunction: false,
    cursor: false,
    resize: false,
    userSelect: false,
    fontSmoothing: false,
    accessibility: false
  },
  plugins: [
    require('@whiterussianstudio/tailwind-debug-mq'),
    require('@whiterussianstudio/tailwind-easing')
  ]
}
