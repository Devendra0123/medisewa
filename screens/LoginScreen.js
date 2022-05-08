import { View, Text, TextInput, TouchableOpacity,SafeAreaView,Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { assets } from "../constants";
import  app  from '../firebase'
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const navigation = useNavigation();
    const auth = getAuth(app);
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    useEffect(() => {
      onAuthStateChanged(auth,(user) => {
        if(user){
          navigation.navigate('Home')
        }
      })
    }, [])
    

    const handleSignUp = async()=>{
      createUserWithEmailAndPassword(auth, email, password)
      .then(async(cred)=>{
        await AsyncStorage.setItem('user', cred.user.email);
        navigation.navigate('Home');
      })
      .catch(err=>{
        console.log(err.message);
        console.log(err.code);
      })
    }

    const handleLogin = async()=>{
      signInWithEmailAndPassword(auth, email, password)
      .then(async(cred)=>{
        await AsyncStorage.setItem('user', cred.user.email);
        navigation.navigate('Home');
      })
      .catch(err=>{
        console.log(err.message);
        console.log(err.code);
      })
    }

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column', zIndex: -1}}>
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BB9981'
    }}>
        <View>
            <Image source={assets.logo}
            resizeMode= 'contain'
            style={{width: 200,height: 70}} />
        </View>
        <TextInput
              style={{
                  width: '80%',
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10
              }}
              placeholder='Enter Your Email'
              onChangeText={(val)=> setEmail(val)}
             />

            <TextInput
              secureTextEntry
              style={{
                  width: '80%',
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10
              }}
              placeholder='Enter Password( atleast 6 )'
              onChangeText={(val)=> setPassword(val)}
             /> 

             <TouchableOpacity onPress={handleLogin}>
                 <Text
                  style={{
                     paddingVertical: 10,
                     fontSize: 17,
                     width: 150,
                     backgroundColor: 'blue',
                     textAlign: 'center',
                     color: 'white'
                 }}>
                     Login
                 </Text>
              </TouchableOpacity>

             <TouchableOpacity
             onPress={handleSignUp}
              style={{marginTop: 10}}>
                 <Text 
                   style={{
                     paddingVertical: 10,
                     fontSize: 17,
                     width: 150,
                     backgroundColor: 'white',
                     borderWidth: 1, 
                     textAlign: 'center'
                 }}>
                     SignUp
                 </Text>
             </TouchableOpacity>

           <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
             <Text style={{
                 fontSize: 17,
                 marginTop: 10,
                 textDecorationLine: 'underline',
              }}>
               Skip
             </Text>
           </TouchableOpacity>

    </View>
    </SafeAreaView>
  )
}

export default LoginScreen