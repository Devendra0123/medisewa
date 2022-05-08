import React, { useState, useEffect } from 'react';
import { Button, Image, View,Text, TextInput,TouchableOpacity, Picker } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import TopHeader from './TopHeader';
import { COLORS } from '../constants';

import app from '../firebase';
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function ImagePickerExample() {

  const db = getFirestore(app);

  const category = ["Prosthodontics","Conservative","Orthodontics","Periodontics","Pedodontics","Apron Scrub"];
  const [image, setImage] = useState(null);
  const [productName,setProductName] = useState('');
  const [productPrice,setProductPrice] = useState(null);
  const [productDesc,setProductDesc] = useState('');
  const [featured, setFeatured] = useState('Is Featured');
  const [productCategory, setProductCategory] = useState('Select Category');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadProductToFirebase = async()=>{
    try {
      const docRef = await addDoc(collection(db, "products"), {
        productName: productName,
        productDescription: productDesc,
        productPrice: productPrice,
        image: image,
        featured: featured,
        productCategory: productCategory
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        backgroundColor:COLORS.primary,
        padding: 10
      }}>
        <TopHeader />
      </View>
      <View style={{width:'100%', alignItems: 'center'}}>
        <TextInput
              style={{
                  width: '80%',
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10
              }}
              placeholder='Enter Product Name'
              onChangeText={(val)=> setProductName(val)}
             />

      <Picker
        selectedValue={productCategory}
        style={{
                  width: '80%',
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10
              }}
        onValueChange={(itemValue, itemIndex) => setProductCategory(itemValue)}
      >
        {
          category.map((item,index)=>(
            <Picker.Item key={index} label={item} value={item} />
          ))
        }
      </Picker>

      <Picker
        selectedValue={featured}
        style={{
                  width: '80%',
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10
              }}
        onValueChange={(itemValue, itemIndex) => setFeatured(itemValue)}
      >
       
            <Picker.Item label='Yes' value={true} />
            <Picker.Item label="No" value={false} />
        
      </Picker>
          <TextInput
              style={{
                  width: '80%',
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10
              }}
              placeholder='Product Price'
              keyboardType='numeric'
              onChangeText={(val)=> setProductPrice(val)}
             /> 

              <TextInput
               multiLines
              style={{
                  width: '80%',
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10
              }}
              placeholder='Enter Product Description'
              onChangeText={(val)=> setProductDesc(val)}
             />  

          <Button style={{width: '80%'}} title="Pick Product image" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

              
         <TouchableOpacity onPress={uploadProductToFirebase}>
           <Text style={{
             width: '80%',
             padding:10,
             backgroundColor:'orange',
             borderRadius: 10,
             marginTop:20,
             textAlign: 'center'
           }}> 
             Upload Product
           </Text>
         </TouchableOpacity>
      </View>
  
    </View>
  );
}