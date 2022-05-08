import { SafeAreaView,View, Text, FlatList,ScrollView,Image,TextInput } from 'react-native'
import React,{useState,useEffect} from 'react'
import TabBottom from '../component/TabBottom'
import ProductCard from '../component/ProductCard'
import ProductCategoryHeader from '../component/ProductCategoryHeader'
import FocusedStatusBar from '../component/FocusedStatusBar'

import { COLORS,SIZES,assets } from "../constants";
import TopHeader from '../component/TopHeader'

const HomeSearch = ({route}) => {
  const {keyword, allData} = route.params;

  const [data,setData] = useState([]);
  const [value,setValue] = useState('');

  useEffect(() => {
    if (keyword.length === 0) { 
        setData([]);
      }
  
      const filterData = allData.length > 0 && allData.filter((item) =>
        item?.productName?.toLowerCase().includes(keyword?.toLowerCase())
      );
  
      if (filterData.length === 0) {
        setData([]);
      } else {
        setData(filterData);
      }
  }, [])
  

  const handleSearch = (val) => {
   
    if (val.length === 0) { 
      setData([]);
    }

    const filterData = allData.length > 0 && allData.filter((item) =>
      item?.productName?.toLowerCase().includes(val?.toLowerCase())
    );

    if (filterData.length === 0) {
      setData([]);
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
      data?.length > 0 ? data.map((item,i)=>(
         <View key={i}>
         <ProductCard item={item} />
         </View>
       )) : <View>
           <Text>
               Product not found
           </Text>
       </View>
     }     
        </View>
        </ScrollView>
      <TabBottom />
    </SafeAreaView>
  )
}

export default HomeSearch