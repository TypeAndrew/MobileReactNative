
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, 
    Keyboard,TextInput,
    KeyboardAvoidingView, Alert 
} from "react-native";
import { useState, useEffect } from "react"; 

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  { SvgXml} from "react-native-svg";
import { xmlPhoto, xmlTrash } from "../../../assets/icons/icons";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
// import { ImageBackground } from "react-native-web";
import * as Location from "expo-location";
import { collection, addDoc } from "firebase/firestore";
import { useRoute } from "../../../router"; 
import { db, storage } from "../../../firebase/config";
import { getDownloadURL, ref, uploadBytes, getStorage } from "firebase/storage";
import { getAuth} from "firebase/auth";
import { useSelector } from "react-redux";
import { selectUserId, selectLogin, selectState } from "../../../redux/selactors";

export function CreatePostsScreen({navigation}) {

    const [name, setName] = useState("");
    const [geodata, setGeodata] = useState("");
    const [location, setLocation] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState({});
    
    const routing = useRoute(true);
    console.log("111111111111--");
    const userId = useSelector(selectUserId);
    const statex = useSelector(selectState);
    console.log("statex222222222222--"+JSON.stringify(statex));
    console.log("22222222222222222--"+userId);
    const login = useSelector(selectLogin);
    console.log("33333333333333333"+login);
  
    const inputHandlerName = ((text) => {
        setName(text)
        console.log(text);
    });

    const inputHandlerGeodata = ((text) => {
        setGeodata(text)
        console.log(text);
    });
        const resetData = () => {
        setPhoto(null);
        setGeodata(null);
       
    };
     useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();
        await Location.requestPermissionsAsync();
        setHasPermission(status === "granted");
        
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);    
        
        
        })();
      
    }, []);

     const uploadPhotoToServer = async () => {
         console.log("0000000000000000000");
         console.log("00000000000111111111111");
         console.log(photo);
         const response = await fetch(photo.picture);
         console.log("00000000000111111111111");
        const file = await response.blob();
         console.log("000000000002222222222");
        const uniquePostId = Date.now().toString();
      
         //const auth =  getAuth(db);
          console.log("1111111111111111"+JSON.stringify(file));
         //const token = await auth.idToken;
         console.log("22222222222222222");
         //const storage = getStorage(token);
         console.log("3333333333333333"+JSON.stringify(storage));
         const storageRef = ref(storage, `postImage/${uniquePostId}`);
         console.log("444444444444444"+JSON.stringify(storageRef));
         await uploadBytes(storageRef, file);
         const photoUrl = await getDownloadURL(ref(storage, `postImage/${uniquePostId}`));
         console.log("555555555555555");
         console.log("data", photoUrl);
         return photoUrl;
         
         
    };

    const uploadPostToServer = async () => {
    photo.picture = await uploadPhotoToServer();

    try {
      const title = photo?.title; 
      const picture = photo?.picture;  
      console.log("((((((((((((((((("+db+"))))))))))"+photo?.picture)  
      const docRef = await addDoc(collection(db, "posts"), {
        userId,
        email,
        location,
        picture,
        title,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    };
    
    const takePhoto= async () => {
        const photo= await camera.takePictureAsync();
        console.log("photo", photo);

       
        const location = await Location.getCurrentPositionAsync();
 
        console.log("latitude", location.coords.latitude);
        console.log("longitude", location.coords.longitude);

        setPhoto({picture: photo?.uri, 
                  title: name , 
                  geodata: geodata, 
                  latitude: location?.coords?.latitude,
                  longitude: location?.coords?.longitude });
        
    };


    const sendPhoto = () => {
        console.log("navigation", navigation);
        uploadPostToServer()
      
        photo.picture !== undefined ? navigation.navigate("Home", { photo })
            : Alert.alert('Error', 'Make a photo please.');
        

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
                                    source={{ uri: photo.picture }}
                                    >
                                         <SvgXml xml={xmlPhoto} />
                                </ImageBackground>) :
                                (
                                <ImageBackground
                                    source={{ uri: photo.picture }}
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
       // border: '1px solid #E8E8E8',
        borderRadius: 8,
    },
    uploadBtn: {
        marginTop: 16,
        marginLeft: 20,
    },
    input: {   

      
       
       

       // border: '1px solid #E8E8E8'
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