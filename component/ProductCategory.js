import { View, Text, FlatList,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

import { categories,COLORS, SIZES, FONTS, SHADOWS } from "../constants";


const ProductCategory = ({ProductData, featured}) => {
  const navigation = useNavigation();

const handlePress = (productCategory)=>{
  const filteredData = featured ? ProductData.filter((item) =>
  item.featured == featured
) : ProductData.filter((item) =>
item.productCategory.toLowerCase() == productCategory.toLowerCase()
)
navigation.navigate("ProductPage", { filteredData: filteredData, allData: ProductData })
}
  return (
    <View>

      <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap'
      }}>
        {
            categories.map((c,i)=>(
                <View key={i} style={{
                    flexDirection:'column',
                    alignItems: 'center',
                    paddingTop: 10
                }}>
             <TouchableOpacity
      style={{
        width: 70,
        height: 70,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
      }}
      onPress={()=>handlePress(c.name)}
    >
      <Image
        source={c.image}
        resizeMode="cover"
        style={{ width: 70, height: 70, borderRadius: 25 }}
      />
    </TouchableOpacity>
    <Text style={{
      fontFamily: FONTS.regular
    }}>
        {c.name}
    </Text>
        </View>
            ))
        }
      </View>
    </View>
  )
}
export default ProductCategory