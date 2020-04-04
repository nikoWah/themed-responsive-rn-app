import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {theme, themes, ThemeScheme} from '../themes/themes';
import {SafeAreaView} from 'react-native-safe-area-context';

const Header = (): ReactElement => (
  <Text style={styles.header}>Please choose a theme</Text>
);

const Item = ({item}: {item: ThemeScheme}) => {
  const itemTheme = themes[item];
  return (
    <TouchableOpacity>
      <View
        style={[
          styles.itemContainer,
          {backgroundColor: itemTheme.primaryBackground},
        ]}>
        <Text
          style={[
            styles.itemText,
            {
              color: itemTheme.primaryTextColor,
              fontFamily: itemTheme.fontFamily,
            },
          ]}>
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const SettingsScreen = () => {
  const data = Object.keys(themes) as ThemeScheme[];

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={data}
          ListHeaderComponent={Header()}
          renderItem={Item}
          keyExtractor={(item) => item}
        />
      </SafeAreaView>
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
  header: {
    fontSize: theme.largeFontSize,
    fontFamily: theme.fontFamily,
    color: theme.primaryTextColor,
    paddingVertical: 40,
  },
  itemContainer: {
    color: theme.primaryTextColor,
    paddingVertical: 20,
  },
  itemText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: theme.fontFamily,
    color: theme.primaryTextColor,
  },
});
