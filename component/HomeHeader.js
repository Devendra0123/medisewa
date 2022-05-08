import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import { CircleButton } from "./Button";
import CategoryWithProduct from "./CategoryWithProduct";
import ProductCategory from "./ProductCategory";
import TopHeader from "./TopHeader";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = ({ onSearch, data }) => {
  const navigation = useNavigation();

  const [keyword,setKeyword] = useState('')
  return (
    <View
      style={{
        padding: SIZES.font,
      }}
    >
   
      <TopHeader />
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}>
          Hello Dear Customer 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}>
          Let’s find best product
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
       
          <TextInput
            placeholder="Search Products"
            style={{ 
            flex: 1,
            borderRadius: 10,
            backgroundColor: COLORS.gray,
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2 }}
            onChangeText={(val)=> setKeyword(val)}
          />
          <TouchableOpacity
           onPress={()=> navigation.navigate('HomeSearch',{keyword: keyword, allData: data})}
           style={{
             borderRadius: 10,
            backgroundColor: 'skyblue',
            paddingHorizontal: SIZES.font,
            paddingVertical: 13 ,
            alignItems: 'center',
            justifyContent:'center',
            marginLeft: 5
          }}>
           <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20
             }}
          />
          </TouchableOpacity>
       
        </View>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection:'row',
          alignItems:'center',
          justifyContent: 'space-around',
          padding: 10,
          paddingVertical: 20,
          backgroundColor:'white',
          marginTop: SIZES.font,
          borderRadius: 10
        }}
      >
        <Image
          source={assets.logo}
          style={{
            width: 120,
            height: 35,
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
       <View>
       <Text style={{
         fontFamily: FONTS.semiBold,
         fontSize: 12
       }}>
          As Fast as Your Mind
        </Text>
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: 12
        }}>
          As Trustworthy as Your Heart
        </Text>
       </View>
       <CircleButton imgUrl={assets.heart} right={0} top={0} />

      </View>
      <ProductCategory ProductData={data} />
      <CategoryWithProduct featured={true} ProductData={data} />

    
    </View>
  );
};
export default HomeHeader;