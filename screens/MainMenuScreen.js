import * as React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { RBottomSheet, RMenuCard } from '../components'
import { fetchMenu, addToOrder } from '../store/slices/mainSlice'

import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function MainMenuScreen({ navigation }) {
  const dispatch = useDispatch()
  const order = useSelector((state) => state.order)
  const orderSum = useSelector((state) => state.orderSum)

  const bottomSheetModalRef = React.useRef(null)
  const snapPoints = React.useMemo(() => ['25%', '90%'], [])

  const handleAddToOrder = (item) => {
    dispatch(addToOrder(item))
  }

  const handlePresentModalPress = () => {
    bottomSheetModalRef.current.present()
  }

  React.useEffect(() => {
    dispatch(fetchMenu())
  }, [])

  const menuRef = useSelector((state) => state.menu)
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <View style={{ flex: 1, marginTop: 50 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Меню</Text>
          </View>
          <View style={{ flex: 1, marginTop: -690, alignItems: 'center', justifyContent: 'flex-start', position: 'relative' }}>
            <ScrollView class={styles.container}>
              {menuRef?.map((item, idx) => (
                <RMenuCard
                  key={idx}
                  item={item}
                  isInOrder={order.find((i) => i.title === item.title)}
                  nav={navigation}
                  cb={() => {
                    handleAddToOrder(item)
                  }}
                />
              ))}
              <View style={{ height: 80 }} />
            </ScrollView>
            {orderSum > 0 && (
              <TouchableOpacity style={styles.floatButton} onPress={handlePresentModalPress}>
                <Text style={styles.floatButtonText}>Заказ: {orderSum} ₸</Text>
              </TouchableOpacity>
            )}
            <BottomSheetModal
              enableContentPanningGesture={true}
              enableHandlePanningGesture={true}
              enablePanDownToClose={true}
              ref={bottomSheetModalRef}
              index={0}
              snapPoints={snapPoints}
              containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
            >
              <ScrollView style={styles.contentContainer}>
                <RBottomSheet />
              </ScrollView>
            </BottomSheetModal>
          </View>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    width: '100%',
  },
  floatButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  floatButtonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
})
