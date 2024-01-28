/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Custom Font Family
        'mono': 'var(--font-mono)',
        'lato': 'var(--font-lato)',
      },
      zIndex: {
        // Custom Z index value
        'tooltip': 100,
        'fixed': 200,
        'modal': 1000,
        'preloader': 2000,
      },
      // Custom Animation
      keyframes: {
        'scaleIncrease': {
          '0%': {transform: 'scale(0.9)'},
          '100%': {transform: 'scale(1.0)'}
        },
        'rotationClock': {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        'rotationAntiClock': {
          '0%': {transform: 'rotate(360deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
        'vanish': {
          '100%': {
            visibility: 'hidden',
            opacity: 0,
          }
        }
      },
      animation: {
        'scale-increase': 'scaleIncrease 0.4s ease-in-out',
        'rotationClock': 'rotationClock 7s linear infinite',
        'rotationAntiClock': 'rotationAntiClock 7s linear infinite',
        'disappear': 'vanish 1s forwards'
      },
      // Initial value for width height and spacing
      width: {
        'initial': 'initial',
      },
      height: {
        'initial': 'initial',
      },
      spacing: {
        'initial': 'initial',
      },
      boxShadow: {
        'first': '0px 0px 15px 0px hsla(var(--first-hue), var(--sat), var(--lig), 0.5)',
        'dark': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
      },
    },
    colors: {
      // Custom colors according to css variables value
      'transparent': 'transparent',
      'c-first': 'hsl(var(--first-color) / <alpha-value>)',
      'c-first-alt': 'hsl(var(--first-color-alt) / <alpha-value>)',
      'c-title': 'hsl(var(--title-color) / <alpha-value>)',
      'c-prime': 'hsl(var(--prime-color) / <alpha-value>)',
      'c-prime-dark': 'hsl(var(--prime-color-dark) / <alpha-value>)',
      'c-body': 'hsl(var(--body-color) / <alpha-value>)',
      'c-container': 'hsl(var(--container-color) / <alpha-value>)',
      'c-white': 'var(--white)',
      'c-black': 'var(--black)',
      'c-blue': '#64ffda'
    },
    screens: {
      // Custom Breakpoints
      'xm': {'max':'320px'},
      'xm-400': {'max': '400px'},
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1024px',
      'xxl': '1250px',
    },
  },
  plugins: [
    plugin(function({ addUtilities }){
      addUtilities ({
        // Responsive Typography
        '.fs-biggest': {fontSize:'clamp(2.25rem, 8vw, 5rem)'},
        '.fs-heading': {fontSize: 'var(--fs-heading)'},
        '.fs-xxl': {fontSize: 'var(--fs-xxl)'},
        '.fs-xl': {fontSize: 'var(--fs-xl)'},
        '.fs-lg': {fontSize: 'var(--fs-lg)'},
        '.fs-md': {fontSize: 'var(--fs-md)'},
        '.fs-sm': {fontSize: 'var(--fs-sm)'},
        '.fs-xm': {fontSize: 'var(--fs-xm)'},
        '.fs-xxm': {fontSize: 'var(--fs-xxm)'},
        // Responsive Header Height
        '.h-header': {height: 'var(--header-height)', '@screen md': {height: 'calc(var(--header-height) + 1.5rem)'}},
        // Custom Transition
        '.transe-ease': {transition: '0.3s ease-in-out'},
        '.transe-ease-l': {transition: '0.4s ease-in-out'}
      })
    }),
    plugin(function({ addVariant }){
      addVariant ('dynamic-style', '.dynamic-style&')
    }),
    plugin(function({ addComponents }){
      addComponents({
        // Custom Container Styles
        '.container': {
          maxWidth: '1250px', paddingLeft: '1.5rem', paddingRight: '1.5rem',
          '@screen md': {paddingLeft: '5rem', paddingRight: '5rem'},
          '@screen lg': {paddingLeft: '6rem', paddingRight: '6rem'},
          '@screen xl': {paddingLeft: '8rem', paddingRight: '8rem'},
          '@screen xxl': {marginLeft: 'auto', marginRight: 'auto'},
        },
        // Custom Utility Classes
        '.vertical-rl': {writingMode: 'vertical-rl'}
      })
    })
  ],
}

