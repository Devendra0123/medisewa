import { View, Text, SafeAreaView,FlatList,ScrollView } from 'react-native'
import React, { useState } from "react";
import FocusedStatusBar from '../component/FocusedStatusBar';

import { COLORS,SIZES, FONTS,ProductData, assets } from "../constants";
import ProductCategoryHeader from '../component/ProductCategoryHeader';
import TabBottom from '../component/TabBottom';
import ProductCard from '../component/ProductCard';

const ProductDetails = ({route}) => {
  const {data} = route.params;

  const filteredData = ProductData.filter((item) =>
item.productCategory.toLowerCase() == data.productCategory.toLowerCase()
)

const relatedProduct = filteredData.filter((item)=> item.id != data.id)

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
       <FocusedStatusBar backgroundColor={COLORS.primary} />
    
       <View style={{
         flex: 1,
         flexDirection:'column'
       }}> 
      
       <FlatList
           vertical
           data={relatedProduct}
           renderItem={({ item }) => <ProductCard item={item} />}
           keyExtractor={(item) => item.id}
           showsHorizontalScrollIndicator={false}
           ListHeaderComponent={<ProductCategoryHeader data={data} />}
         /> 
  
       </View>
       <View>
  <TabBottom />  
</View>
     
    </SafeAreaView>
  )
}

export default ProductDetails