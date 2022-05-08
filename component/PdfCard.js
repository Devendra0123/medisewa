import { View,Alert, Text, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES } from '../constants'

const PdfCard = ({pdfImage, pdfTitle, pdfLink}) => {

    const handlePress = async(url)=>{
        try{
            const supported = await Linking.canOpenURL(url);

            if (supported) {
              await Linking.openURL(url);
            } else {
              Alert.alert(`Don't know how to open this URL: ${url}`);
            }
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <TouchableOpacity
      onPress={()=> handlePress(pdfLink)}
      style={{
        width: 200,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginBottom: 30,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}>
      <Image 
        source={{uri : pdfImage}}
        resizeMode="cover"
        style={{
            width: 200,
            height: 300
        }} />
      <Text>
          {pdfTitle}
      </Text>
    </TouchableOpacity>
  )
}

export default PdfCard