module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        canvas: '#FBF9F5', cream: '#F4EFE7', sand: '#E7DDCF', nude: '#CDBBA6',
        taupe: '#6E6862', carbon: '#1C1C1C', earth: '#3B3129',
        gold: { DEFAULT: '#C5A059', soft: '#D9BF8C', deep: '#A8833F' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { luxe: '0.22em' },
      transitionTimingFunction: { silk: 'cubic-bezier(.22,.61,.36,1)' },
    },
  },
};
