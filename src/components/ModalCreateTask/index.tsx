import { Modal, ModalProps, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import {styles} from './styles'

import Icon from 'react-native-vector-icons/AntDesign'
import { Button } from "../Button";

type Props = ModalProps & {

}


export function ModalCreateTask({...rest}:Props){
  return(
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <View style={styles.container} >
        
        <TouchableOpacity style={styles.header}>
          <Icon name="arrowleft" size={40}/>
        </TouchableOpacity>


        <View >
          <Text style={styles.createTask}>Create task</Text>
          <ScrollView>
            <TextInput style={styles.input}/>
            <Button textButton="Create" isLoading={false}/>
          </ScrollView>
         
        </View>

        

      </View>
    </Modal>
  )
}