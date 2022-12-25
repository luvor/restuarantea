import * as React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { addToOrder } from '../store/slices/mainSlice'
export default function DetailMenuScreen({ route, navigation }) {
  const { item } = route.params
  const dispatch = useDispatch()
  const order = useSelector((state) => state.order)
  const isInOrder = order.find((i) => i.title === item.title)
  const handleAddToOrder = (item) => {
    dispatch(addToOrder(item))
  }
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.photo }} style={styles.image} />
      <View style={styles.card}>
        <Text style={{ fontSize: 16 }}>
          <Text style={{ fontWeight: '600' }}>Описание:</Text> {item.description}
        </Text>
        <Text style={{ fontWeight: '600', fontSize: 16, marginTop: 10 }}>Цена: {item.price} ₸</Text>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Вес: {item.weight}</Text>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Калории: {item.calories}</Text>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Белки: {item.proteins}</Text>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Жиры: {item.fats}</Text>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Углеводы: {item.carbohydrates}</Text>
        <TouchableOpacity
          style={[
            {
              backgroundColor: '#000',
              padding: 10,
              borderRadius: 5,
              marginTop: 10,
            },
            !!isInOrder ? { backgroundColor: '#fff', borderColor: '#eee', borderWidth: 1 } : null,
          ]}
          onPress={() => {
            if (!!isInOrder) return
            handleAddToOrder(item)
            navigation.goBack()
          }}
        >
          <Text style={!!isInOrder ? { color: '#000' } : { color: '#fff' }}>{!!isInOrder ? 'Заказано' : 'Заказать'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    maxWidth: '100%',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginVertical: 10,
  },
})
