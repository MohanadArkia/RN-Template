import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import HomeScreen from '../src/screens/HomeScreen';
import ContactScreen from '../src/screens/ContactScreen';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.Home} component={HomeScreen} />
        <Stack.Screen name={ScreenNames.Contact} component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
