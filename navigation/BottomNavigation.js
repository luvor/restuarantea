import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'

import CStyles from '../utils/CommonStyles'

const Tab = createBottomTabNavigator()

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: CStyles.primary,
        tabBarStyle: {
          backgroundColor: CStyles.background,
          borderTopColor: CStyles.background,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 70,
          paddingTop: 5,
          paddingBottom: 15,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'QR',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="information" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  )
}
