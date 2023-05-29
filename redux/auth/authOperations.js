import  db  from "../../firebase/config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut ,
  onAuthStateChanged 
  
} from 'firebase/auth';


export const authSignUpUser = ({ email, password, nickname }, navigation) => async (
  dispatch,
  getSatte
) => {
  console.log("email, password, nickname1", email, password, nickname);
  console.log("db", db);

  const auth = getAuth(db);
    console.log(auth);

  try {
   
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log("user", user);
    navigation.navigate("Home");
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};

export const authSignInUser = ({ email, password }, navigation) => async (
  dispatch,
  getState
) => {

  const auth = getAuth(db);

  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    navigation.navigate("Home");
    console.log("user", user);
  } catch (error) {
    console.log("error", error);
    console.log("error.code", error.code);
    console.log("error.message", error.message);
    return;
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
 
 
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
     const userUpdateProfile = {
        nickName: user.displayName,
        userId: user.uid,
      };

      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
    } else {
      // User is signed out
      // ...
    }
  });
 

};