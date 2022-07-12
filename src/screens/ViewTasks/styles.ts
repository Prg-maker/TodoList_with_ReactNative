import {StyleSheet} from 'react-native'
import theme from '../../theme'


export const styles = StyleSheet.create({
  container:{
    height: '100%',
    backgroundColor:theme.colors.background,

  },
  content:{
    flex: 1,
    marginHorizontal:14
  },

  tasks:{
    fontFamily:theme.fonts.fontBold,
    fontSize: 16,
    marginLeft:9,
    marginTop:14
  },
  containerTasks:{
    flex: 1,
    backgroundColor:theme.colors.color_text_white,
    borderTopLeftRadius:13,
    borderTopRightRadius:13,
  },
  headerTasks:{
    paddingLeft:27,
    paddingTop:27,
    paddingRight:18,
    flexDirection:"row",

    justifyContent:"space-between"
  },
  text:{
    fontFamily:theme.fonts.fontRegular,
    color: theme.colors.color_text_black
  }
  
})
