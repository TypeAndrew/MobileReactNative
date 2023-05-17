import {  View, Text, ImageBackground, StyleSheet } from "react-native";
//import { TouchableOpacity } from "react-native-web";
import  { SvgXml, SvgWithCss } from "react-native-svg";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const xmlUser = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;

const xmlRectangle = `<svg width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      
        <rect width="70" height="40" rx="20" fill="#FF6C00"/>
        <text x="35" y="25" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="#fff">+</text>
        </svg>
`;
      
const xmlGrid = `<svg width="40" height="40" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" transform="translate(8 8)" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 11H18V18H11V11Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 11H29V18H22V11Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 22H29V29H22V22Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22H18V29H11V22Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`;      

 const xmlHomeLine = `<svg width="134" height="5" viewBox="0 0 134 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="134" height="5" rx="2.5" fill="#212121"/>
                  </svg>`
               



function Grid() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
       <ImageBackground
                style={styles.image}
                source={require('../../../assets/icons/grid.svg')}/> 
    </View>
  );
}

function Rectangle() {
  return (
    <View >
      <ImageBackground
                style={[styles.image,styles.btnAdd]}
                source={require("../../../assets/icons/Rectangle.svg")}><Text>+</Text></ImageBackground>   
         
    </View>
  );
}

function User() {


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
     <SvgXml xml={xmlUser} width="24" height="24" /> 
         
    </View>
  );
}

const Tabs = createBottomTabNavigator();

export const PostsScreen = () => {
  return (
    <View style={{ height: 700 }}>
      <Tabs.Navigator 
   
        screenOptions={{ 
    
          tabBarStyle: {
             height: 83, 
            
          },
         

        
      }}
     
      >
        
      <Tabs.Screen  style={{ height: 400 }} name="Grid" component={Grid} activeTintColor={"tomato"}
        inactiveTintColor={"gray"}
          options={{
          tabBarLabel: 'Grid',
          tabBarIcon: () => (
              <SvgXml xml={xmlGrid} width="40" height="40" />
            ),
        }}/>
     <Tabs.Screen name="Rectangle" component={Rectangle} activeTintColor={"tomato"}
        inactiveTintColor={"gray"}
          options={{
          tabBarLabel: 'Rectangle',
          tabBarIcon: () => (
          <SvgXml xml={xmlRectangle} width="70" height="40"/>
         ),
        }}/>
     
    <Tabs.Screen name="User" component={User} 
          options={{
          tabBarLabel: 'User',
          tabBarIcon: () => (
        <SvgXml xml={xmlUser} width="40" height="40" />
         ),
        }} />
      </Tabs.Navigator>
      </View>
  );
};

const styles = StyleSheet.create({
})
