import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push, onValue, set, remove } from "firebase/database";
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
} from "./types";
import config from "../firebaseConfig/firebase.config";

const app = initializeApp(config);
const auth = getAuth(app);
const database = getDatabase(app);

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};

export const employeeCreate = ({ navigation, name, phone, shift }) => {
  const { currentUser } = auth;
  return (dispatch) => {
    const employeesRef = ref(database, `users/${currentUser.uid}/employees`);
    push(employeesRef, { name, phone, shift }).then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      navigation.navigate("employeeList");
    });
  };
};

export const employeesFetch = () => {
  const { currentUser } = auth;
  return (dispatch) => {
    const employeesRef = ref(database, `users/${currentUser.uid}/employees`);
    onValue(employeesRef, (snapshot) => {
      dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = auth;

  return (dispatch) => {
    const employeeRef = ref(
      database,
      `users/${currentUser.uid}/employees/${uid}`
    );

    return set(employeeRef, { name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_SAVE_SUCCESS })
    })
    .catch((error) => {
      console.error('Error updating employee data:', error);
    });
  };
};

export const employeeDelete = ({uid}) => {
  const { currentUser } = auth;

  return () => {
    const employeeRef = ref(
      database,
      `users/${currentUser.uid}/employees/${uid}`
    );

    remove(employeeRef)
    .then(() => {
      
    })
    .catch((error) => {
     
    });

  }
}