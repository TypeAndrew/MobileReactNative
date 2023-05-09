import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import { RegistrationScreen} from './components/Screens/RegistrationScreen/RegistrationScreen'
import { LoginScreen} from './components/Screens/LoginScreen/LoginScreen'


export default function App() {

  const MainStack = createStackNavigator();

  return (
   

    <NavigationContainer>
      <MainStack.Navigator>

                <Stack.Screen name="register" component={RegistrationScreen} />
                <Stack.Screen name="login" component={LoginScreen} />
                
      </MainStack.Navigator>
    </NavigationContainer>
 

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

