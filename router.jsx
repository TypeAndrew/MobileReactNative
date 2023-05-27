import React from "react";
import { View, StyleSheet, FlatList, ImageBackground, Image } from "react-native";
import  { SvgXml} from "react-native-svg";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigationState } from "@react-navigation/native";
import { useState, useEffect } from "react";  
const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import { LoginScreen } from "./components/Screens/LoginScreen/LoginScreen";
import { RegistrationScreen } from "./components/Screens/RegistrationScreen/RegistrationScreen";
import { PostsScreen } from "./components/Screens/PostsScreen/PostsScreen";
import { CreatePostsScreen } from "./components/Screens/CreatePostsScreen/CreatePostsScreen";
import { ProfileScreen } from "./components/Screens/ProfileScreen/ProfileScreen";
import { MapScreen } from './components/Screens/MapScreen/MapScreen';
import { CommentsScreen } from './components/Screens/CommentsScreen/CommentsScreen';
import { xmlUser,xmlGrid,xmlRectangle} from "./assets/icons/icons";
// icons import
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

let iconName = xmlGrid;
let routePath = "";
let shouldSwapScreens = true;



function BottomNavigation(shouldSwapScreens ) {
      
   const [isOrderReversed, setIsOrderReversed] = useState(false);

  const toggleOrder = () => {
    setIsOrderReversed(!isOrderReversed);
    };  
   // console.log("111111111-  "+isOrderReversed ); 
  console.log("111111111-  "+shouldSwapScreens );
       return (<MainTab.Navigator
          screenOptions={({ route,navigation }) => ({
          tabBarStyle: { height: 83, },
          headerShown: false,
          showLabel: false,
          tabBarIcon: ({ focused, tintColor }) => {
             // console.log("1) " + route.name);  
             // console.log("2) "+route.params); 
          let iconName = "";
          let routePath = ""; 
          let showIcon = false;  
          if (route.name === "Profile") {
             // shouldSwapScreens = true;
              iconName = xmlUser;
              routePath = "Profile";
              showIcon = true;
          } else if (route.name === "Create") {
            iconName = xmlRectangle ;
            routePath = "Create";
             
              showIcon = true;
          } else if (route.name === "Home") {
            iconName = xmlGrid;
            routePath = "Home";
            showIcon = true;
          }
        
          const navigationState = useNavigationState((state) => state);
          const selectedTabRoute = navigationState.routes[navigationState.index].name;  
         // console.log("3)  " + route.params);
            shouldSwapScreens = (selectedTabRoute === "Profile") ? true : false;  
            
          // console.log("00000000-  "+selectedTabRoute );    
          const color = focused ? "#FF6C00" : "#FFF";
          const icon = iconName.replace('{color}', color);
         //     console.log(routePath); 
            console.log(shouldSwapScreens); 
          if (showIcon===true) {
            return (<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

            
            <SvgXml xml={icon} width="70" height="40" onPress={() => { toggleOrder, navigation.navigate(routePath, selectedTabRoute) }
              
              } /> 
                 
            </View>)
          }
        },
          
      })}
    

      >   
           <MainTab.Screen
            options={{
            
            }}
            name="Home"
            component={PostsScreen}
        />
         {shouldSwapScreens ? (
              <>
                  <MainTab.Screen
                      options={{
         
                      }}
                      name="Create"
                      component={CreatePostsScreen}
                  />
                  <MainTab.Screen
                      options={{
          
                      }}
                      name="Profile"
                      component={ProfileScreen}
                  />
              </>
          ) : ( 
                  <>
                <MainTab.Screen
                      options={{
          
                      }}
                      name="Profile"
                      component={ProfileScreen}
                  />
                  <MainTab.Screen
                      options={{
         
                      }}
                      name="Create"
                      component={CreatePostsScreen}
                  />
                
              </>
                  
          )}
     
      
      </MainTab.Navigator>
    
       )
};

export const useRoute = (isAuth) => {
 
 
  return (

    <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen}
                
        />
        <AuthStack.Screen name="Map" component={MapScreen} />
        <AuthStack.Screen name="Comment" component={CommentsScreen} />
        <AuthStack.Screen name="Home" component={BottomNavigation} shouldSwapScreens={true}/>
        <AuthStack.Screen name="Create" component={BottomNavigation} shouldSwapScreens={true}/>
        <AuthStack.Screen name="Profile" component={BottomNavigation} shouldSwapScreens={false}/>
      </AuthStack.Navigator>
  ) }