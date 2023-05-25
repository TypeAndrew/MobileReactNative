<script src="http://localhost:8097"></script>
import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import { normalize } from 'react-native-normalize';
import { RegistrationScreen} from './components/Screens/RegistrationScreen/RegistrationScreen'
import { LoginScreen} from './components/Screens/LoginScreen/LoginScreen'
import { PostsScreen } from './components/Screens/PostsScreen/PostsScreen'
import { CreatePostsScreen } from './components/Screens/CreatePostsScreen/CreatePostsScreen';
import { ProfileScreen } from './components/Screens/ProfileScreen/ProfileScreen';
import { MapScreen } from './components/Screens/MapScreen/MapScreen';
import { CommentsScreen } from './components/Screens/CommentsScreen/CommentsScreen';
import { useFonts } from 'expo-font';



export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }
  const MainStack = createStackNavigator();

  return (
   <>
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />{/* Аналог Route */}
        <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="Home" component={PostsScreen} />
          <MainStack.Screen name="Create" component={CreatePostsScreen} />
          <MainStack.Screen name="Profile" component={ProfileScreen} />
          <MainStack.Screen name="Map" component={MapScreen} />
          <MainStack.Screen name="Comment" component={CommentsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  
    </>
 

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

