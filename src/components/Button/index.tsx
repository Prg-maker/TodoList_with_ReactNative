import { Text, TouchableOpacity, TouchableOpacityProps , ActivityIndicator } from "react-native";
import theme from "../../theme";
import {styles} from './styles'

interface Props extends TouchableOpacityProps{
  isLoading: boolean,
  textButton:string
}

export function Button({isLoading, textButton,...rest}:Props){
  return(
    <TouchableOpacity style={styles.button} {...rest}>
      {
        isLoading ? 
        <ActivityIndicator color={theme.colors.link} size="large"/>
        :
        <Text style={styles.textButton}>{textButton}</Text>

      }
    </TouchableOpacity>
  )
}