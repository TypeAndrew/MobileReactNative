import  db  from "../../firebase/config";
import {
  getAuth, signInWithEmailAndPassword,
  
} from 'firebase/auth';


export const authSignUpUser = ({ email, password, nickname }) => async (
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
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};

export const authSignInUser = ({ email, password }) => async (
  dispatch,
  getState
) => {

  const auth = getAuth(db);

  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
  
    console.log("user", user);
  } catch (error) {
    console.log("error", error);
    console.log("error.code", error.code);
    console.log("error.message", error.message);
  }
};

export const authSignOutUser = () => async (dispatch, getSatte) => {};