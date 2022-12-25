import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DetailMenuScreen from './DetailMenuScreen'
import MainMenuScreen from './MainMenuScreen'

export default function MenuScreen() {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="MenuMain" component={MainMenuScreen} />
      <Stack.Screen options={({ route }) => ({ title: route.params.item.title })} name="MenuDetail" component={DetailMenuScreen} />
    </Stack.Navigator>
  )
}
