/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Cairo: ['Cairo'],
        Lato: ['Lato'],
        Poppins: ['Poppins'],
      },
      colors: {
        'brand-red': '#e30613',
        'menu-color': '#475467',
        grey: '#4f5665',
        'dropdown-color': '#111619',
        'dropdown-hover': '#F5F5F5',
        'grey-border': '#667085',
        'footer-color': '#e8f8fa',
        'light-blue': '#f3fafb',
        yellow: '#f9ba02',
        'track-border': '#eeeeee',
        green: '#35b600',
      },
      boxShadow: {
        dropdown:
          '0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05)',
        button: '0 2px 0 rgba(0,0,0,.045)',
        track: '0 10px 40px rgba(0,0,0,.10196078431372549)',
      },
      rotate: {
        270: '270deg',
      },
      backgroundImage: {
        'hero-pattern':
          'linear-gradient(180deg,rgba(29,189,205,0),rgba(29,189,205,.1))',
      },
    },
  },
  plugins: [],
};
