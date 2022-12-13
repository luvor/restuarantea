import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CommonStyles from '../utils/CommonStyles'

const RButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: CommonStyles.primary,
    padding: 18,
  },
  text: {
    color: '#fff',
    fontSize: CommonStyles.fontSize.medium,
  },
})

export default RButton
