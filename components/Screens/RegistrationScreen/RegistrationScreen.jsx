import {
    TextInput, View, Text, ImageBackground, StyleSheet,
    TouchableWithoutFeedback, 
    Keyboard,
    KeyboardAvoidingView,
    Platform, } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-web";
import { Avatar } from '../../Avatar/Avatar'
export const RegistrationScreen = () =>{
    
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }    
    const [login, setlogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const inputHandlerLogin = ((text) => {
        setlogin(text)
        console.log(text);
    });
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
                <Avatar/>
            
            
            <View style={styles.form}>
                <Text style={[styles.text, styles.header]}>Registration</Text>
                <View style={{ marginTop: 32 }}>
                        <KeyboardAvoidingView
                            behavior={Platform.OS == "ios" ? "padding" : "height"}
                            >
                            <TextInput
                                style={styles.input} textAlign={"center"}
                                placeholder="LOGIN"
                                value={login}
                                onChangeText={inputHandlerLogin} />
                        </KeyboardAvoidingView>
                </View>
                <View style={{ marginTop: 16 }}> 
                    <KeyboardAvoidingView
                            behavior={Platform.OS == "ios" ? "padding" : "height"}
                            >
                        <TextInput placeholder="EMAIL"
                            style={styles.input} textAlign={"center"}
                            value={email}
                            onChangeText={inputHandlerEmail} />
                    </KeyboardAvoidingView>    
                </View>
                <View style={{ marginTop: 16, position: 'relative' }}> 
                        <KeyboardAvoidingView
                                behavior={Platform.OS == "ios" ? "padding" : "height"}
                                >
                        <TextInput placeholder="PASSWORD"
                            style={styles.input} textAlign={"center"}
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={inputHandlerPassword} />
                             <View style={styles.CheckBox}>
   
                                <TouchableOpacity onPress={togglePasswordVisibility}>
                                    <Text>{showPassword ? 'hide' : 'show'}</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                </View>
            
                    <TouchableOpacity style={styles.btn}><Text> Sign in</Text></TouchableOpacity>
                    <Text style={styles.text}>already registered, login </Text>
                
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
    CheckBox: {
         position: 'absolute',
         flexDirection: 'row',
         alignItems: 'center', 
         top: 10,
         left: 300,
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
        fontFamily: 'Roboto-Regular',
        color: '#212121',
        textAlign: 'center',

    },
    header: {   
        fontFamily: 'Roboto-Regular',
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
         fontFamily: 'Roboto-Regular',
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