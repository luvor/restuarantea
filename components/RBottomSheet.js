import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { removeFromOrder, clearOrder } from '../store/slices/mainSlice'

import CommonStyles from '../utils/CommonStyles'

import ROrderCard from './ROrderCard'

const RBottomSheet = ({ closeModal }) => {
  // bottom sheet order summary with total price
  const dispatch = useDispatch()

  const handleDeleteFromOrder = (item) => {
    dispatch(removeFromOrder(item))
  }
  const handleClearOrder = () => {
    dispatch(clearOrder())
    closeModal()
  }
  const order = useSelector((state) => state.order)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Заказ</Text>
      <ScrollView style={{ marginBottom: 20 }}>{order && order.map((orderItem, idx) => <ROrderCard item={orderItem} key={idx} cb={() => handleDeleteFromOrder(orderItem)} />)}</ScrollView>
      <TouchableOpacity>
        <Text style={styles.button}>Заказать</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleClearOrder()}>
        <Text style={styles.clearCart}>Очистить корзину</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    maxWidth: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
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
    backgroundColor: CommonStyles.primary,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: CommonStyles.fontSize.huge,
  },
  clearCart: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: CommonStyles.fontSize.huge,
    borderColor: CommonStyles.primary,
    borderWidth: 1,
    borderRadius: 4,
    padding: 7,
    backgroundColor: CommonStyles.secondary,
  },
})

export default RBottomSheet
