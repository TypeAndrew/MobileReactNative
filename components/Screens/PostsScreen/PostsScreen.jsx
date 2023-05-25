import {  View, Text, StyleSheet, FlatList, ImageBackground, Image} from "react-native";
//import { TouchableOpacity } from "react-native-web";
import  { SvgXml} from "react-native-svg";
import { useState, useEffect } from "react";  
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { Ionicons } from "@expo/vector-icons";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";
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

export const PostsScreen = ({ route, navigation }) => {
  console.log("-----------"+navigation);
  const [posts, setPosts] = useState([]);
  console.log("route.params", route);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);
  
  const openMap = (latitude) => {
   
    navigation.navigate("Map",  latitude );
    console.log("latitude", latitude);
    //console.log("longitude", longitude);
  };

  return (
     <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.photo.picture }}
              style={{ width: 350, height: 200 }}
            />
            <Text>{item.photo?.title}</Text>
            <Text onPress={() => openMap(item)} >{item.photo?.geodata}</Text>
          </View>
        )}
      />
   
      <Tabs.Navigator 
        screenOptions={({ route }) => ({
          tabBarStyle: { height: 83, },
          headerShown: false,
          tabBarIcon: ({ focused, tintColor }) => {
  
          let iconName = "";
          let routePath ="";  
          if (route.name === "User") {
            iconName = xmlUser;
            routePath = "Profile";
          } else if (route.name === "Rectangle") {
            iconName = xmlRectangle;
            routePath = "Create";
            focused = true;
          } else if (route.name === "Grid") {
            iconName = xmlGrid;
             routePath = "User";
          }
          
          const color = focused ? "#FF6C00" : "#FFF";
          const icon = iconName.replace('{color}', color);
          return(  <View style={{ flex: 1, justifyContent: "center", alignItems: "center"} }>

            
            <SvgXml xml={icon} width="70" height="40" onPress={() => navigation.navigate(routePath)} /> 
                 
            </View>)

        },
      })}
    
    >
      
        <Tabs.Screen name="Grid" component={Grid} activeTintColor={"tomato"}
           screenOptions={{
      tabBarLabel: '', 
    }}
        />
          
        <Tabs.Screen name="Rectangle" component={CreatePostsScreen}  screenOptions={{
      tabBarLabel: '', 
    }}
        />
     
        <Tabs.Screen  name="User" component={ProfileScreen}  screenOptions={{
      tabBarLabel: '', 
    }}/>
       
    
        
        
         
      </Tabs.Navigator>
      </View>
  );
};

const styles = StyleSheet.create({

  container: {
      flex: 1,
    justifyContent: "center",
    }
})
