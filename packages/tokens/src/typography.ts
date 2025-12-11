export const typography = {
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem',// 14px
    md: '1rem',    // 16px
    lg: '1.125rem',// 18px
    xl: '1.25rem', // 20px
    //... h1-h6 sizes
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  //... lineHeights, letterSpacings
};

export type Typography = typeof typography;
