import { Image, View , ImageBackground, Text, TouchableOpacity ,  } from "react-native";

import { Header } from "../../components/Header";
import { ModalAllTasks } from "../../components/ModalAllTasks";
import { ModalCreateTask } from "../../components/ModalCreateTask";
import {styles} from './styles'
export function ViewTasks(){


  return(

    <View style={styles.container}>
      <Header/>

      <View style={styles.content}>
        <Text style={styles.tasks}>Tasks List</Text>

        <ModalCreateTask/>
        
      </View>
    </View>

  )
}