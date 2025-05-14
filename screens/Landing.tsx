  import { StyleSheet, Image, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
  import React, { useEffect } from 'react';
  import { useNavigation } from '@react-navigation/native';
  import { customStyle } from "../styles/customStyle";

  export default function Login() {
    const navigate = useNavigation();

    useEffect(() => {
      setTimeout(() => {
        navigate.navigate("Slide1");
      }, 2000);
    }, []);

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Image
            source={require('../assets/images/UA.jpg')}
            style={style.backgroundImage}
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
    );
  }

  const style = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: "black",
    }
  });
