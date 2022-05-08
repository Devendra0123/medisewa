import { View,SafeAreaView, FlatList,ScrollView } from 'react-native'
import React from 'react'

import HomeHeader from '../component/HomeHeader'
import TabBottom from '../component/TabBottom'
import CategoryWithProduct from '../component/CategoryWithProduct'
import { categories } from "../constants";
import FocusedStatusBar from '../component/FocusedStatusBar'
import { COLORS, ProductData } from "../constants";

const Home = () => {

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column', zIndex: -1}}>
    <FocusedStatusBar backgroundColor={COLORS.primary} />
     <View style={{ flex: 1}}>

     <FlatList
            data={categories}
            renderItem={({ item }) => <CategoryWithProduct productCategory={item.name} ProductData={ProductData} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader data={ProductData} />}
          />    
     </View>
<View>
  <TabBottom />  
</View>
     <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
    </SafeAreaView>
  )
}

export default Home