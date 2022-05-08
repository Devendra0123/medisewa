import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper';
import FocusedStatusBar from '../component/FocusedStatusBar';
import TopHeader from '../component/TopHeader'
import { COLORS } from '../constants'
import TabBottom from '../component/TabBottom';
import { useNavigation } from "@react-navigation/native";

const orderData = [
    {
        customerInfo : {
            location: 'Tinkune',
            mobileNumber: '9807717694',
            name: 'Deepak'
        },
        delivered: false,
        orderedProducts : [
            {
                productInfo : {
                    productName: 'GIC cement',
                    productPrice: 300,
                    image: ""
                },
                quantity: 3
            }
        ]
    }
]

const GetOrder = () => {
  const navigation = useNavigation()

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
        
        <Text style={{textAlign: 'center'}}>
          Orders
        </Text>
      <DataTable style={{width: '100%'}}>
                    <DataTable.Header>
                      <DataTable.Title>Locaton</DataTable.Title>
                      <DataTable.Title>Price</DataTable.Title>
                    </DataTable.Header>
                    {
                      orderData?.length > 0 && orderData?.map((item,index)=>(
                        <TouchableOpacity key={index} onPress={()=> navigation.navigate('OrderDetails',{data: item})}>
                        <DataTable.Row>
                           <DataTable.Cell style={{paddingVertical: 5}}>
                              {item.customerInfo.location}
                           </DataTable.Cell>
                           <DataTable.Cell>
                           {`Rs.${item.orderedProducts.reduce(
                           (acc, item) => acc + item.quantity * item.productInfo.productPrice,
                           0
                           )}`}
                           </DataTable.Cell>
                        </DataTable.Row>
                        </TouchableOpacity>
                      ))
                  }
                   
                </DataTable>
              </ScrollView>
                <TabBottom />
    </SafeAreaView>
  )
}

export default GetOrder