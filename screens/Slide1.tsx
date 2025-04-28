import {StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../styles/main';
import { Ionicons} from '@expo/vector-icons';
import { customStyle } from '../styles/customStyle';


export default function Slide1() {

  const navigate = useNavigation();
  return (
    <View style={style.mainContainer}>
      <View style={style.imgContainer}>
        <Image
          source={{ uri: 'https://www.watchpro.com/cloud/2024/11/14/Ya1A9BQ0-ai-generated-9096220_1920-1200x675.jpg' }}
          style={style.image}
          resizeMode="cover" 
        />
      </View>
      <View style={style.textContainer}>
        <Text style={style.textDesign}>Discover Precision</Text>
        <Text style={style.textDesign2}>Curated timepieces from the world's finest watchmakers.</Text>
      </View>

      <View style={style.dotsContainer}>
        <View style={[style.dot, style.activeDot]} />
        <View style={style.dot} />
        <View style={style.dot} />
       
      </View>
      
      <View style={{marginTop: 30}}>
        <TouchableOpacity onPress={() => navigate.navigate("Slide2")} style={style.buttonContainer}>
            <Text style={style.next}>
              Next
            </Text>
        </TouchableOpacity>
      </View>
      <Text style={{marginTop: 20, 
                    fontSize:13,
                    color: customStyle.buttonColor
                  }} onPress={() => navigate.navigate("guard/Home")}>Skip</Text>
    </View>
  )
}
