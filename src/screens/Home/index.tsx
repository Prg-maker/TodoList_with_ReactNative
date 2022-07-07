import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import StudentImg from "../../assets/student.png";
import { Button } from "../../components/Button";
import { useState } from "react";

export function Home() {

  const [linkRegisterLoading , setLinkRegisterLoading] = useState(false)

  function handleLinkRegister(){
    setLinkRegisterLoading(false)
  }


  return (
    <View style={styles.container}>
      <Image style={styles.image} source={StudentImg} />
      <Text style={styles.titleTodo}>Get things done with TODO</Text>
      <Text style={styles.details}>
        In your daily, day to day life we {'\n'}
        often lose track of time and {'\n'} 
        forget to do the things that {'\n'} 
        needs to be done.
      </Text>

      <Button
        isLoading={linkRegisterLoading}
        textButton={'Get started'}
        onPress={handleLinkRegister}
      />
     
    </View>
  );
}
