import { View, SafeAreaView } from 'react-native'
import React from 'react'
import FocusedStatusBar from '../component/FocusedStatusBar'
import TabBottom from '../component/TabBottom'
import ConfirmDetailsHeader from '../component/ConfirmDetailsHeader'
import { COLORS } from '../constants'

const ConfirmDetails = ({route}) => {
  const {data,name,mobileNumber,location} = route.params;

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
       <FocusedStatusBar backgroundColor={COLORS.primary} />
    <View style={{ flex: 1}}>
  
          <ConfirmDetailsHeader data={data} name={name} mobileNumber={mobileNumber} location={location}  />
      
    </View>

    <TabBottom />
    </SafeAreaView>
  )
}

export default ConfirmDetails