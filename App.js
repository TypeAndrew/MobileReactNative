<script src="http://localhost:8097"></script>
import React, { useState, useEffect, StyleSheet } from "react";
import {} from "react-native";

import * as Font from "expo-font";
import { AppLoading } from "expo";

import { NavigationContainer} from "@react-navigation/native";


import { useRoute } from "./router";

const loadApplication = async () => {
  await Font.loadAsync({
      'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  });
};

export default function App() {
  
  
  const [iasReady, setIasReady] = useState(false);

  const routing = useRoute(true);
 /* if (!iasReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIasReady(true)}
        onError={console.warn}
      />
    );
  }*/

  return <NavigationContainer>{routing}</NavigationContainer>;
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