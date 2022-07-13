import { View , Modal, ModalProps, TouchableOpacity, Image, Text , AccessibilityActionName} from "react-native";
import {styles} from './styles'
import Icon from 'react-native-vector-icons/Ionicons'

import { useState } from "react";
import { Tasks } from "../Tasks";

type Props = ModalProps & {

}

export function ModalAllTasks({...rest}:Props){

  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return(
    <Modal transparent   animationType="slide" statusBarTranslucent  {...rest}>
      <View style={styles.containerTasks}>

      <View style={styles.headerTasks}>
        <Text style={styles.text}>Daily Tasks</Text>
        <TouchableOpacity style={styles.buttonIcon}>
          <Icon name="add-circle-outline" size={30}/>
        </TouchableOpacity>
      </View>

      <View>
        <Tasks/>
      </View>

      </View>
    </Modal>
  )
}