import { Modal, ModalProps, View } from "react-native";
import {styles} from './styles'
type Props = ModalProps & {

}


export function ModalCreateTask({...rest}:Props){
  return(
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <View style={styles.container} >

      </View>
    </Modal>
  )
}