import {Text,
    View, 
    SafeAreaView, 
    Image, 
    TextInput, 
    TouchableOpacity} 
    from "react-native";
import { StyleSheet } from "react-native";
import {customStyle} from "../../styles/customStyle"

export default function Login() {
return (
<SafeAreaView style={{flex:1,backgroundColor: customStyle.primaryColor}}> 
    <View style={{height: '30%',alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:customStyle.xlargeSize, letterSpacing: 5}}>Log in</Text>
    </View>
    <View style={{borderTopLeftRadius: 40, borderTopRightRadius:40, backgroundColor: 'white', height: '100%'}}>
        <Text>wow</Text>
    </View>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
    logoimg:{
    width: 150,
    height: 100,
    marginTop: 150,
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'center'
},
    input:{
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: 350,
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    marginTop: 5,
},

});
