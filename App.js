import React from "react";
import { useFonts } from 'expo-font';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Main } from "./components/Main";

export default () => {
   
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }
 


   
  

   return (
    <Provider store={store}>
         <Main />
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