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
            color={customStyle.secondaryColor} 
            style={style.menuIconStyling}/>
          </TouchableOpacity>                        
          <View>
            {/*<Text style={style.deliveryText}>
              Deliver To
            </Text> */}
            <TouchableOpacity style={{flexDirection:'row'}}>
              <Text style={{color: customStyle.primaryColor,fontFamily:customStyle.PoppinsBold,
                letterSpacing: 1,fontSize:14, fontStyle: 'italic', fontWeight: 'bold'
              }}>UNDERGROUND APPAREL</Text>
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
              color= {customStyle.secondaryColor}
              />
            </TouchableOpacity>
          </View>
      </View>
      <View>
        <Text style={{paddingVertical: 20,color:customStyle.primaryColor}}>Hey Ungart!
          <Text style={{fontWeight:"bold"}}> Good Afternoon!</Text>
        </Text>
      </View>
    </View>
</SafeAreaView>
  )
}

