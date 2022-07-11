import { Image, View , ImageBackground, Text } from "react-native";
import { Header } from "../../components/Header";
import {styles} from './styles'
export function ViewTasks(){


  return(
    <View style={styles.container}>
      <Header/>

      <View style={styles.content}>
        <Text style={styles.tasks}>Tasks List</Text>

        <View style={styles.containerTasks}>
          <Text>Daily Tasks</Text>
        </View>
      </View>
    </View>
  )
}