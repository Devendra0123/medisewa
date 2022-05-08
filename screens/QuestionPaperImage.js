import { View, Text, SafeAreaView, Image,FlatList } from 'react-native'
import React from 'react'
import TabBottom from '../component/TabBottom'
import FocusedStatusBar from '../component/FocusedStatusBar'
import { COLORS } from '../constants'
import TopHeader from '../component/TopHeader'

const QuestionPaperImage = ({route}) => {

  const {data} = route.params;

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column', zIndex: -1}}>
      <FocusedStatusBar />
      <View style={{flex: 1}}>
         <View style={{
           backgroundColor:COLORS.primary,
           padding: 10
         }}>
           <TopHeader />
         </View>

         <View>
            {
              data?.map((item,index)=>(
                <QuestionImage key={index} image={item} />
              ))
            }
         </View>
      </View>
      <TabBottom />
    </SafeAreaView>
  )
}

const QuestionImage = ({image})=>{
  return(
    <View style={{marginTop: 10}}>
      <Image source={image}
        resizeMode= 'contain'
        style={{width: '100%'}} />
    </View>
  )
}

export default QuestionPaperImage