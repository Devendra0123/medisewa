import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import TabBottom from '../component/TabBottom'
import FocusedStatusBar from '../component/FocusedStatusBar'
import { COLORS } from '../constants'
import CartHeader from '../component/CartHeader'


const Cart = () => {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column', zIndex: -1}}>
      <FocusedStatusBar />
      <View style={{flex: 1}}>
         <CartHeader />
      </View>
      <TabBottom />
    </SafeAreaView>
  )
}

export default Cart