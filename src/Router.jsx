import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import { Button } from "react-native";
import EmployeeCreate from "./components/EmployeeCreate";

const Stack = createNativeStackNavigator();

const RouterComponent = () => {
  return (
    <>
      {/* <View style={{ marginTop: 65 }}></View> */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#ffffff",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="login"
            component={LoginForm}
            options={{
              title: "Login",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="employeeList"
            component={EmployeeList}
            options={({ navigation }) => ({
              title: "Employees",
              headerTitleAlign: "center",
              headerLeft: () => false,
              headerRight: () => (
                <Button
                  title="Add"
                  onPress={() => navigation.navigate("employeeCreate")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="employeeCreate"
            component={EmployeeCreate}
            options={{
              title: "Create Employee",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RouterComponent;
