import {  View, Text, ImageBackground, StyleSheet } from "react-native";
//import { TouchableOpacity } from "react-native-web";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

export const PostsScreen1 = () =>{

   return (

        <>
         
            <View style={styles.header}>
                    <Text style={styles.headerText}>Publications</Text>        
                </View>   
            <View style={styles.formx}>
                <View style={styles.AvatarRow}>
                    <View style={styles.AvatarWrapper}>
                        <ImageBackground
                            style={styles.imageAvatar}
                            > 
                                
                        </ImageBackground> 
                        
                    </View>
                    <View style={styles.textCentral}><Text >user nane</Text><Text >email</Text></View>
                    
                </View>         
            </View>
            <View style={styles.bottomBar}>
                <ImageBackground
                style={styles.image}
                source={require('../../../assets/icons/grid.svg')}/> 
                <ImageBackground
                style={[styles.image,styles.btnAdd]}
                source={require("../../../assets/icons/Rectangle.svg")}><Text>+</Text></ImageBackground>   
                <ImageBackground
                style={styles.image}
                source={require("../../../assets/icons/user.svg")}/>       
            </View>
        
        </>


    )
}

function grid() {
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground
                style={[styles.image,styles.btnAdd]}
                source={require("../../../assets/icons/Rectangle.svg")}><Text>+</Text></ImageBackground>   
         
    </View>
  );
}

function user() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground
                style={styles.image}
                source={require("../../../assets/icons/user.svg")}/>     
         
    </View>
  );
}

const Tabs = createBottomTabNavigator();

export const PostsScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
        <Tabs.Screen name="grid" component={grid} 
          options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <ImageBackground
              source={focused ? require('../../../assets/icons/grid.svg') : require('../../../assets/icons/grid.svg')}
              style={styles.image}
            />
          ),
        }}/>
     <Tabs.Screen name="Rectangle" component={Rectangle} 
          options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <ImageBackground
              source={focused ? require('../../../assets/icons/Rectangle.svg') : require('../../../assets/icons/Rectangle.svg')}
              style={[styles.image,styles.btnAdd]}
            ><Text>+</Text></ImageBackground> 
          ),
        }}/>
     
    <Tabs.Screen name="user" component={user} 
          options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <ImageBackground
              source={focused ? require('../../../assets/icons/user.svg') : require('../../../assets/icons/user.svg')}
              style={styles.image}
            />
          ),
        }} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
    container: {

        flexDirection: 'column',
        flex: 1,
        backgroundColor: "#fff",
      
    },
    bottomBar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 89,
        
        width: 375,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    formx: {
    
        width: 375,
        height: 641,
        color: 'black',
        width: 375,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    header: {
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 375,
        height: 88,
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 17,
        lineHeight: 22,
        
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    headerText: {
        
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 17,
        lineHeight: 22,
        

    },
    imageAvatar: {
      
   
        width: 60,
        height: 60,
    },
    AvatarWrapper: {
         backgroundColor: '#F6F6F6',     
        marginTop: 32,
        marginLeft: 16,
        color: 'black',
        overflow: 'hidden',
        resizeMode: 'cover',
        borderRadius: 10,
        width:  60,
        height: 60,
    },
    AvatarRow: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        margin: (0,0),
    },
    textCentral: {
        marginTop: 32,
        marginLeft: 8,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    image: {
      
   
        marginLeft: 31,
        width: 40,
        height: 40,
    },
    btnAdd: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        color: 'white',
       
    },
    text: {
        margin: (0,0),
       
    },
})
