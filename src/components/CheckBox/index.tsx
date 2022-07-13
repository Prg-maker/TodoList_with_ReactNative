import { useState } from "react";
import { View , StyleSheet, Text, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome'


export function CheckBox(){

  const [isCheckTask , setIsCheckTask] = useState(false)

  function handleToggleIsCheckTask(){
    setIsCheckTask(!isCheckTask)
  }

  return(
    <TouchableOpacity onPress={handleToggleIsCheckTask} style={styles.container}>
      {isCheckTask && <Icon name="check" size={20} color="green"/>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor:'black'
  }
})