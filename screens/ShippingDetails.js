import { View,SafeAreaView } from 'react-native'
import React from 'react'
import FocusedStatusBar from '../component/FocusedStatusBar'
import { COLORS} from '../constants'
import TabBottom from '../component/TabBottom'
import ShippingHeader from '../component/ShippingHeader'

const ShippingDetails = ({route}) => {
  const {data} = route.params;


  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
       <FocusedStatusBar backgroundColor={COLORS.primary} />
    <View style={{ flex: 1}}>
      <ShippingHeader data={data} />
    </View>

    <TabBottom />
    </SafeAreaView>
  )
}

export default ShippingDetails