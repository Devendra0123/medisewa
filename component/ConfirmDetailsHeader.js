import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import TopHeader from './TopHeader'
import { COLORS, FONTS } from '../constants';
import app from '../firebase';
import {getFirestore, collection, addDoc } from "firebase/firestore";

import { DataTable } from 'react-native-paper';

const ConfirmDetailsHeader = ({data,name,mobileNumber,location}) => {

  const db = getFirestore(app);

  const placeOrder = async()=>{
    try {
      const docRef = await addDoc(collection(db, "orders"), {
        orderedProducts: data,
        customerInfo: {
          name,
          mobileNumber,
          location
        },
        delivered: false
      });
      Alert.alert('Order placed successfully')
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      Alert.alert('Failed to place order')
    }
  }

  return (
    <View>
      <View style={{
        backgroundColor:COLORS.primary,
        padding: 10
      }}>
        <TopHeader />
      </View>

      <View style={{alignItems:'center'}}>
          <Text style={{
              width: '100%',
              textAlign: 'center',
              padding: 10,
              fontFamily: FONTS.bold,
              fontSize: 16
          }}>
              Confirm Details
          </Text>

          <View style={{
             width:'100%',
             alignItems:'flex-start',
              paddingLeft: 10
          }}>
              <Text>
                  Name : {name}
              </Text>

              <Text>
                  Mobile Number : {mobileNumber}
              </Text>

              <Text>
                  Location : {location}
              </Text>
          </View>

          <View style={{
              width: '100%',
              paddingLeft: 10
          }}>
              <Text style={{
                  fontFamily: FONTS.semiBold,
                  paddingTop: 15
              }}>
                  Products
              </Text>

              <View style={{width:'100%'}}>
                <DataTable style={{width:'100%'}}>
                    <DataTable.Header>
                      <DataTable.Title>Product</DataTable.Title>
                      <DataTable.Title>Quantity</DataTable.Title>
                      <DataTable.Title>Price</DataTable.Title>
                    </DataTable.Header>
                    {
                      data?.map((item,index)=>(
                        <DataTable.Row key={index}>
                        <DataTable.Cell>
                             <ProductInfo productName={item.productInfo.productName} productPrice={item.productInfo.productPrice}/>
                           </DataTable.Cell>
                           <DataTable.Cell>{item.quantity}</DataTable.Cell>
                           <DataTable.Cell>Rs.{item.productInfo.productPrice * item.quantity}</DataTable.Cell>
                        </DataTable.Row>
                      ))
                  }
                   
                </DataTable>
              </View>

              <Text style={{padding:10}}>
                Shipping Charge: Rs.100
              </Text>

              <Text style={{padding:10}}>
                SubTotal :  {`Rs.${data.reduce(
                           (acc, item) => acc + item.quantity * item.productInfo.productPrice,
                           100
                         )}`}
              </Text>
          </View>

          <TouchableOpacity
            style={{width: '80%'}}
            onPress={placeOrder}>
              <Text style={{backgroundColor:'skyblue',textAlign:'center',paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15}}>
                Place Order
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

export default ConfirmDetailsHeader