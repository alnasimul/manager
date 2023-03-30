import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { initializeApp } from "firebase/app";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import config from "./firebaseConfig/firebase.config";
import RouterComponent from "./Router";
import React from "react";

export const app = initializeApp(config);

export default function App({navigation}) {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <RouterComponent navigation={navigation} />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     backgroundColor: "#ffffff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
