import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Slide1 from '../screens/Slide1'
import Slide2 from '../screens/Slide2'
import Slide3 from '../screens/Slide3'
import Landing from '../screens/Landing'
import Login from '../screens/auth/Login'
import Home from '../screens/guard/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Menu from '../screens/guard/Menu'
import CustomHeader from '../components/CustomHeader'
import { useRoute } from '@react-navigation/native'
import Profile from '../screens/guard/Profile';
import Settings from '../screens/guard/Settings'
import {AntDesign,Ionicons,Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
import { customStyle } from '../styles/customStyle'


function customTabs() {
  const Tab = createBottomTabNavigator();

  const screenTabBarOptions = ({ route }: any) => ({
    header: () => <CustomHeader />,
    tabBarIcon: ({focused, color }: any) => {
      if (route.name === 'Home') {
        if(focused) {
          return <MaterialCommunityIcons name="home" size={24} color={color} />;
        }
          return <MaterialCommunityIcons name="home-outline" size={24} color={color} />;
      } else if (route.name === 'Menu') {
        return <Entypo name="menu" size={24} color={color} />;
      } else if (route.name === 'Profile') {
        if(focused) {
        return <Ionicons name="person" size={23} color={color} />
        }
        return <Ionicons name="person-outline" size={23} color={color} />
      }else if (route.name === 'View Orders'){
        if(focused) {
          return <Ionicons name="cart" size={24} color={color} />;
        }
        return <Ionicons name="cart-outline" size={24} color={color} />;
      }
      return null;
    },
    tabBarInactiveTintColor: "black",
    tabBarActiveTintColor: "gold",
  });
   
  return (
    <Tab.Navigator screenOptions={screenTabBarOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Menu" component={Menu} />
      
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="View Orders" component={Settings} />
      {/*
      <Tab.Screen name="Menu" component={Menu} />
 */}
    </Tab.Navigator>
  );
}
export default function Layout() {

  const Stack = createNativeStackNavigator()

  return (
    
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Landing" component={ () => <Landing/>} />
            <Stack.Screen name="Slide1" component={ () => <Slide1/>} />
            <Stack.Screen name="Slide2" component={ () => <Slide2/>} />
            <Stack.Screen name="Slide3" component={ () => <Slide3/>} />
            {/* 
            <Stack.Screen name="auth/Login" component={ () => <Login/>}/>
            */}
            <Stack.Screen name="guard/Home" component={customTabs}
            options={{headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

