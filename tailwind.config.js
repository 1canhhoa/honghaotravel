/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    './sections/**/*.{js,jsx}',
    './layouts/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      screens: {
        '5xl': '2450px',
        '4xl': '2250px',
        '3xl': '1950px',
        '2xl': '1800px',
        xl: '1600px',
        lg: '1024px',
        md: '768px',
        x2xl: { max: '1799px' },
        xxl: { max: '1599px' },
        xlg: { max: '1023px' },
        xmd: { max: '767px' },
        tablet: { min: '768px', max: '1023px' },
      },
      fontFamily: {
        londrina: ['var(--font-londrina-solid)'],
        tripsans: ['var(--font-trip-sans)'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'orange-normal-hover': '#DA4B19',
        'grey-grey-100': '#C3C3C3',
        'greyscale-0': '#fff',
        'greyscale-5': '#F1F1F1',
        'greyscale-10': '#C5C5C5',
        'greyscale-20': '#A9A9A9',
        'greyscale-30': '#828282',
        'greyscale-40': '#6A6A6A',
        'greyscale-50': '#727272',
        'greyscale-60': '#3F3F3F',
        'greyscale-70': '#313131',
        'greyscale-80': '#262626',
        'orange-normal': '#E64827',
        'orange-normal': '#E64827',
        'orange-normal-active': '#c24216',
        'green-normal-hover': '#206545',
        'orange-hover': '#DA4B19',
        'orange-dark': '#B63E15',
        'orange-darker': '#551D0A',
        'green-light': '#E9F1ED',
        'green-normal': '#122718',
        'green-hover': '#206545',
        'green-dark': '#1A543A',
        'green-dark-active': '#103223',
        'elevation-30': '#F0F0F0',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        leftToRight: 'leftToRight 10s linear infinite',
        cloud: 'cloud 10s linear infinite',
        cloud2: 'cloud2 10s linear infinite',
        spin: 'spin 10s linear infinite',
        spin2: 'spin 1s linear infinite',
      },
      backgroundImage: {
        'conicBanner': 'conic-gradient(rgb(6,78,59),rgb(6,95,70),rgb(6,78,59))',
        'conicBannerMb': 'conic-gradient(at_center_bottom,rgb(6,78,59),rgb(6,95,70),rgb(6,78,59))',

        'custom-gradient':
          'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255,255,255,0.3) 50%, rgba(255, 253, 253, 0) 100%)',
        'contact-us-gradient':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 39.54%, #FFF 99.98%)',
        'card-des':
          'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 50%, rgba(255, 253, 253, 0.00) 100%)',
      },
      fontSize: {
        0.75: '0.75rem',
        0.875: '0.875rem',
        1: '1rem',
        1.125: '1.125rem',
        1.23: '1.23rem',
        1.25: '1.25rem',
        1.5: '1.5rem',
        2: '2rem',
        2.5: '2.5rem',
        2.75: '2.75rem',
        3.5: '3.5rem',
      },
      lineHeight: {
        1: '100%',
        1.2: '120%',
        1.375: '1.375rem',
        1.5: '150%',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
      },
      letterSpacing: {
        0.00219: '0.00219rem',
        0.00375: '0.00375rem',
        0.00875: '0.00875rem',
        0.0125: '0.0125rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
