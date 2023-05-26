import {  View, Text, ImageBackground, StyleSheet, TouchableWithoutFeedback,Keyboard,
   } from "react-native";
//import { TouchableOpacity } from "react-native-web";
import  { SvgXml} from "react-native-svg";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { Ionicons } from "@expo/vector-icons";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";

import { xmlUser,xmlGrid,xmlRectangle,xmlHomeLine } from "../../../assets/icons/icons";
import { Avatar } from '../../Avatar/Avatar'
               
import { useRoute } from "../../../router"; 


function Grid() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
       <ImageBackground
                style={styles.image}
                source={require('../../../assets/icons/grid.svg')}/> 
    </View>
  );
}





const Tabs = createBottomTabNavigator();

export const ProfileScreen = ({ navigation }) => {
    
    const routing = useRoute(true);

  return (
       <View>  
        <View style={styles.container}>
            <Avatar/>
      
            
          <View style={styles.form}>
                
                <View style={{ marginTop: 32 }}></View> 
        </View> 
    </View>
     
    
     </View>           
  );
};

const styles = StyleSheet.create({

  container: {
        position: 'relative',
        height: 612,
        backgroundColor: "#E5E5E5",
        zIndex: 20

    },

  
    image: {
        position: 'absolute',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        zIndex: 1,
        width: 375,
        height: 812,
      
    },
    
    form: { 
        padding: ('auto',16),
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 50,

        width:  375,
        height: 349,
        top:   263,
        left:    0,
        zIndex: 30
        
     },
})
