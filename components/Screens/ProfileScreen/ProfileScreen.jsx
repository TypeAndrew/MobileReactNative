
import { View, Text, ImageBackground, StyleSheet } from "react-native";

import { xmlUser } from "../../../assets/icons/icons";

export function ProfileScreen() {


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
     
        <ImageBackground 
                        style={styles.icon}
                        source={xmlUser}> 
                        
        
        </ImageBackground> 
    
    </View> 
         
    
  );
}

const styles = StyleSheet.create({
})