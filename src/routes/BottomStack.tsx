import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SvgIcons from '../Components/SvgIcons';
import { bottomUser, cart, home, shop } from '../assets/icons';
import Store from '../screens/mainScreens/Store';
import Shop from '../screens/mainScreens/Shop';
import Home from '../screens/mainScreens/Home';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';  // Import navigation types
import UserProfile from '../screens/mainScreens/UserProfile';
import { responsiveHeight, responsiveWidth } from '../assets/responsive_dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import { Colors } from '../assets/colors';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home2 from '../screens/mainScreens/Home2';
// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Bottom Stack Component
const HomeStack = () => {
  return (
  <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Home2' component={Store} />
  </Stack.Navigator>
  )
}
function BottomStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: Colors.white, margin: 0,height:responsiveHeight(7), alignItems: 'center', justifyContent: 'center', borderTopRightRadius: responsiveHeight(4), borderTopLeftRadius: responsiveHeight(4) },
      }}>
      <Tab.Screen
        options={({ route }) => ({
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.bottomTabs}>
              <AntDesign name='home' size={25} color={focused ? '#554292' : '#BFBFBF'} />

              {focused && (
                <View
                  style={{
                    height: 2,
                    marginTop: 3,
                    width: responsiveWidth(4),
                    backgroundColor: Colors.themeText,
                  }}
                />
              )}
            </View>
          ),
          tabBarShowLabel: false,
        })}
        name="HomeStack"
        component={
          HomeStack
        }
      />

      <Tab.Screen
        options={({ route }) => ({
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.bottomTabs}>
              <MaterialIcons name={'storefront'} size={25} color={focused ? '#554292' : '#BFBFBF'} />

              {focused && (
                <View
                  style={{
                    height: 2,
                    marginTop: 3,
                    alignSelf: 'center',
                    width: responsiveWidth(4),
                    backgroundColor: Colors.themeText,
                  }}
                />
              )}
            </View>
          ),
          tabBarShowLabel: false,
        })}
        name="Store"
        component={Store}
      />

      <Tab.Screen
        options={({ route }) => ({
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.bottomTabs}>
              <Feather name={'shopping-cart'} size={25} color={focused ? '#554292' : '#BFBFBF'} />

              {focused && (
                <View
                  style={{
                    height: 2,
                    marginTop: 3,
                    alignSelf: 'center',
                    left: 3,

                    width: responsiveWidth(4),
                    backgroundColor: Colors.themeText,
                  }}
                />
              )}
            </View>
          ),
          tabBarShowLabel: false,
        })}
        name="Shop"
        component={Shop}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View style={styles.bottomTabs}>
              <Feather
                name="user"
                size={25}
                color={focused ? '#554292' : '#BFBFBF'}
              />
              {focused && (
                <View
                  style={{
                    height: 2,
                    marginTop: 3,
                    width: responsiveWidth(4),
                    backgroundColor: Colors.themeText,
                  }}
                />
              )}
            </View>
          ),
          tabBarShowLabel: false,
        }}
        name="UserProfile"
        component={UserProfile}
      />


    </Tab.Navigator>
  );
}

export default BottomStack;
const styles = StyleSheet.create({
  bottomTabs:{
    alignItems: 'center',position: 'relative',top:responsiveHeight(1)
  }
})