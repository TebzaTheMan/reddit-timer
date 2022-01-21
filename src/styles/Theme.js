const Theme = {
  colors: {
    accent: '#FDB755',
    link: '#0087FF',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#636363',
    lightGray: '#93918F',
  },
  breakpoints: {
    mobile: '30em',
    tablet: '48em',
    laptop: '62em',
    desktop: '80em',
  },
  fonts: {
    family: {
      body: 'Montserrat, sans-serif',
      heading: 'Bitter, serif',
    },
    weight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    size: {
      smaller: '0.875rem',
      small: '0.938rem',
      default: '1rem',
      h1: '2.375rem',
      h2: '1.5rem',
    },
    lineHeight: {
      normal: 'normal',
      none: 1,
      shorter: '0.563rem',
      short: '0.688rem',
      base: '1.063rem',
      tall: '1.25rem',
      taller: '1.688rem',
      h1: '2.875rem',
      h2: '1.813rem',
    },
    letterSpacing: {
      normal: '0',
      wider: '0.05rem',
    },
  },
};
export default Theme;
