import {  View, ImageBackground, StyleSheet} from "react-native";

export const Avatar = () =>{


    return (
    <View style={styles.avatar}>
        <ImageBackground />
    </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        position: 'absolute',
        backgroundColor: 'white',
        width: 120,
        height: 120,
        left: 128,
        top: 203,

     
        borderRadius: 16,
        zIndex: 40,
    },
})
