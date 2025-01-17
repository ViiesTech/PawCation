import React from 'react';
import { AuthStack } from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
type routeParams = {
  authStack:undefined,
  // dayCareStack:undefined,
  // userStack:undefined,
}

const Stack = createNativeStackNavigator<routeParams>();

export function Routes() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='authStack' screenOptions={{headerShown: false}}>
      <Stack.Screen name="authStack" component={AuthStack} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
