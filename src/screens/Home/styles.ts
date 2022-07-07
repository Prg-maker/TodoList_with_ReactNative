import {StyleSheet} from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container:{
    height: '100%',
    alignItems:"center",
    justifyContent:'center'
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
  }
})