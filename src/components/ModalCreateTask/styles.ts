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
  }
})