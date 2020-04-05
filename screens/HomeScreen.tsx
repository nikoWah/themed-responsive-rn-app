import React, {ReactElement} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {withTheme} from '../high-order-components/WithTheme';

const HomeComponent = ({theme}: {theme: any}): ReactElement => {
  const styles = getThemedStyle(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView>
          <Text style={styles.text}>Header!</Text>
        </SafeAreaView>
      </View>
      <View style={styles.body}>
        <View style={styles.main}>
          <View style={styles.mainSide}>
            <View style={styles.mainSideFirstChild}>
              <Text style={styles.text}>Side 1</Text>
            </View>
            <View style={styles.mainSideSecondChild}>
              <Text style={styles.text}>Side 2</Text>
            </View>
          </View>
          <View style={styles.mainContent}>
            <Text style={styles.text}>Main Body Content!</Text>
          </View>
        </View>
        <View style={styles.side}>
          <Text style={styles.text}>Side 3</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Click here!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const HomeScreen = withTheme(HomeComponent);

const getThemedStyle = (theme: any) =>
  StyleSheet.create(portrait(theme));

const portrait = (theme: any) => ({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    fontWeight: 'bold',
    color: theme.primaryTextColor,
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#4F5A27',
    padding: 20,
    height: '10%',
  },
  body: {
    height: '80%',
  },
  main: {
    flex: 4,
    flexDirection: 'column-reverse',
  },
  mainContent: {
    flex: 3,
    backgroundColor: '#FCE0A7',
  },
  mainSide: {
    flex: 1,
    flexDirection: 'row',
  },
  mainSideFirstChild: {
    backgroundColor: '#68933B',
    flex: 1,
  },
  mainSideSecondChild: {
    backgroundColor: '#948B76',
    flex: 1,
  },
  side: {
    flex: 3,
    backgroundColor: '#F5D36A',
  },
  footer: {
    backgroundColor: '#CCC86F',
    padding: 20,
    alignItems: 'center',
    height: '10%',
  },
  button: {
    backgroundColor: theme.primaryBackground,
    borderRadius: 6,
    width: 200,
    padding: 6,
  },
});

const landscape = (theme: any) => ({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.primaryBackground,
  },
  text: {
    fontWeight: 'bold',
    color: theme.primaryTextColor,
  },
  header: {
    backgroundColor: '#4F5A27',
    padding: 20,
    height: '10%',
  },
  body: {
    height: '80%',
    flexDirection: 'row',
  },
  main: {
    flex: 5,
    flexDirection: 'row',
  },
  mainContent: {
    backgroundColor: '#FCE0A7',
    flex: 4,
  },
  mainSide: {
    flex: 1,
  },
  mainSideFirstChild: {
    backgroundColor: '#68933B',
    flex: 1,
  },
  mainSideSecondChild: {
    backgroundColor: '#948B76',
    flex: 1,
  },
  side: {
    flex: 1,
    backgroundColor: '#F5D36A',
  },
  footer: {
    backgroundColor: '#CCC86F',
    padding: 20,
    alignItems: 'center',
    height: '10%',
  },
  button: {
    backgroundColor: theme.primaryBackground,
    borderRadius: 6,
    width: 200,
    padding: 6,
  },
});
