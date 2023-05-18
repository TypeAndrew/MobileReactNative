import {  View, Text, ImageBackground, StyleSheet } from "react-native";
//import { TouchableOpacity } from "react-native-web";
import  { SvgXml} from "react-native-svg";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { Ionicons } from "@expo/vector-icons";
import { CreatePostScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";
import { xmlUser,xmlGrid,xmlRectangle,xmlHomeLine } from "../../../assets/icons/icons";

               



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

export const PostsScreen = () => {
  return (
    <View style={styles.container  }>
      <Tabs.Navigator 
        screenOptions={({ route }) => ({
          tabBarStyle: { height: 83, },
          tabBarIcon: ({ focused, tintColor }) => {
  
          let iconName="";
          if (route.name === "User") {
            iconName = xmlUser;
          } else if (route.name === "Rectangle") {
            iconName = xmlRectangle;
          } else if (route.name === "Grid") {
            iconName = xmlGrid;
          }
          
          const color = focused ? "#FF6C00" : "#FFF";
          const icon = iconName.replace('{color}', color);
          return(  <View style={{ flex: 1, justifyContent: "center", alignItems: "center"} }>

            
             <SvgXml xml={icon} width="70" height="40" /> 
                 
            </View>)

        },
      })}
    
    >
      
      <Tabs.Screen   name="Grid" component={Grid} activeTintColor={"tomato"}
        />
          
     <Tabs.Screen  name="Rectangle" component={CreatePostScreen} activeTintColor={"tomato"}
      />
     
        <Tabs.Screen  name="User" component={ProfileScreen} />
       
    
        
        
         
      </Tabs.Navigator>
      </View>
  );
};

const styles = StyleSheet.create({

  container: {
        position: 'relative',
        height: 700,
        backgroundColor: "#fff"
    }
})
