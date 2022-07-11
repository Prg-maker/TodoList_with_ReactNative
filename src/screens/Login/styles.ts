import {StyleSheet} from 'react-native'
import {getBottomSpace} from 'react-native-iphone-x-helper'
import theme from '../../theme'
export const styles = StyleSheet.create({
  container:{
    height: '100%',
    alignItems:'center',
    paddingTop: getBottomSpace() + 121
  },
  title:{
    fontSize:20,
    fontFamily: theme.fonts.fontBold,
    marginBottom:15
  },
  image:{
    marginBottom:30
  },
  containerInput:{
    width: '100%',
    flex: 1,
    alignItems:'center',
  },
  containerButton:{
    width: '100%',
    alignItems:"center",
  },
  TitleContainer:{
    flexDirection:'row',
    marginTop:10,
  },
  subTitleContainer: {
    fontFamily: theme.fonts.fontRegular,
    fontSize: 14,
  },
  titleButton:{
    fontFamily: theme.fonts.fontBold,
    fontSize: 14,
    color: theme.colors.link
  },

  buttonForgot:{
    marginTop:31,
  },
  textForgot:{
    fontFamily: theme.fonts.fontBold,
    color:theme.colors.link,
    fontSize:18
  }
})