import { Image, View , ImageBackground, Text, TouchableOpacity } from "react-native";
import { Header } from "../../components/Header";
import {styles} from './styles'
import XButtonImg from '../../assets/XButton.png'

export function ViewTasks(){


  return(
    <View style={styles.container}>
      <Header/>

      <View style={styles.content}>
        <Text style={styles.tasks}>Tasks List</Text>

        <View style={styles.containerTasks}>

          <View style={styles.headerTasks}>
            <Text style={styles.text}>Daily Tasks</Text>
            <TouchableOpacity>
              <Image source={XButtonImg}/>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  )
}