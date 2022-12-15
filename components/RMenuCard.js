import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

import CommonStyles from '../utils/CommonStyles'

const RMenuCard = ({ item, cb, isInOrder }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.photo }} style={styles.image} />
      <Text style={styles.heading}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{item.price} ₸</Text>
      <TouchableOpacity disabled={!!isInOrder} style={[styles.button, !!isInOrder ? { backgroundColor: '#fff', borderColor: '#eee', borderWidth: 1 } : null]} onPress={cb}>
        <Text style={!!isInOrder ? { color: '#000' } : { color: '#fff' }}>{!!isInOrder ? 'Заказано' : 'Заказать'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
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
  description: {
    fontSize: CommonStyles.fontSize.medium,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#fff',
    fontSize: 12,
    color: '#999',
  },
  price: {
    fontSize: CommonStyles.fontSize.medium,
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    backgroundColor: CommonStyles.primary,
    padding: 18,
    borderRadius: 4,
    color: '#fff',
    fontSize: CommonStyles.fontSize.medium,
  },
  image: {
    width: '100%',
    height: 250,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
})

export default RMenuCard
