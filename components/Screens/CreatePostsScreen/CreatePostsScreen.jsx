
import { View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, 
    Keyboard,TextInput,
    KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";  
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  { SvgXml} from "react-native-svg";
import { xmlPhoto, xmlTrash } from "../../../assets/icons/icons";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";

export function CreatePostsScreen() {

    const [name, setName] = useState("");
    const [geodata, setGeodata] = useState("");

    
    const inputHandlerName = ((text) => {
        setName(text)
        console.log(text);
    });

    const inputHandlerGeodata = ((text) => {
        setGeodata(text)
        console.log(text);
    });
    
    const Tabs = createBottomTabNavigator();

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  
    <View style={styles.container}>
    <View style={styles.newPhoto}>
    
              <View style={styles.photoIcon} >
                      <SvgXml xml={xmlPhoto}  /> 
              </View>       
    
          </View>
          <TouchableOpacity style={styles.uploadBtn}>
                <Text>{true ? 'Upload photo' : 'Edit photo'}</Text>
          </TouchableOpacity>  
    
    <View style={{ marginTop: 32 }}>
                        <KeyboardAvoidingView
                            behavior={Platform.OS == "ios" ? "padding" : "height"}
                            >
                            <TextInput
                                style={styles.input} textAlign={"center"}
                                placeholder="name"
                                value={name}
                                onChangeText={inputHandlerName} />
                        </KeyboardAvoidingView>
                </View>
                <View style={{ marginTop: 16 }}> 
                    <KeyboardAvoidingView
                            behavior={Platform.OS == "ios" ? "padding" : "height"}
                            >
                        <TextInput placeholder="geodata"
                            style={styles.input} textAlign={"center"}
                            value={geodata}
                            onChangeText={inputHandlerGeodata} />
                    </KeyboardAvoidingView>    
                </View>
                <TouchableOpacity style={styles.btn} title={"publicate"}
                                      onPress={() => navigation.navigate("Home")}
                ><Text> Publicate</Text></TouchableOpacity>
              <View style={styles.container  }>
      <Tabs.Navigator 
        screenOptions={({ route }) => ({
          tabBarStyle: { height: 83, },
          tabBarIcon: ({ focused, tintColor }) => {
  
          let iconName="";
  
          iconName = xmlTrash;
        
          
          const color = focused ? "#F6F6F6" : "#FFF";
          const icon = iconName.replace('{color}', color);
          return(  <View style={{ flex: 1, justifyContent: "center", alignItems: "center"} }>

            
             <SvgXml xml={icon} width="70" height="40" /> 
                 
            </View>)

        },
      })}
    
    >
      
      
            <Tabs.Screen name="Create1" component={ProfileScreen} />
                        
           
        </Tabs.Navigator>
        </View>   
    </View> 
    </TouchableWithoutFeedback>
        
  );
}

const styles = StyleSheet.create({
    
    container: {
        position: 'relative',
        height: 900,
        flex: 1,
        backgroundColor: "#fff",
    },
    photoIcon: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: "#fff",
        top: 100,
        left: 150,

    },
  
    newPhoto: {
        

 
        width: 343,
        height: 240,
        left: 32,
        top: 12,

        /* Gray/01 */

        backgroundColor: '#F6F6F6',
        border: '1px solid #E8E8E8',
        borderRadius: 8,
    },
    uploadBtn: {
        marginTop: 16,
        marginLeft: 20,
    },
    input: {   

      
       
       

        border: '1px solid #E8E8E8'
    },
    btn: {
        
        fontFamily: 'Roboto-Regular',
        backgroundColor: "#FF6C00",
        borderRadius: 50,
        height: 40,
        marginBottom: 200,
        textAlign: 'center',
        paddingTop: 10,

        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 16,
     },    
    text: {
        margin: (0,0),

    },
})