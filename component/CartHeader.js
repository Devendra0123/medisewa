import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopHeader from './TopHeader'
import { assets, COLORS, FONTS } from '../constants'
import { DataTable } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";

const CartHeader = () => {
  const navigation = useNavigation();
  
    const [cartData, setCartData] = useState([])
    
  useEffect(async() => {
    try{
      const value = await AsyncStorage.getItem('cart');
     
      if(value !== null){
        const cartItems = JSON.parse(value);
        setCartData(cartItems);
      }else{
        setCartData([]);
      }
    } catch(error){
     console.log(error)
    }   
  }, [])

  return (
    <View>
      <View style={{
        backgroundColor:COLORS.primary,
        padding: 10
      }}>
        <TopHeader />
      </View>
      <Text style={{paddingLeft: 10, paddingTop: 10, fontFamily: FONTS.bold}}>Cart</Text>

       <View style={{alignItems:'center'}}>
                <DataTable style={{width: '100%'}}>
                    <DataTable.Header>
                      <DataTable.Title>Product</DataTable.Title>
                      <DataTable.Title>Quantity</DataTable.Title>
                      <DataTable.Title>Price</DataTable.Title>
                    </DataTable.Header>
                    {
                      cartData?.length > 0 && cartData?.map((item,index)=>(
                        <DataTable.Row key={index}>
                           <DataTable.Cell style={{paddingVertical: 5}}>
                             <ProductInfo productName={item.productInfo.productName} productPrice={item.productInfo.productPrice}/>
                           </DataTable.Cell>
                           <DataTable.Cell style={{justifyContent: 'center'}}>{item.quantity}</DataTable.Cell>
                           <DataTable.Cell>Rs.{item.productInfo.productPrice * item.quantity}</DataTable.Cell>
                        </DataTable.Row>
                      ))
                  }
                   
                </DataTable>
                
                <Text style={{marginTop: 15}}>
                SubTotal :  {`Rs.${cartData.reduce(
                           (acc, item) => acc + item.quantity * item.productInfo.productPrice,
                           0
                         )}`}
              </Text>

                <TouchableOpacity
                  style={{marginTop: 20}}
                  onPress={()=> navigation.navigate('ShippingDetails',{data: cartData})}>
                <Text 
                  style={{backgroundColor:'skyblue',fontFamily: FONTS.semiBold,textAlign:'center',paddingVertical: 10, paddingHorizontal: 20, borderRadius: 15}}>
                  Process Order
                </Text>
              </TouchableOpacity>
              </View>
    </View>
  )
}

const ProductInfo = ({productName,productPrice})=>{
    return(
        <View>
            <Text>
                {productName}
            </Text>
            <Text>
                Price: Rs.{productPrice}
            </Text>
          
        </View>
    )
}

export default CartHeader