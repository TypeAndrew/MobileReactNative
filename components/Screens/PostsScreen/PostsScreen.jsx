import {  View, Text, ImageBackground, StyleSheet } from "react-native";
//import { TouchableOpacity } from "react-native-web";

export const PostsScreen = () =>{


    return (
        <View style={styles.container}>
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
