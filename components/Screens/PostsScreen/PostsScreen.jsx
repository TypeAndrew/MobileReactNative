import {  View, Text, ImageBackground, StyleSheet } from "react-native";
//import { TouchableOpacity } from "react-native-web";

export const PostsScreen = () =>{


    return (
    <View style={styles.container}>
        <View style={styles.formx}>
            <View style={styles.AvatarRow}>
                <View style={styles.AvatarWrapper}>
                    <ImageBackground
                        style={styles.imageAvatar}
                        source={require("../../../assets/images/loginBG.png")}> 
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
            source={require("../../../assets/icons/Rectangle.svg")}>+</ImageBackground>   
            <ImageBackground
            style={styles.image}
            source={require("../../../assets/icons/user.svg")}/>       
        </View>
    </View>
    )
}

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
        height: 729,
        color: 'black',
        width: 375,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    imageAvatar: {
      
      
        width: 60,
        height: 60,
    },
    AvatarWrapper: {
       
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
