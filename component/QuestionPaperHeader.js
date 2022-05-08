import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import TopHeader from './TopHeader'
import { COLORS } from '../constants';

import { useNavigation } from "@react-navigation/native";

const QuestionPaperHeader = ({data}) => {

    const navigation = useNavigation();

    const YearCard = ({examYear,questionImage})=>{
        return(
            <TouchableOpacity
             onPress={()=> navigation.navigate('QuestionPaperImage',{data:questionImage})}
             style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'skyblue',
                width: 100,
                height: 100,
                borderRadius: 15,
                marginRight: 15
            }}>
                <Text>
                    {examYear}
                </Text>
            </TouchableOpacity>
        )
    }

  return (
    <View>
     <View style={{
        backgroundColor:COLORS.primary,
        padding: 10
      }}>
        <TopHeader />
      </View>
      <Text style={{textAlign:'center', width:'100%'}}>Question Paper</Text>

      <View style={{padding: 10}}>
          {
              data?.map((item,index)=>(
                  <View key={index}>
                     <Text style={{paddingVertical: 10}}>
                         {item.programYear == 1 ? 'BDS 1st Year' : item.programYear == 2 ? 'BDS 2nd Year' : item.programYear == 3 ? 'BDS 3rd Year' : item.programYear == 4 ? 'BDS 4th Year' : item.programYear == 5 ? 'BDS 5th Year' : null}
                     </Text>

                     <View>
                      <FlatList
                          horizontal
                          data={item.questionPaper}
                          renderItem={({ item }) => <YearCard examYear={item.year} questionImage={item.questionPaper} />}
                          keyExtractor={(item,index) => index}
                          showsHorizontalScrollIndicator={false}
                        />  
                     </View>
                  </View>
              ))
          }
      </View>
    </View>
  )
}


export default QuestionPaperHeader