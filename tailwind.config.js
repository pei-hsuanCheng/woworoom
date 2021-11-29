const CONFIG = require('./config');
const { setData } = require('./tailwind.function.js');
const { colors, fontSize, zIndex } = require('./tailwind.setting.js');

const spacing = {
  ...setData(1, 14, 1),
  ...setData(16, 20, 2),
  ...setData(20, 100, 4),
}

const negativeSpacing = {
  ...setData(-14, -1, 1),
  ...setData(-20, -16, 2),
  ...setData(-100, -20, 4),
}

const borderRadius = {
  ...setData(1, 50, 1),
}

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body:
      '"Noto Sans TC", arial, "微軟正黑體", "Microsoft JhengHei", "Heiti TC", "黑體", sans-serif'
    },
    screens: {
      mLandscape: [
        {
          raw: `(max-width: ${CONFIG.mobileMaxWidth - 1
            }px) and (orientation: landscape) and (min-width: 480px)
        , (max-width: 999px) and (max-height: 428px) and (orientation: landscape) and (orientation: landscape) and (min-width: 480px)`
        }
      ],
      m: [
        {
          raw: `(max-width: 1000px) and (max-height: 428px) and (orientation: landscape), (max-width: ${CONFIG.mobileMaxWidth - 1
            }px)`
        }
      ],
      t: [
        {
          raw: `(min-width: ${CONFIG.mobileMaxWidth}px) and (max-width: 1001px) and (min-height: 428px)`
        }
      ],
      tm: [
        {
          max: '1001px'
        }
      ],
      pt: [
        {
          raw: `(min-width: ${CONFIG.mobileMaxWidth}px) and (min-height: 428px)`
        }
      ],
      pMin: [
        {
          min: '1001px',
          max: `${CONFIG.desktopMinWidth}px`
        }
      ],
      p: [
        {
          min: '1001px'
        }
      ],
      pMax: [
        {
          min: `${CONFIG.desktopMinWidth + 1}px`
        }
      ]
    },
    extend: {
      lineHeight: {
        default: 1.5
      },
      colors: {
        ...colors
      },
      textColor: {
        ...colors
      },
      fontSize: {
        ...fontSize
      },
      zIndex: {
        ...zIndex
      },
      borderRadius: {
        ...borderRadius,
      },
      backgroundColor: {
        ...colors
      },
      margin: {
        ...spacing,
        ...negativeSpacing,
      },
      padding: {
        ...spacing,
      },
      spacing: {
        ...spacing,
        ...negativeSpacing,
      },
      maxWidth: {
        '1100': '1100px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
