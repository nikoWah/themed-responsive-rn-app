export enum ThemeScheme {
  BLUE = 'Blue',
  GREEN = 'Green',
}

const commons = {
  largeFontSize: 24,
  mediumFontSize: 18,
  smallFontSize: 12,
};

export const themes = {
  [ThemeScheme.BLUE]: {
    primaryBackground: '#316ecf',
    primaryTextColor: '#ffffff',
    fontFamily: 'Courier',
    ...commons,
  },
  [ThemeScheme.GREEN]: {
    primaryBackground: '#74ef7c',
    primaryTextColor: '#000000',
    fontFamily: 'Menlo',
    ...commons,
  },
};
