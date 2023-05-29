import {  View, Text, ImageBackground, StyleSheet, TouchableWithoutFeedback,Keyboard,
   } from "react-native";
//import { TouchableOpacity } from "react-native-web";
import  { SvgXml} from "react-native-svg";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { Ionicons } from "@expo/vector-icons";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";

import {xmlLogout} from "../../../assets/icons/icons";
import { Avatar } from '../../Avatar/Avatar'
 import { useDispatch } from "react-redux";              
import { useRoute } from "../../../router"; 
import { authSignOutUser } from "../../../redux/auth/authOperations";

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
  
  const dispatch = useDispatch(); 
  const handleSubmit = () => {
  

        dispatch(authSignOutUser(navigation));
        //setstate(initialState);
        
    };
    
  const routing = useRoute(true);

  return (
       <View>  
        <View style={styles.container}>
                  <ImageBackground
            style={styles.image}
            source={require("../../../assets/images/loginBG.png")}> 
        
            
            </ImageBackground> 
              <Avatar/>
              <SvgXml xml={xmlLogout} style={styles.logout } width="70" height="40" onPress={handleSubmit
                  } /> 

            
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
     logout: { 
        position: 'absolute',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        top:   300,
        right:    3,
        zIndex: 50
        
     },
})
