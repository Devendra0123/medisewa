import { View, Text, FlatList } from 'react-native'
import React from 'react'

import  ProductCard  from './ProductCard'
import { COLORS, FONTS, SIZES, SHADOWS, assets } from "../constants";

const CategoryWithProduct = ({featured, productCategory, ProductData}) => {

    const filteredData = featured ? ProductData.filter((item) =>
    item.featured == featured
  ) : ProductData.filter((item) =>
  item.productCategory.toLowerCase() == productCategory.toLowerCase()
)

  return (
    <View>
     
           {featured?   
           <Text style={{
         padding: 10,
         fontFamily: FONTS.semiBold,
         textTransform: 'capitalize'
       }}>Featured</Text> :
        <Text style={{
         padding: 10,
         fontFamily: FONTS.semiBold,
         textTransform: 'capitalize'
       }}>
         {productCategory} products
       </Text>}
       
            <View style={{ 
                zIndex: 0, 
                flexDirection: 'row',
                width: '100%',
                }}>
     
         <FlatList
           horizontal
           data={filteredData}
           renderItem={({ item }) => <ProductCard item={item} />}
           keyExtractor={(item) => item.id}
           showsHorizontalScrollIndicator={false}
         />      
        </View>
    </View>
  )
}
export default CategoryWithProduct