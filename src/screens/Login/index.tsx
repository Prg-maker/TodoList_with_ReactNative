import { Image,  Text, View  , ScrollView  , TouchableOpacity} from "react-native";
import {styles} from './styles'
import WomanImg from '../../assets/woman.png'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";

export function Login(){
  const [isLoadingRegistration, setIsLoadingRegistration] = useState(false)

  function handleIsLoading(){
    setIsLoadingRegistration(isLoadingRegistration)
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>WELCOME BACK!</Text>
      <Image style={styles.image} source={WomanImg} />


   

      <ScrollView
        style={{
          width: '100%',
        }}
      >
        <View style={styles.containerInput}>

          <Input placeholder="Enter your email or username"/>
          <Input placeholder="Enter Password"/>


          <TouchableOpacity style={styles.buttonForgot}>
            <Text style={styles.textForgot}>Forget Password</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.containerButton}>
          <Button
            textButton="Registration"
            isLoading={isLoadingRegistration}
          />

          <View style={styles.TitleContainer}>
            <Text style={styles.subTitleContainer}>Already have an acount? </Text>
          
            <TouchableOpacity>
              <Text style={styles.titleButton}>Sign Up </Text>
            </TouchableOpacity>
          
          </View>
        </View>
       
      </ScrollView>

   
       

    


  
    

    </View>
  )
}
