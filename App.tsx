import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomTabBar} from './components/CustomTabBar';
import {HomeScreen} from './screens/HomeScreen';
import {SettingsScreen} from './screens/SettingsScreen';
import {ThemeContextProvider} from './contexts/ThemeContextProvider';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
          <Tab.Screen name="HOME" component={HomeScreen} />
          <Tab.Screen name="SETTINGS" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeContextProvider>
  );
};

export default App;
