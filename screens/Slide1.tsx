import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
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
          source={require('../assets/images/firstpic.jpg')}
          style={style.image}
          resizeMode="cover" 
        />
      </View>
      <View style={style.textContainer}>
        <Text style={style.textDesign}>Unleash Your Style</Text>
        <Text style={style.textDesign2}>Premium streetwear crafted for the bold and fearless.</Text>
      </View>

      <View style={style.dotsContainer}>
        <View style={[style.dot, style.activeDot]} />
        <View style={style.dot} />
        <View style={style.dot} />
      </View>
      /**asdw */
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
