import {  View, Text, ImageBackground, StyleSheet } from "react-native";
//import { TouchableOpacity } from "react-native-web";

export const PostsScreen = () =>{


    return (
    <View style={styles.container1}>
        <ImageBackground
        style={styles.image}
        source={require("../../../assets/images/loginBG.png")}> 
    
        
        </ImageBackground> 
 
            <View style={styles.form}>
            
            </View>
            <View style={styles.bottomBar}>
               <ImageBackground
                style={styles.image}
                source={require('../../../assets/icons/grid.svg')}/> 
                <ImageBackground
                style={styles.image}
                source={require("../../../assets/icons/Rectangle.svg")}/> 
                <ImageBackground
                style={styles.image}
                source={require("../../../assets/icons/user.svg")}/>         
            </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        position: 'relative',
        flex: 1,
        backgroundColor: "#fff",
        
    },
    bottomBar: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row,'
    },
    image: {
      
   
        
        width: 40,
        height: 40,
    },
})
