import { TextInput , TextInputProps } from "react-native";
import { styles } from "./styles";


interface Props{
  placeholder: string;
}


export function Input (props:Props){
  return(
    <TextInput placeholder={props.placeholder} placeholderTextColor={'#000'} style={styles.input} />
  )
}