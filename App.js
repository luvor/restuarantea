import * as React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import BottomNavigation from './navigation/BottomNavigation'

import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App
