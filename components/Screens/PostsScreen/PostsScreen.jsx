import {  View, Text, StyleSheet, FlatList, ImageBackground, Image} from "react-native";
//import { TouchableOpacity } from "react-native-web";
import  { SvgXml} from "react-native-svg";
import { useState, useEffect } from "react";  
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { Ionicons } from "@expo/vector-icons";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";
import {xmlComment,xmlNavi} from "../../../assets/icons/icons";


const Tabs = createBottomTabNavigator();

export const PostsScreen = ({ route, navigation }) => {
  console.log("-----------"+navigation);
  const [posts, setPosts] = useState([]);
  console.log("route.params", route);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);
  
  const openMap = (latitude) => {
   
    navigation.navigate("Map",  latitude );
    console.log("latitude", latitude);
    //console.log("longitude", longitude);
  };

  const openComments = (latitude) => {
   
    navigation.navigate("Comment", route )
    console.log("route", route);
    //console.log("longitude", longitude);
  };
  
  return (
     <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
            }}
          >
            <Image
              source={{ uri: item.photo?.picture }}
              style={{ width: 350, height: 200 }}
            />
            <Text>{item.photo?.title}</Text>
            <Text styles={styles.geoString}>
                                      
              <SvgXml xml={xmlComment} width="10" height="10" onPress={openComments} />
              <Text>           </Text>  
              <SvgXml xml={xmlNavi} width="10" height="10" onPress={() => openMap(item)} /> 
              <Text>  </Text>  
              <Text onPress={() => openMap(item)} >{item.photo?.geodata}</Text>
            </Text>  
          </View>
        )}
      />
   
 
      </View>
  );
};

const styles = StyleSheet.create({

  container: {
      flex: 1,
    color: '#fff',
      
  },
  geoString: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
 
  }
})
