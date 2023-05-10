import {
    TextInput, View, Text, ImageBackground, StyleSheet,
    TouchableWithoutFeedback, 
    Keyboard,
    KeyboardAvoidingView,
    Platform, } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { useState } from "react";

export const LoginScreen = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const inputHandlerEmail = ((text) => {
        setEmail(text)
        console.log(text);
    });
    const inputHandlerPassword = ((text) => {
        setPassword(text)
        console.log(text);
    });

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>   
        <View style={styles.container}>
            <ImageBackground
            style={styles.image}
            source={require("../../../assets/images/loginBG.png")}> 
        
            
            </ImageBackground> 
    
            <View style={styles.form}>
                <Text style={[styles.text, styles.header]}>Login</Text>
                <View style={{ marginTop: 32 }}>
                    <KeyboardAvoidingView
                                behavior={Platform.OS == "ios" ? "padding" : "height"}
                                >
                        <TextInput placeholder="EMAIL"
                            style={styles.input} textAlign={"center"}
                            value={email}
                                onChangeText={inputHandlerEmail} />
                    </KeyboardAvoidingView>        
                </View>
                <View style={{ marginTop: 16 }}> 
                    <KeyboardAvoidingView
                                behavior={Platform.OS == "ios" ? "padding" : "height"}
                                >
                        <TextInput placeholder="PASSWORD"
                            style={styles.input} textAlign={"center"}
                            value={password}
                                onChangeText={inputHandlerPassword} />
                    </KeyboardAvoidingView>        
                </View>

                    <TouchableOpacity style={styles.btn}><Text>Login</Text></TouchableOpacity>
                    <Text style={styles.text}>no account, register </Text>
            
            </View>
        </View>
    </TouchableWithoutFeedback>         
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',    
        flex: 1,
        backgroundColor: "#fff",
        
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
    input: {   
        backgroundColor: '#F6F6F6',
        marginLeft: 16,
        borderWidth: 1,
        borderColor: "#f0f8ff",
        height: '40px',
   
        color: '#BDBDBD',
        borderColor: 'black'
    },
  
    inputTitle: {
        color: "#f0f8ff",
    },
    text: {   
        color: '#212121',
        textAlign: 'center',
    },
    header: {   
        
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35,
    },
    form: { 
        padding: ('auto',16),
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 50,
        paddingTop: 92,
        width:  375,
        height: 549,
        top:   263,
        left:    0,
        zIndex: 30
     },
   
     btn: {
        backgroundColor: "#FF6C00",
        borderRadius: 50,
        height: 40,
        marginTop: 40,
        textAlign: 'center',
        paddingTop: 10,

        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 16,
     }    
}); 