import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import { initializeApp } from "firebase/app";
  import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
  } from "./types";
  import config from "../firebaseConfig/firebase.config";
  
  const app = initializeApp(config);
  
  const auth = getAuth(app);
  
  export const emailChanged = (text) => {
    return {
      type: EMAIL_CHANGED,
      payload: text,
    };
  };
  
  export const passwordChanged = (text) => {
    return {
      type: PASSWORD_CHANGED,
      payload: text,
    };
  };
  
  export const loginUser = ({ email, password, navigation }) => {
    return (dispatch) => {
      dispatch({ type: LOGIN_USER })
      
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          loginUserSuccess(dispatch, user, navigation);
        })
        .catch((error) => {
          console.log(error)
          createUserWithEmailAndPassword(auth, email, password)
          .then((user) => {
            loginUserSuccess(dispatch, user);
          })
          .catch(() => loginUserFail(dispatch))
        });
    };
  };
  
  const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
  };
  
  const loginUserSuccess = (dispatch, user, navigation) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    navigation.navigate('employeeList')
  };
  