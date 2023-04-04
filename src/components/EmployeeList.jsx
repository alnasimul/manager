import _ from "lodash";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";
import { employeesFetch } from "../actions";

const EmployeeList = (props) => {
  console.log(props.employees);
  return (
    <View>
      <Text>Emlpoyee List</Text>
      <Text>Emlpoyee List</Text>
      <Text>Emlpoyee List</Text>
      <Text>Emlpoyee List</Text>
      <Button onPress={() => props.employeesFetch()} title="Load" />
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state.employees)
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
