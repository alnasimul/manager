import _ from "lodash";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import { employeesFetch } from "../actions";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";

const EmployeeList = ({ employees, employeesFetch, navigation }) => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    employeesFetch();
  }, [employeesFetch]);

  useEffect(() => {
    setDataSource(employees);
  }, [employees]);

  const renderItem = ({ item }) => <ListItem employee={item} navigation={navigation} />;
  return (
    <FlatList
    data={dataSource}
    renderItem={renderItem}
    keyExtractor={(item) => item.uid}
  />
  );
};

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
