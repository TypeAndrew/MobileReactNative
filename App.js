import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import { normalize } from 'react-native-normalize';
import { RegistrationScreen} from './components/Screens/RegistrationScreen/RegistrationScreen'
import { LoginScreen} from './components/Screens/LoginScreen/LoginScreen'
import { PostsScreen} from './components/Screens/PostsScreen/PostsScreen'
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
    <RegistrationScreen />
      <LoginScreen />
      <PostsScreen/>
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

