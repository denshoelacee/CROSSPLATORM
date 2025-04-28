import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity  } from 'react-native'
import React from 'react'
import style from '../styles/main'
import { AntDesign, Ionicons} from '@expo/vector-icons';
import { customStyle } from '../styles/customStyle';
import { Feather } from '@expo/vector-icons'


export default function CustomHeader() {
  return (
    <SafeAreaView style={style.homeContainer}>
    <View style={style.headerContainer}>
      <View style={style.innerHeaderContainer}>
        <View style={style.iconContainer}>
          <TouchableOpacity>
            <Ionicons name='menu' 
            size={20} 
            color="black" 
            style={style.menuIconStyling}/>
          </TouchableOpacity>                        
          <View>
            {/*<Text style={style.deliveryText}>
              Deliver To
            </Text> */}
            <TouchableOpacity style={{flexDirection:'row'}}>
              <Text style={{color: customStyle.buttonColor,fontFamily:customStyle.PoppinsBold,
                letterSpacing: 3,fontSize:16
              }}>PRIME HOUR</Text>
              {/*
              <View style={style.careticonContainer}>
                  <AntDesign name="caretdown" 
                  size={10} 
                  color={'white'}/>
              </View>
              */ }
            </TouchableOpacity>
          </View>
        </View>
          <View>
            <TouchableOpacity style={style.shoppingBagContainer}>
              <Feather
              name='shopping-bag'
              size={20}
              color="black"
              />
            </TouchableOpacity>
          </View>
      </View>
      <View>
        <Text style={{paddingVertical: 20,color:customStyle.buttonColor}}>Hey Oscar,
          <Text style={{fontWeight:"bold"}}> Good Afternoon!</Text>
        </Text>
      </View>
    </View>
</SafeAreaView>
  )
}

