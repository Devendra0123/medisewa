import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React,{ useState,useEffect } from 'react'
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { useNavigation } from "@react-navigation/native";
import TopHeader from './TopHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductCategoryHeader = ({data}) => {
  const [text, setText] = useState(data.productDescription.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartExist,setCartExist] = useState(false);
  const [cartData,setCartData] = useState([])
  const navigation = useNavigation();

  useEffect(async() => {
    try{
      const value = await AsyncStorage.getItem('cart');
      if(value !== null){
        setCartExist(true);
        const cartItems = JSON.parse(value);
        setCartData(cartItems);
      }else{
        setCartExist(false)
      }
    } catch(error){
     console.log(error)
    }   
  }, [cartExist])
  
  const handleAddToCart = async()=>{
   
       cartData.push({productInfo: data, quantity: quantity});
       try {
        await AsyncStorage.setItem(
          'cart',
          JSON.stringify(cartData)
        );
      } catch (error) {
        console.log(error)
      }
    
      Alert.alert('Added to cart')
  }

  const handleBuy = ()=>{
    navigation.navigate('ShippingDetails',{data: [{productInfo: data, quantity: quantity}]});
  }

  return (
    <View>
      <View style={{
        backgroundColor:COLORS.primary,
        padding: 10
      }}>
       <TopHeader />
      </View>
     
     <View style={{
          width: '100%',
          height: 200,
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
         <Image source={data.image} 
            resizeMode="cover"
            style={{
            width: "100%",
            height: "100%",
            borderBottomLeftRadius: SIZES.font,
            borderBottomRightRadius: SIZES.font,
          }} />
       </View>

       <View style={{width:'100%', padding: SIZES.font, alignItems:'center'}}>
       <Text  style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: 'black',
          }}>
         {data.productName}
       </Text>
       <View style={{
         flexDirection:'row',
         alignItems: 'center'
       }}>
       <Text  style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: 'black',
          }}>
        Price : 
       </Text>
       <Text style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: 'green',
            paddingLeft: 10
          }}>
           Rs.{data.productPrice}
       </Text>
       </View>

       <View style={{width:"100%",alignItems:'center', marginTop:10}}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: 'black',
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
              }}
              onPress={() => {
                if (!readMore) {
                  setText(data.productDescription);
                  setReadMore(true);
                } else {
                  setText(data.productDescription.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
        </View>
       </View>

       <View style={{
         width: '100%',
         alignItems:'center'
       }}>
         <TextInput 
         style={{
           width: '80%',
           height: 40,
           borderWidth: 1,
           padding: 10,
           borderRadius: 10
         }}
         placeholder='Enter the quantity of product'
         keyboardType='numeric'
         onChangeText={(val)=> setQuantity(val)} />
       </View>

     <View style={{
         width: '100%',
         alignItems:'center'
     }}>
     <View style={{
         width: '70%',
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-evenly'
       }}>
         <TouchableOpacity 
           onPress={handleAddToCart}>
           <Text style={{
             padding:10,
             backgroundColor:'orange',
             borderRadius: 10,
             marginTop:20
           }}> 
             Add to Cart
           </Text>
         </TouchableOpacity>

         <TouchableOpacity 
           onPress={handleBuy}
         >
           <Text style={{
             padding: 10,
             paddingLeft:20,
             paddingRight:20,
             backgroundColor:'blue',
             borderRadius: 10,
             marginTop:20,
             color: 'white'
           }}>
             Buy
           </Text>
         </TouchableOpacity>
       </View>
     </View>

    </View>
  )
}

export default ProductCategoryHeader