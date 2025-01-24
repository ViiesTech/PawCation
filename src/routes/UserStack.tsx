import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomStack from './BottomStack';

// Define types for the navigation parameters
type UserStackParams = {
  BottomStack: undefined; // No params are passed to BottomStack
  // SomeOtherScreen: { someParam: string }; // Add params for other screens

};

const Stack = createNativeStackNavigator<UserStackParams>(); // Use the typed navigator

export function UserStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomStack" component={BottomStack} />
    </Stack.Navigator>
  );
}
