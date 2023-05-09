import { TextInput, View, Text, ImageBackground, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { Avatar } from '../../Avatar/Avatar'
export const RegistrationScreen = () =>{


    return (
    <View style={styles.container}>
        <ImageBackground
        style={styles.image}
        source={require("../../../assets/images/loginBG.png")}> 
    
        
        </ImageBackground> 
        <Avatar  />
        <View style={styles.form}>
            <Text style={[styles.text, styles.header]}>Registration</Text>
            <View style={{ marginTop: 32 }}>
        
                <TextInput placeholder="LOGIN" style={styles.input} textAlign={"center"} />
            </View>
            <View style={{ marginTop: 16 }}> 
              
                <TextInput placeholder="EMAIL" style={styles.input} textAlign={"center"} />
            </View>
            <View style={{ marginTop: 16 }}> 
              
                <TextInput placeholder="PASSWORD" style={styles.input} textAlign={"center"} />
            </View>
           
                <TouchableOpacity style={styles.btn}>Sign in</TouchableOpacity>
                <Text style={styles.text}>already registered, login </Text>
         
        </View>
    </View>
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