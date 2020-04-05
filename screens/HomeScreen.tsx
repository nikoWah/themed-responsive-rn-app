import React, {ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {withTheme} from '../high-order-components/WithTheme';

const HomeComponent = ({theme}: {theme: any}): ReactElement => {
  const styles = getThemedStyle(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home!</Text>
    </View>
  );
};
export const HomeScreen = withTheme(HomeComponent);

const getThemedStyle = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.primaryBackground,
    },
    text: {
      fontWeight: 'bold',
      color: theme.primaryTextColor,
    },
  });
