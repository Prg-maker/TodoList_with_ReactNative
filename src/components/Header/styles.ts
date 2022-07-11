import {StyleSheet} from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  header:{
    height: '40%',
    backgroundColor:theme.colors.color_button,
    alignItems:"center",
    justifyContent:"flex-end"
  },
  avatar:{
    width: 115,
    height:115,
    borderRadius:100
  },
  name:{
    marginBottom:8,
    marginTop:15,
    fontFamily:theme.fonts.fontBold,
    color: theme.colors.color_text_white,
    fontSize:22,
    
    textAlign:'center'
  }
})