export enum ThemeScheme {
  Default = 'Default',
  Another = 'Another',
}

const commons = {
  largeFontSize: 24,
  mediumFontSize: 18,
  smallFontSize: 12,
};

export const themes = {
  [ThemeScheme.Default]: {
    primaryBackground: '#316ecf',
    primaryTextColor: '#ffffff',
    fontFamily: 'Courier',
    headerBackground: '#4F5A27',
    mainContentBackground: '#FCE0A7',
    mainSideFirstChildBackground: '#68933B',
    mainSideSecondChildBackground: '#948B76',
    sideBackground: '#F5D36A',
    footerBackground: '#CCC86F',
    ...commons,
  },
  [ThemeScheme.Another]: {
    primaryBackground: '#74ef7c',
    primaryTextColor: '#000000',
    fontFamily: 'Menlo',
    headerBackground: '#7523c1',
    mainContentBackground: '#FCE0A7',
    mainSideFirstChildBackground: '#838150',
    mainSideSecondChildBackground: '#828183',
    sideBackground: '#9c4c3d',
    footerBackground: '#248ac1',
    ...commons,
  },
};
