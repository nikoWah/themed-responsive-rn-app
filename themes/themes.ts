export enum ThemeScheme {
  BLUE = 'Blue',
  GREEN = 'Green',
}

export const themes = {
  [ThemeScheme.BLUE]: {
    primaryBackground: '#316ecf',
    primaryTextColor: '#ffffff',
    fontFamily: 'Courier',
  },
  [ThemeScheme.GREEN]: {
    primaryBackground: '#74ef7c',
    primaryTextColor: '#000000',
    fontFamily: 'Menlo',
  },
};

const commons = {
  largeFontSize: 24,
  mediumFontSize: 18,
  smallFontSize: 12,
};

export const theme = {...themes[ThemeScheme.BLUE], ...commons};
