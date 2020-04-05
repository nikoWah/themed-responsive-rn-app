import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import React from 'react';
import {ThemeProps, withTheme} from '../high-order-components/WithTheme';

const CustomTabBarComponent = (props: BottomTabBarProps & ThemeProps) => {
  const styles: any = getThemedStyle(props.theme);
  const activeTintColor: string = props.theme.primaryBackground;

  return (
    <BottomTabBar
      {...props}
      activeTintColor={activeTintColor}
      labelStyle={styles.label}
    />
  );
};
export const CustomTabBar = withTheme(CustomTabBarComponent);

const getThemedStyle = (theme: any) =>
  StyleSheet.create({
    label: {
      fontSize: theme.mediumFontSize,
      fontFamily: theme.fontFamily,
    },
  });
