/**
 * Created by Linu Sherin Issac
 * on August 07, 2022
 * Navigation - Navigation methods
 */

import {Image, View, Text} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer, DefaultTheme,DarkTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

/** Screens */
import PreLoaderScreen from '../screen/PreLoaderScreen';
import PaymentScreen from '../screen/PaymentScreen';

const Stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"PreLoaderScreen"}
    >
      <Stack.Screen
        name="paymentScreen"
        component={PaymentScreen}
      />
      </Stack.Navigator>
      )
      }

function App() {
  return (
    <NavigationContainer
    >
      <AppStack />
    </NavigationContainer>
  )
}

export default App;
