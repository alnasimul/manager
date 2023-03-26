import { Provider } from "react-redux";
import { createStore } from "redux";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import reducers from "./reducers";
import config from "./firebaseConfig/firebase.config";
import LoginForm from "./components/LoginForm";

const app = initializeApp(config);

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <LoginForm />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
