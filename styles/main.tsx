import { Poppins_400Regular, Poppins_900Black, Poppins_900Black_Italic } from '@expo-google-fonts/poppins';
import { customStyle } from './customStyle';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    //FIRST 3 SLIDES CONTAINER 
    mainContainer: {
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
          backgroundColor: customStyle.primaryColor,
          
      }
      ,
      background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 8,
      },
      imgContainer :{
        marginTop:130,
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height:250,       
        
      },
      textContainer :{
        width: 350,
        paddingVertical: 40,
      },
      textDesign :{
        textAlign: 'center',
        fontWeight: 900,
        fontFamily: customStyle.PoppinsBold,
          fontSize: 20,
          color: customStyle.secondaryColor,

      },
      textDesign2 :{
        paddingVertical: 20,
        textAlign: 'center',
        color: customStyle.buttonColor,
        fontFamily: customStyle.PoppinsRegular,

      },
      buttonContainer :{
        backgroundColor: customStyle.buttonColor, 
        width: 350, 
        height: 60, 
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center',
        
      },
      dotsContainer: {
        flexDirection: 'row',
        marginBottom: 15,
      },
      dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: customStyle.buttonColor,
        marginHorizontal: 4,
        opacity: 0.3,
      },
      activeDot: {
        opacity: 1,
      },
      next:{
        color: 'black',
        textTransform : 'uppercase',
        fontFamily: customStyle.PoppinsBold,
      },
      // END OF 3 SLIDES CONTAINER

      //START OF HEADER HOME CONTAINER
      homeContainer :{
        height: 150,
        backgroundColor: customStyle.primaryColor,
      },
      headerContainer :{
        paddingHorizontal: 30,
        paddingVertical: 50,
      },
      innerHeaderContainer :{
        flexDirection:"row",
        justifyContent:"space-between"
      },
      iconContainer:{
        flexDirection:"row", 
        alignItems:"center", 
        gap:20
      },
      menuIconStyling:{
        borderRadius: 20, 
        padding: 10, 
        backgroundColor: customStyle.buttonColor
      },
      deliveryText:{
        fontFamily: customStyle.PoppinsRegular,
        textTransform :"uppercase", 
        color:customStyle.secondaryColor,
        fontSize: customStyle.smallSize
      },
      careticonContainer:{
        paddingHorizontal: customStyle.smallSize,
        paddingVertical: 3
      },
      shoppingBagContainer:{
        borderRadius: 20, 
        padding: 10, 
        backgroundColor: customStyle.buttonColor
      }
      //END OF HEADER HOME CONTAINER

})

export default styles;