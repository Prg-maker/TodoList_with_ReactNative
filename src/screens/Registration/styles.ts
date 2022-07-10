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
  },
  subTitle: {
    fontFamily: theme.fonts.fontRegular,
    fontSize: 16,
    marginBottom:25
  },
  containerInput:{
    width: '100%',
    flex: 1,
    alignItems:'center',
    marginTop:22
  },
  containerButton:{
    width: '100%',
    alignItems:"center",
  },
  TitleContainer:{
    flexDirection:'row'
  }
})