
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, 
    Keyboard,TextInput,
    KeyboardAvoidingView,
} from "react-native";
import { useState, useEffect } from "react";  
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  { SvgXml} from "react-native-svg";
import { xmlPhoto, xmlTrash } from "../../../assets/icons/icons";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
// import { ImageBackground } from "react-native-web";

export function CreatePostsScreen({navigation}) {

    const [name, setName] = useState("");
    const [geodata, setGeodata] = useState("");

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);

    const inputHandlerName = ((text) => {
        setName(text)
        console.log(text);
    });

    const inputHandlerGeodata = ((text) => {
        setGeodata(text)
        console.log(text);
    });
    
     useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();

        setHasPermission(status === "granted");
        })();
    }, []);

    const takePhoto= async () => {
        const photo= await camera.takePictureAsync();
        setPhoto (photo.uri);
        console.log("photo", photo);
    };


    const sendPhoto = () => {
        console.log("navigation", navigation);
        navigation.navigate("Home", { photo });
    };
    
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    const Tabs = createBottomTabNavigator();
    // <SvgXml xml={xmlPhoto}  />
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  
    <View style={styles.container} >
            <View >
    
             
                    <Camera style={styles.newPhoto}
                         
                            ref={setCamera}>
                        <TouchableOpacity  onPress={takePhoto}>
                            
                            {(photo === null) ? ( <ImageBackground
                                    source={{ uri: photo }}
                                    >
                                         <SvgXml xml={xmlPhoto} />
                                </ImageBackground>) :
                                (
                                <ImageBackground
                                    source={{ uri: photo }}
                                    >
                                         <SvgXml xml={xmlPhoto} />
                                </ImageBackground>
                              )}
                        </TouchableOpacity>
                    </Camera>      
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
                                      onPress={sendPhoto}
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
      
      
            <Tabs.Screen name="Create" component={ProfileScreen} />
                        
           
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
       
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: "#fff",


    },
  
    newPhoto: {
        

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 343,
        height: 240,
        left: 32,
        top: 12,

        /* Gray/01 */

       // backgroundColor: '#F6F6F6',
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