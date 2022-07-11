import { Image, View , ImageBackground, Text } from "react-native";
import {styles} from './styles'
export function ViewTasks(){


  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          style={styles.avatar} 
          source={{uri:'https://github.com/prg-maker.png'}}
        />
        <Text style={styles.name}>Daniel</Text>
      </View>
    </View>
  )
}