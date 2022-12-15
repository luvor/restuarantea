import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import CommonStyles from '../utils/CommonStyles'

const ROrderCard = ({ item, cb }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'column', flexGrow: 2 }}>
        <Text style={styles.heading}>{item.title}</Text>
        <Text style={styles.description}>{String(item.description).slice(0, 40)}...</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={styles.price}>{item.price} ₸</Text>
        <TouchableOpacity style={styles.button} onPress={cb}>
          <MaterialCommunityIcons name="trash-can" color={'#fff'} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  heading: {
    fontSize: CommonStyles.fontSize.medium,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: '#fff',
  },
  description: {
    fontSize: CommonStyles.fontSize.small,
    textAlign: 'left',
    paddingVertical: 10,
    backgroundColor: '#fff',
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
    justifyContent: 'center',
    backgroundColor: CommonStyles.primary,
    padding: 10,
    borderRadius: 4,
    color: '#fff',
  },
})

export default ROrderCard
