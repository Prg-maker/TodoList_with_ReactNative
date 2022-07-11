import { Image, Text, View } from "react-native";
import {styles} from './styles'
export function Header(){
  return(
    <View style={styles.header}>
        <Image 
          style={styles.avatar} 
          source={{uri:'https://github.com/prg-maker.png'}}
        />
        <Text style={styles.name}>Daniel</Text>
    </View>
  )
}