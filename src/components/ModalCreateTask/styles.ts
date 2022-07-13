import {StyleSheet} from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container:{
    height: '52%',
    width: '93%',
    position: 'absolute',
    bottom: 0,
    marginLeft:14,
    marginRight:14,


    backgroundColor: theme.colors.color_text_white,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    paddingHorizontal:37
  },
  header:{
    marginTop:30,
    marginBottom:25
  },

  createTask:{
    fontFamily:theme.fonts.fontRegular,
    fontSize:16,
    marginBottom:44

  },
  input:{
    height: 55,

    borderWidth:2 ,
    borderColor:'black',
    borderRadius:10,
    fontFamily:theme.fonts.fontRegular,
    paddingLeft:20
  }
})