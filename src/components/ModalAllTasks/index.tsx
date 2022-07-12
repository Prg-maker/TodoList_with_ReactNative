import { View , Modal, ModalProps, TouchableOpacity, Image, Text , AccessibilityActionName} from "react-native";
import XButtonImg from '../../assets/XButton.png'
import {styles} from './styles'

import CheckBoxBase from '@react-native-community/checkbox';

import { useState } from "react";
type Props = ModalProps & {

}

export function ModalAllTasks({...rest}:Props){

  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return(
    <Modal transparent   animationType="slide" statusBarTranslucent  {...rest}>
      <View style={styles.containerTasks}>

      <View style={styles.headerTasks}>
        <Text style={styles.text}>Daily Tasks</Text>
        <TouchableOpacity>
          <Image source={XButtonImg}/>
        </TouchableOpacity>
      </View>

      <>

      </>

      </View>
    </Modal>
  )
}