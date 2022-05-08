import { SafeAreaView,View,ScrollView,Image,TextInput } from 'react-native'
import React,{useState} from 'react'
import TabBottom from '../component/TabBottom'
import ProductCard from '../component/ProductCard'
import FocusedStatusBar from '../component/FocusedStatusBar'

import { COLORS,SIZES,assets } from "../constants";
import TopHeader from '../component/TopHeader'

const ProductPage = ({route}) => {
  const {filteredData, allData} = route.params;

  const [data,setData] = useState(filteredData)

  const handleSearch = (value) => {
   
    if (value.length === 0) { 
      setData(filteredData);
    }

    const filterData = allData.length > 0 && allData.filter((item) =>
      item?.productName?.toLowerCase().includes(value?.toLowerCase())
    );

    if (filterData.length === 0) {
      setData(filteredData);
    } else {
      setData(filterData);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
    <FocusedStatusBar backgroundColor={COLORS.primary}/>

    <ScrollView>
    <View style={{
      backgroundColor:COLORS.primary,
      padding: 10
    }}>
     <TopHeader />
    </View>

    
    <View style={{ marginTop: SIZES.font, alignItems:'center',marginBottom: 10 }}>
        <View
          style={{
            width: "80%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search Products"
            style={{ flex: 1 }}
            onChangeText={(val)=>handleSearch(val) }
          />
        </View>
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
         <ProductCard item={item} />
         </View>
       ))
     }     
        </View>
        </ScrollView>
      <TabBottom />
    </SafeAreaView>
  )
}

export default ProductPage