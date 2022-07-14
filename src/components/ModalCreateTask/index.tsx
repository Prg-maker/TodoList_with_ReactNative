import { Modal, ModalProps, ScrollView, Text, TextInput, TouchableOpacity, View , KeyboardAvoidingView} from "react-native";
import {styles} from './styles'

import Icon from 'react-native-vector-icons/AntDesign'
import { Button } from "../Button";

type Props = ModalProps & {
  CloseModal:()=> void
}


export function ModalCreateTask({CloseModal ,...rest}:Props){



  return(
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <View style={styles.container}>
        
        <View style={styles.header}>
          <TouchableOpacity onPress={CloseModal} style={styles.button} >
            <Icon name="arrowleft" size={40}/>
          </TouchableOpacity>
        </View>
        


      
        <Text style={styles.createTask}>Create task</Text>
          <TextInput style={styles.input}/>
        <Button textButton="Create" isLoading={false}/>

        

      </View>
    </Modal>
  )
}