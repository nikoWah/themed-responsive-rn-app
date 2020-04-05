import React, {Dispatch, SetStateAction} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {themes, ThemeScheme} from '../themes/themes';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeProps, withTheme} from '../high-order-components/WithTheme';

const Item = ({
  item,
  theme,
  setTheme,
}: {
  item: ThemeScheme;
  theme: ThemeScheme;
  setTheme: Dispatch<SetStateAction<any>>;
}) => {
  const itemTheme = themes[item];
  const styles = getThemedStyle(theme);

  return (
    <TouchableOpacity
      onPress={() => {
        setTheme(item);
      }}>
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

export const SettingsComponent = ({theme, setTheme}: ThemeProps) => {
  const data = Object.keys(themes) as ThemeScheme[];
  const styles = getThemedStyle(theme);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={data}
          ListHeaderComponent={
            <Text style={styles.header}>Please choose a theme</Text>
          }
          renderItem={({item}) => Item({item, theme, setTheme})}
          keyExtractor={(item) => item}
        />
      </SafeAreaView>
    </View>
  );
};

export const SettingsScreen = withTheme(SettingsComponent);

const getThemedStyle = (theme: any) =>
  StyleSheet.create({
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
