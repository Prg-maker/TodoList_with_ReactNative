import {StyleSheet} from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container:{
    height: '100%',
    alignItems:"center",
    justifyContent:'center',
    backgroundColor:theme.colors.background

  },
  image:{
    marginBottom:30
  },
  titleTodo:{
    color: theme.colors.color_text,
    fontFamily: theme.fonts.fontBold,
    fontSize:20
  },
  details:{
    fontFamily: theme.fonts.fontRegular,
    fontSize:18,
    textAlign:'left',
    paddingLeft:10
  },
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