import {
    TextInput, View, Text, ImageBackground, StyleSheet, TouchableOpacity,
    TouchableWithoutFeedback, 
    Keyboard,
    KeyboardAvoidingView, 
    Dimensions,
    Platform, } from "react-native";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authSignInUser } from "../../../redux/auth/authOperations";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = ({ navigation }) =>{
    const [showPassword, setShowPassword] = useState(false);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setstate] = useState(initialState);

    const dispatch = useDispatch();
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    

    
    const keyboardHide = () => {
        Keyboard.dismiss();
        setIsShowKeyboard(false);
    };
    const inputHandlerEmail = ((text) => {
        setstate((prevState) => ({ ...prevState, email: text }))
    });
    const inputHandlerPassword = ((text) => {
         setstate((prevState) => ({ ...prevState, password: text }))        
    });

    const handleSubmit = () => {
        console.log("click");
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        dispatch(authSignInUser(state));
        setstate(initialState);
        navigation.navigate("Home")
        }
  
    return (
    <TouchableWithoutFeedback onPress={keyboardHide}>   
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
                            value={state.email}
                            onChangeText={inputHandlerEmail} 
                            onFocus={() => setIsShowKeyboard(true)}/>
                    </KeyboardAvoidingView>        
                </View>
                <View style={{ marginTop: 16, position: 'relative' }}> 
                    <KeyboardAvoidingView
                                behavior={Platform.OS == "ios" ? "padding" : "height"}
                        >
                    
                            <TextInput placeholder="PASSWORD"
                                style={styles.input} textAlign={"center"}
                                secureTextEntry={!showPassword}
                                value={state.password}
                                onChangeText={inputHandlerPassword}
                                onFocus={() => setIsShowKeyboard(true)}>
                           
                            </TextInput>
                            <View style={styles.CheckBox}>
   
                                <TouchableOpacity title="show" onPress={togglePasswordVisibility}>
                                    <Text>{showPassword ? 'hide' : 'show'}</Text>
                                </TouchableOpacity>
                            </View>
                     
                    </KeyboardAvoidingView>        
                </View>

                    <TouchableOpacity title="Login" style={styles.btn}
                                      onPress={handleSubmit }
                                      ><Text>Login</Text></TouchableOpacity>
                    <Text style={styles.text}
                          onPress={() => navigation.navigate("Register")}>no account, register </Text>
            
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
        height: 40,
   
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