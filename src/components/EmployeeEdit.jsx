import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";
import { employeeUpdate, employeeSave } from "../actions";
import { Button, Card, CardSection } from "./common";
import { useEffect } from "react";
import _ from "lodash";

const EmployeeEdit = (props) => {
  const { employee } = props.route.params;

  useEffect(() => {
    _.each(employee, (value, prop) => {
      props.employeeUpdate({ prop, value });
    });
  }, [employee, props.employeeUpdate]);

  const onButtonPress = () => {
    const { name, phone, shift } = props;

    props.employeeSave({name, phone, shift, uid: employee.uid})

    props.navigation.navigate("employeeList")

  };

  return (
    <Card>
      <EmployeeForm />
      <CardSection>
        <Button onPress={onButtonPress}>Save Changes</Button>
      </CardSection>
    </Card>
  );
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
