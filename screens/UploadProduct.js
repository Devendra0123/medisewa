import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import TabBottom from '../component/TabBottom'
import FocusedStatusBar from '../component/FocusedStatusBar'
import UploadProductHeader from '../component/UploadProductHeader'

const UploadProduct = () => {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column', zIndex: -1}}>
      <FocusedStatusBar />
      <View style={{flex: 1}}>
         <UploadProductHeader />
      </View>
      <TabBottom />
    </SafeAreaView>
  )
}

export default UploadProduct