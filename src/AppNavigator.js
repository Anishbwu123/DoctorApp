import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './screens/Splash';
import HomeScreen from './screens/HomeScreen';
import BookAppointment from './screens/BookAppointment';
import Success from './component/Success';
import Pending from './screens/Pending';
import Completed from './screens/Completed';
import CallAmb from './screens/CallAmb';
// Import your HomeScreen component

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Splash Screen */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}} // Hide the header for splash screen
        />
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}} // Show header for Home screen
        />
        <Stack.Screen
          name="BookAppointment"
          component={BookAppointment}
          options={{headerShown: false}} // Show header for Home screen
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{headerShown: false}} // Show header for Home screen
        />
        <Stack.Screen
          name="Pending"
          component={Pending}
          options={{headerShown: false}} // Show header for Home screen
        />
        <Stack.Screen
          name="Completed"
          component={Completed}
          options={{headerShown: false}} // Show header for Home screen
        />
        <Stack.Screen
          name="CallAmb"
          component={CallAmb}
          options={{headerShown: false}} // Show header for Home screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
