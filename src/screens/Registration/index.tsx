import { Image,  Text, View  , ScrollView  , TouchableOpacity} from "react-native";
import {styles} from './styles'
import RobotoImg from '../../assets/robot.png'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";

export function Registration(){
  const [isLoadingRegistration, setIsLoadingRegistration] = useState(false)

  function handleIsLoading(){
    setIsLoadingRegistration(isLoadingRegistration)
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>WELCOME ONBOARD!</Text>
      <Text style={styles.subTitle}>Let’s hope you meet of your tasks!</Text>
      <Image source={RobotoImg} />


   

      <ScrollView
        style={{
          width: '100%',
        }}
      >
        <View style={styles.containerInput}>

          <Input placeholder="Enter your name"/>
          <Input placeholder="Enter your name"/>
          <Input placeholder="Enter Password"/>
          <Input placeholder="Confirm Password"/>

        </View>

        <View style={styles.containerButton}>
          <Button
            textButton="Registration"
            isLoading={isLoadingRegistration}
          />

          <View style={styles.TitleContainer}>
            <Text style={styles.subTitleContainer}>Already have an acount? </Text>
          
            <TouchableOpacity>
              <Text style={styles.titleButton}>Sign in </Text>
            </TouchableOpacity>
          
          </View>
        </View>
       
      </ScrollView>

   
       

    


  
    

    </View>
  )
}
