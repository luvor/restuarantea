import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { removeFromOrder } from '../store/slices/mainSlice'

import CommonStyles from '../utils/CommonStyles'

import ROrderCard from './ROrderCard'

const RBottomSheet = () => {
  // bottom sheet order summary with total price
  const dispatch = useDispatch()

  const handleDeleteFromOrder = (item) => {
    dispatch(removeFromOrder(item))
  }
  const order = useSelector((state) => state.order)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Заказ</Text>
      <ScrollView style={{ marginBottom: 20 }}>{order && order.map((orderItem, idx) => <ROrderCard item={orderItem} key={idx} cb={() => handleDeleteFromOrder(orderItem)} />)}</ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button}>Заказать</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    maxWidth: '100%',
  },
  heading: {
    fontSize: CommonStyles.fontSize.huge,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    backgroundColor: CommonStyles.primary,
    padding: 10,
    borderRadius: 4,
    color: '#fff',
    fontSize: CommonStyles.fontSize.huge,
  },
})

export default RBottomSheet
