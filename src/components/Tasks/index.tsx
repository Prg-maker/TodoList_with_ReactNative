import { Text, View , StyleSheet, ScrollView} from "react-native";
import theme from "../../theme";
import { CheckBox } from "../CheckBox";
export function Tasks(){
  return(

    <View style={styles.container}>
      <ScrollView>

        <View style={styles.containerCheckBox}>
          <Text style={styles.titleTask}>learn programming by 11a.m</Text>
          <View style={styles.checkbox}>
           <CheckBox/>
          </View>
        </View>
      
        <View style={styles.containerCheckBox}>
          <Text style={styles.titleTask}>Visit Mom in evening.</Text>
          <View style={styles.checkbox}>
           <CheckBox/>
          </View>
        </View>
         
        <View style={styles.containerCheckBox}>
          <Text style={styles.titleTask}>Visit Mom in evening.</Text>
          <View style={styles.checkbox}>
           <CheckBox/>
          </View>
        </View>
         
        <View style={styles.containerCheckBox}>
          <Text style={styles.titleTask}>Visit Mom in evening.</Text>
          <View style={styles.checkbox}>
           <CheckBox/>
          </View>
        </View>
         
        <View style={styles.containerCheckBox}>
          <Text style={styles.titleTask}>Visit Mom in evening.</Text>
          <View style={styles.checkbox}>
           <CheckBox/>
          </View>
        </View>
         
        <View style={styles.containerCheckBox}>
          <Text style={styles.titleTask}>Visit Mom in evening.</Text>
          <View style={styles.checkbox}>
           <CheckBox/>
          </View>
        </View>
         
        <View style={styles.containerCheckBox}>
          <Text style={styles.titleTask}>Visit Mom in evening.</Text>
          <View style={styles.checkbox}>
           <CheckBox/>
          </View>
        </View>
         
        <View style={styles.containerCheckBox}>
          <Text style={styles.titleTask}>Visit Mom in evening.</Text>
          <View style={styles.checkbox}>
           <CheckBox/>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    marginTop:25,
    marginHorizontal:25
  },
  titleTask:{
    fontFamily:theme.fonts.fontRegular,
    fontSize:16,
    paddingVertical:15
  },
  containerCheckBox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  checkbox:{
    paddingBottom:10,
    paddingRight:20

  }
})  