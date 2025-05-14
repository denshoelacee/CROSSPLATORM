import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../styles/main';
import { Ionicons } from '@expo/vector-icons';
import { customStyle } from '../styles/customStyle';





export default function Slide3() {

  const navigate = useNavigation();
  return (
    <View style={style.mainContainer}>
      <View style={style.imgContainer}>
      <Image
          source={require('../assets/images/thirdpic.jpg')}
          style={style.image}
          resizeMode="cover"
        />
     
      </View>
      <View style={style.textContainer}>
        <Text style={style.textDesign}>Carry the Essentials</Text>
        <Text style={style.textDesign2}>From durable bottles to everyday accessories — gear up with style and purpose.</Text>
      </View>

      <View style={style.dotsContainer}>
        <View style={style.dot} />
        <View style={style.dot} />
        <View style={[style.dot, style.activeDot]} />
      </View>
      <View style={{marginTop: 30}}>
      <TouchableOpacity onPress={() => navigate.navigate("guard/Home")} style={style.buttonContainer}>
          <Text style={style.next}
          >Get Started!</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
