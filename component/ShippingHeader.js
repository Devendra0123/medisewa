import { View, Text,TextInput, Image, TouchableOpacity } from 'react-native'
import React,{ useState } from 'react'
import TopHeader from '../component/TopHeader'
import { COLORS,SIZES, FONTS } from '../constants'
import { useNavigation } from '@react-navigation/native'

const ShippingHeader = ({data}) => {
    const navigation = useNavigation()
    
  const [name,setName] = useState('');
  const [mobileNumber,setMobileNumber] = useState(null);
  const [location,setLocation] = useState('');

  const handleNext = ()=>{
    navigation.navigate('ConfirmDetails',{data,name,mobileNumber,location})
  }

  return (
    <View>
         <View style={{
      backgroundColor:COLORS.primary,
      padding: 10
    }}>
     <TopHeader />
    </View>

    <View style={{
        alignItems: 'center',
    }}>
        <Text style={{
          fontFamily: FONTS.bold,
          fontSize:16
        }}>
            ShippingDetails
        </Text>

        <View style={{
            width: '100%',
            alignItems:'center',
        }}>
            <TextInput
              style={{
                  width: '80%',
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10
              }}
              placeholder='Enter Your Name'
              onChangeText={(val)=> setName(val)}
             />

            <TextInput
              style={{
                  width: '80%',
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10
              }}
              placeholder='Enter Location'
              onChangeText={(val)=> setLocation(val)}
             />

           <TextInput
              style={{
                  width: '80%',
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10
              }}
              placeholder='Enter mobile Number'
              onChangeText={(val)=> setMobileNumber(val)}
              keyboardType='numeric'
             />
        </View>

        <TouchableOpacity onPress={handleNext}>
          <Text style={{
            backgroundColor: 'skyblue',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 10
          }}>
            Next
          </Text>
        </TouchableOpacity>

    </View>

    </View>
  )
}

export default ShippingHeader