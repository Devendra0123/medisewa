import { View,TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import { assets } from "../constants";
import { useNavigation } from "@react-navigation/native";

const TabBottom = ({focused}) => {

    const navigation = useNavigation();
  return (
    <View style={{
        backgroundColor: '#BB9981',
        borderRadius: 15,
        height: 90,
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
     }}>
        <TouchableOpacity 
          onPress={() => navigation.navigate("Home",{id:1})}
          style={{
                alignItems:'center',
                justifyContent: 'center',
                top: 0
            }}>
                <Image source={assets.homeIcon}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused? '#e32f45' : '#ffffff'
                }} />
                <Text style={{
                    color: focused? '#e32f45' : '#ffffff',
                    fontSize: 12
                }}>
                    Home
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate("Home",{id:1})}
             style={{
                alignItems:'center',
                justifyContent: 'center',
                top: 0
            }}>
                <Image source={assets.contactIcon}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused? '#e32f45' : '#ffffff'
                }} />
                <Text style={{
                    color: focused? '#e32f45' : '#ffffff',
                    fontSize: 12
                }}>
                    Contact
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => navigation.navigate("Cart",{id:1})}
            style={{
                 top: -30,
        justifyContent:'center',
        alignItems:'center',
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45'
        }}>
            <Image source={assets.cartIcon}
            resizeMode='contain'
            style={{
                width: 30,
                height: 30,
                tintColor: '#ffffff'
            }} />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate("PdfScreen",{id:1})}
             style={{
                alignItems:'center',
                justifyContent: 'center',
                top: 0
            }}>
                <Image source={assets.pdfIcon}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused? '#e32f45' : '#ffffff'
                }} />
                <Text style={{
                    color: focused? '#e32f45' : '#ffffff',
                    fontSize: 12
                }}>
                    Pdf
                </Text>
            </TouchableOpacity>

            
            <TouchableOpacity
            onPress={() => navigation.navigate("QuestionPaper",{id:1})}
             style={{
                alignItems:'center',
                justifyContent: 'center',
                top: 0
            }}>
                <Image source={assets.questionIcon}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused? '#e32f45' : '#ffffff'
                }} />
                <Text style={{
                    color: focused? '#e32f45' : '#ffffff',
                    fontSize: 12
                }}>
                    Question
                </Text>
            </TouchableOpacity>
    </View>
  )
}

export default TabBottom