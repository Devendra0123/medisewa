import { View, Text, Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS, SIZES, assets } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const TopHeader = () => {

  const navigation = useNavigation();

  const [userEmail,setUserEmail] = useState(null);

  useEffect(async()=>{
    const user = await AsyncStorage.getItem('user');
    if(user){
      setUserEmail(user);
    }
  },[]);

  return (
    <View>
         <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: COLORS.primary,
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 120, height: 45 }}
        />

        {
          userEmail == 'medisewa@gmail.com' ? 
          <TouchableOpacity onPress={()=> navigation.navigate('GetOrder')} style={{ width: 30, height: 35 }}>
          <Image
            source={assets.plusIcon}
            resizeMode="contain"
            style={{ width: 30, height: 35}}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </TouchableOpacity> :
        <TouchableOpacity onPress={()=> navigation.navigate('GetOrder')} style={{ width: 30, height: 35 }}>
          <Image
            source={assets.menu}
            resizeMode="contain"
            style={{ width: 30, height: 35}}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </TouchableOpacity>
        }
      
      </View>
    </View>
  )
}

export default TopHeader