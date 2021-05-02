import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../screen/Main';
import Home from '../screen/Splash';

const Stack = createStackNavigator();

function StackRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackRoute;
