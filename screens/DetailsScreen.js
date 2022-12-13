import * as React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function DetailsScreen() {
  const tableID = useSelector((state) => state.tableID)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>How to use info, {tableID}</Text>
    </View>
  )
}
