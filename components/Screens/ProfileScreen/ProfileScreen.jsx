import {  View, Text, ImageBackground, StyleSheet, TouchableWithoutFeedback,Keyboard,
   } from "react-native";
//import { TouchableOpacity } from "react-native-web";
import  { SvgXml} from "react-native-svg";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { Ionicons } from "@expo/vector-icons";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";

import { xmlUser,xmlGrid,xmlRectangle,xmlHomeLine } from "../../../assets/icons/icons";
import { Avatar } from '../../Avatar/Avatar'
               



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
    return (
       <View>  
        <View style={styles.container}>
            <Avatar/>
      
            
          <View style={styles.form}>
                
                <View style={{ marginTop: 32 }}></View> 
        </View> 
    </View>
      <Tabs.Navigator 
        screenOptions={({ route }) => ({
          tabBarStyle: { height: 83, },
    
          tabBarIcon: ({ focused, tintColor }) => {
  
          let iconName="";
          if (route.name === "User") {
              iconName = xmlUser;
              focused = true;
          } else if (route.name === "Rectangle") {
            iconName = xmlRectangle;
          } else if (route.name === "Grid") {
            iconName = xmlGrid;
          }
          
          const color = focused ? "#FF6C00" : "#FFF";
          const icon = iconName.replace('{color}', color);
          return(  <View style={{ flex: 1, justifyContent: "center", alignItems: "center"} }>

            
            <SvgXml xml={icon} width="70" height="40" onPress={() => navigation.navigate("Create")} /> 
                 
            </View>)

        },
      })}
    
    >
      
        <Tabs.Screen name="Grid" component={Grid} activeTintColor={"tomato"}  options={{
      tabBarLabel: 'null', 
    }}/>
        <Tabs.Screen  name="User" component={ProfileScreen}  options={{
      tabBarLabel: 'null', 
    }}/>  
        <Tabs.Screen name="Rectangle" component={CreatePostsScreen}  options={{
      tabBarLabel: 'null',
    }}/>
     
        </Tabs.Navigator>
    
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
