import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

import { RButton } from '../components'

import CommonStyles from '../utils/CommonStyles'

export default function HomeScreen() {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getBarCodeScannerPermissions()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  if (hasPermission === null) {
    return <Text style={styles.heading}>Запрашиваем доступ к камере</Text>
  }
  if (hasPermission === false) {
    return <Text style={styles.heading}>Нет доступа к камере</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Отсканируйте QR-код</Text>
      <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={styles.barcodescanner} />
      {scanned && <RButton label={'Отсканировать заново'} onPress={() => setScanned(false)} />}
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: CommonStyles.fontSize.huge,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    padding: 10,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  barcodescanner: {
    flex: 1,
    marginHorizontal: 40,
  },
})
