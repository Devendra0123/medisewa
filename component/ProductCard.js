import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES, SHADOWS, assets } from "../constants";

const ProductCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <View   style={{
        width: 200,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginBottom: 30,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}>

      <View style={{
          width: 200,
          height: 269
        }}>
     <TouchableOpacity onPress={()=> navigation.navigate('ProductDetails',{data:item})}>
        <View style={{
          width: 200,
          height: 150,
        }}>
             <Image source={{uri:item.image}}
              resizeMode="cover"
            style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }} />
         </View>

         <View style={{ width: "100%",flexDirection: 'column', justifyContent:'center', padding: SIZES.font }}>
        <Text style={{width: '100%',
         textAlign: 'center',
         fontFamily: FONTS.semiBold,
         fontSize: 16,
         color: 'black',
          }}
          >
          {item.productName}
        </Text>

        <Text style={{
          width: '100%',
          textAlign: 'center',
          fontFamily: FONTS.semiBold,
          fontSize: 14,
          color: COLORS.primary
        }}>
          Rs.{item.productPrice}
        </Text>
        </View>
     </TouchableOpacity>
   <View>
   <Button
        title="Add to cart"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
   </View>  
      </View>    
    </View>
  )
}
export default ProductCard