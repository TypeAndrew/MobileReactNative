<script src="http://localhost:8097"></script>

import React, { useState, useEffect, StyleSheet } from "react";
import {} from "react-native";

import { NavigationContainer} from "@react-navigation/native";
import { useRoute } from "./router";
import { useFonts } from 'expo-font';
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
   
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }
 

  const routing = useRoute(true);
   
  

   return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
   
}

/*const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});*/

 /* const MainStack = createStackNavigator();

  return (
   <>
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
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
 */ 