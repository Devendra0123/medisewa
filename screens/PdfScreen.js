import { View, Text,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import TabBottom from '../component/TabBottom'
import FocusedStatusBar from '../component/FocusedStatusBar'
import { COLORS } from '../constants'
import PdfCard from '../component/PdfCard'
import TopHeader from '../component/TopHeader'

const data = [
    {
        pdfTitle: 'I am Malala',
        pdfImage: 'https://img.yumpu.com/59937395/1/500x640/i-am-malala-pdf-book-by-malala-growpkcom-.jpg',
        pdfLink: 'https://www.gyanpark.online/ebook/ebook-details/6210a6f2d75669fb55ac2114'
    }
]
const PdfScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column', zIndex: -1}}>
      <FocusedStatusBar />
      <ScrollView style={{flex: 1}}>

      <View style={{
      backgroundColor:COLORS.primary,
      padding: 10
    }}>
     <TopHeader />
    </View>

      <View style={{ 
                zIndex: 0, 
                flex: 1,
                flexDirection: 'row',
                flexWrap:'wrap',
                alignItems:'center',
                justifyContent: 'center',
                width: '100%',
                }}>
     {
      data.map((item,i)=>(
         <View key={i}>
          <PdfCard pdfImage={item.pdfImage} pdfLink={item.pdfLink} pdfTitle={item.pdfTitle} />
         </View>
       ))
     }     
        </View>
      </ScrollView>
      <TabBottom />
    </SafeAreaView>
  )
}

export default PdfScreen