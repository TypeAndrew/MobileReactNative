import {  View, ImageBackground, StyleSheet} from "react-native";

export const Avatar = () =>{


    return (
    <View style={styles.avatar}>
            <ImageBackground>
                <ImageBackground 
                        style={styles.icon}
                        source={require("../../assets/icons/add.svg")}> 
             
        
        </ImageBackground> 
         </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        position: 'absolute',
        backgroundColor: '#F6F6F6',
        width: 120,
        height: 120,
        left: 128,
        top: 203,
        
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
     
        borderRadius: 16,
        zIndex: 40,
    },
     icon: {
       
        
        resizeMode: 'cover',
        
        zIndex: 50,
        width: 25,
         height: 25,
        marginBottom: 14,
       
    },
})
