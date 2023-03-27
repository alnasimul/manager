import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { initializeApp } from "firebase/app";
import ReduxThunk from 'redux-thunk';
import reducers from "./reducers";
import config from "./firebaseConfig/firebase.config";
import Router from "./Router";

export const app = initializeApp(config);

export default function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
