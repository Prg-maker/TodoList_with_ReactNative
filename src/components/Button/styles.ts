import {StyleSheet} from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  button:{
    width: '90%',
    height: 60,
    backgroundColor:theme.colors.color_button,
    marginTop:64,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',

  },
  textButton:{
    fontFamily: theme.fonts.fontBold,
    fontSize:18
  }
})