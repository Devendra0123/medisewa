import { View, Text, SafeAreaView, ScrollView, Alert,TouchableOpacity } from 'react-native'
import React from 'react'
import FocusedStatusBar from '../component/FocusedStatusBar';
import TopHeader from '../component/TopHeader';
import { COLORS } from '../constants';
import { DataTable } from 'react-native-paper';
import TabBottom from '../component/TabBottom';

const OrderDetails = ({route}) => {

    const {data} = route.params;

    const alert = ()=>{
       Alert.alert(
         'Confirm!',
         'Do you want to confirm delivery?',
         [
           {
             text: 'Cancel',
             onPress: ()=> {
               console.log('Cancel')
             }
           },
           {
             text: 'OK',
             onPress:()=>{
               console.log('ok')
             }
           }
         ]
       );
    }

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column', zIndex: -1}}>
      <FocusedStatusBar />
      <ScrollView style={{flex: 1}}>
       <View style={{
          backgroundColor:COLORS.primary,
          padding: 10
          }}>
            <TopHeader />
       </View>

       <View style={{paddingHorizontal: 10}}>
           <Text>
               Name: {data.customerInfo.name}
           </Text>
           <Text>
               Mobile Number: {data.customerInfo.mobileNumber}
           </Text>
           <Text>
               Location: {data.customerInfo.location}
           </Text>
       </View>

       <View>
         <DataTable style={{width: '100%'}}>
                    <DataTable.Header>
                      <DataTable.Title>Product</DataTable.Title>
                      <DataTable.Title>Quantity</DataTable.Title>
                      <DataTable.Title>Price</DataTable.Title>
                    </DataTable.Header>
                    {
                      data.orderedProducts?.length > 0 && data.orderedProducts?.map((item,index)=>(
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
       </View>
       <TouchableOpacity onPress={alert}>
         <Text>
           Confirm Delivery
         </Text>
       </TouchableOpacity>
       </ScrollView>
       <TabBottom />
    </SafeAreaView>
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

export default OrderDetails