import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import FocusedStatusBar from '../component/FocusedStatusBar'
import QuestionPaperHeader from '../component/QuestionPaperHeader'
import TabBottom from '../component/TabBottom'

import { COLORS, questionPaper } from "../constants";

const QuestionPaper = () => {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column', zIndex: -1}}>
    <FocusedStatusBar />
    <View style={{flex: 1}}>
       <QuestionPaperHeader data={questionPaper} />
    </View>
    <TabBottom />
  </SafeAreaView>
  )
}

export default QuestionPaper