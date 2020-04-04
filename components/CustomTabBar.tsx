import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {theme} from '../themes/themes';
import {StyleSheet} from 'react-native';
import React from 'react';

export const CustomTabBar = (props: BottomTabBarProps) => (
  <BottomTabBar
    {...props}
    activeTintColor={theme.primaryBackground}
    labelStyle={style.label}
  />
);

const style = StyleSheet.create({
  label: {
    fontSize: theme.mediumFontSize,
    fontFamily: theme.fontFamily,
  },
});
