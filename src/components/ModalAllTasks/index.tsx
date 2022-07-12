import { View , Modal, ModalProps, TouchableOpacity, Image, Text } from "react-native";
import XButtonImg from '../../assets/XButton.png'
import {styles} from './styles'

type Props = ModalProps & {

}

export function ModalAllTasks({...rest}:Props){
  return(
    <Modal {...rest}>
      <View style={styles.containerTasks}>

      <View style={styles.headerTasks}>
        <Text style={styles.text}>Daily Tasks</Text>
        <TouchableOpacity>
          <Image source={XButtonImg}/>
        </TouchableOpacity>
      </View>

      </View>
    </Modal>
  )
}