import { View, Text } from 'react-native';
import React from 'react';
import { Routes } from './src/routes/Routes';
import Location from './src/screens/mainScreens/Location';
import Filter from './src/screens/mainScreens/Filter';
import Filter2 from './src/screens/mainScreens/Filter2';
import AddNewCard from './src/screens/mainScreens/AddNewCard';
import Create_Pet_Profile from './src/screens/mainScreens/Create_Pet_Profile';
import Hotel from './src/screens/mainScreens/Hotel';
import Payment from './src/screens/mainScreens/Payment';
import PaymentMethod from './src/screens/mainScreens/PaymentMethod';
import ServiceDetail from './src/screens/mainScreens/ServiceDetail';
import Shop from './src/screens/mainScreens/Shop';
import Home from './src/screens/mainScreens/Store';
import StoreDetails from './src/screens/mainScreens/StoreDetails';
import Transfer_Successfully from './src/screens/mainScreens/Transfer_Successfully';
import UserProfile from './src/screens/mainScreens/UserProfile';
import ZipCode from './src/screens/mainScreens/ZipCode';

const App = () => {
  return (
    <View style={{ flex: 1}}>
      <Routes />
    </View>
  );
};

export default App;