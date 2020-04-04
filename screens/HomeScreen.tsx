import React, {ReactElement} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../themes/themes';

export const HomeScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
