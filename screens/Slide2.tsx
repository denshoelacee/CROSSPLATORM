import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../styles/main';
import { FontAwesome6} from '@expo/vector-icons';
import { customStyle } from '../styles/customStyle';


export default function Slide2() {

  const navigate = useNavigation();
  return (
    <View style={style.mainContainer}>
      <View style={style.imgContainer}>
        <Image
          source={require('../assets/images/secondpic.jpg')}
          style={style.image}
          resizeMode="cover"
        />
       
      </View>
      <View style={style.textContainer}>
        <Text style={style.textDesign}>Beyond Ordinary</Text>
        <Text style={style.textDesign2}>Limited collections. Timeless designs. Street fashion that defines the future.</Text>
      </View>

      <View style={style.dotsContainer}>
        <View style={style.dot} />
        <View style={[style.dot, style.activeDot]} />
        <View style={style.dot} />
      </View>
      <View style={{marginTop: 30}}>
      <TouchableOpacity onPress={() => navigate.navigate("Slide3")} style={style.buttonContainer}>
          <Text style={style.next}
          >Next</Text>
      </TouchableOpacity>
      </View>
      <Text style={{marginTop: 20, fontSize:13,
                  color: customStyle.buttonColor

      }} onPress={() => navigate.navigate("guard/Home")}>Skip</Text>
    </View>
  )
}
