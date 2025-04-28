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
          source={{ uri: 'https://revolutionwatch.com/wp-content/uploads/2022/03/29-jacob-arabo-mobile-image.jpg' }}
          style={style.image}
          resizeMode="cover"
        />
     
      </View>
      <View style={style.textContainer}>
        <Text style={style.textDesign}>Own Your Moment</Text>
        <Text style={style.textDesign2}> Find the perfect watch to tell your story.</Text>
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
