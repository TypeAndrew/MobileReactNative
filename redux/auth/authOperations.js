import  db  from "../../firebase/config";
import {
  getAuth, signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';


export const authSignUpUser = ({ email, password, nickname }) => async (
  dispatch,
  getSatte
) => {
  console.log("email, password, nickname1", email, password, nickname);
  console.log("db", db);

  const auth = getAuth(db);
    console.log(auth);
  console.log("++++++++++++++++++++++");
  try {
   
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log("user", user);
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};

export const authSignInUser = () => async (dispatch, getSatte) => {};

export const authSignOutUser = () => async (dispatch, getSatte) => {};