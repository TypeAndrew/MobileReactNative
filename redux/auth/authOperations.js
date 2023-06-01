import  app  from "../../firebase/config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut ,
  onAuthStateChanged,
  updateProfile
  
} from 'firebase/auth';

import { authSlice } from "./authReducer";

const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;

export const authSignUpUser = ({ email, password, login },navigation) => async (
  dispatch,
  getSatte
) => {
  console.log("email, password, nickname", email, password, login);
  console.log("app", app);

  const auth = getAuth(app);
    console.log(auth);

  try {
   
    await createUserWithEmailAndPassword(auth, email, password);
    console.log(login);
    await updateProfile(auth.currentUser, {
        displayName: login,
        email,
      });
     console.log("--" + JSON.stringify(auth.currentUser));
    navigation.navigate("Home");
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};

export const authSignInUser =
  ({ email, password },navigation) =>
  async (dispatch) => {
    try {
      const auth = getAuth(app);
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("user", auth.currentUser);
      if (user) {
        console.log('-------------------------->>>>>>>>>');
        dispatch(
          updateUserProfile({
            userId: auth.currentUser.uid,
            login:  auth.currentUser.displayName,
            email:  auth.currentUser.email,
          })
        );

        dispatch(authStateChange({ stateChange: true }));
        navigation.navigate("Home");
      }
    } catch (error) {
      console.log("error", error);
      console.log("error.code", error.code);
      console.log("error.message", error.message);
    }
    };
  
export const authSignOutUser = ( navigation) => async (dispatch, getState) => {

  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.

    navigation.navigate("Login")
  }).catch((error) => {

  });
};

export const authStateCahngeUser = () => async (dispatch, getState) => {
 
 
   try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          updateUserProfile({
            userId: user.uid,
            login: user.displayName,
            email: user.email,
          })
        );

        dispatch(authStateChange({ stateChange: true }));
      }
    });
  } catch (error) {
    console.log("error:", error);
    console.log("error.code:", error.code);
    console.log("error.message:", error.message);
  }
 

};