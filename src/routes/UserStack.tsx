import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomStack from './BottomStack';
import Location from '../screens/mainScreens/Location';
import Filter2 from '../screens/mainScreens/Filter2';
import Filter from '../screens/mainScreens/Filter';
import Create_Pet_Profile from '../screens/mainScreens/Create_Pet_Profile';
import PetProfile from '../screens/mainScreens/PetProfile';
import UserProfile from '../screens/mainScreens/UserProfile';
import Hotel from '../screens/mainScreens/Hotel';
import ServiceDetail from '../screens/mainScreens/ServiceDetail';
import PaymentMethod from '../screens/mainScreens/PaymentMethod';
import AddNewCard from '../screens/mainScreens/AddNewCard';
import Transfer_Successfully from '../screens/mainScreens/Transfer_Successfully';
import StoreDetails from '../screens/mainScreens/StoreDetails';

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
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="Filter2" component={Filter2} />
      <Stack.Screen name="StoreDetails" component={StoreDetails} />
      <Stack.Screen name="CreateProfile" component={Create_Pet_Profile} />
      <Stack.Screen name="PetProfile" component={PetProfile} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="Hotel" component={Hotel} />
      <Stack.Screen name="Booking" component={ServiceDetail} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} /> 
      <Stack.Screen name="AddCard" component={AddNewCard} /> 
      <Stack.Screen name="TransferSuccessfully" component={Transfer_Successfully} /> 
      {/* <Stack.Screen name="BottomStack" component={BottomStack} />
      <Stack.Screen name="BottomStack" component={BottomStack} /> */}
    </Stack.Navigator>
  );
}
