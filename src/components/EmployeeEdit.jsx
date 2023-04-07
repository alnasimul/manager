import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";
import Communications from "react-native-communications";
import { employeeUpdate, employeeSave, employeeDelete } from "../actions";
import { Button, Card, CardSection, Confirm } from "./common";
import { useEffect } from "react";
import _ from "lodash";
import { useState } from "react";

const EmployeeEdit = (props) => {
  const [showModal, setShowModal] = useState(false)
  const { employee } = props.route.params;

  useEffect(() => {
    _.each(employee, (value, prop) => {
      props.employeeUpdate({ prop, value });
    });
  }, [employee, props.employeeUpdate]);

  const onButtonPress = () => {
    const { name, phone, shift } = props;

    props.employeeSave({ name, phone, shift, uid: employee.uid });

    props.navigation.navigate("employeeList");
  };

  const onTextPress = () => {
    const { name, phone, shift } = props;

    const message = `Hey ${name}, your upcoming shift is on ${shift}.`;

    Communications.textWithoutEncoding(phone, message);
  };

  const onAccept = () => {
    props.employeeDelete({uid: employee.uid})
    props.navigation.navigate("employeeList");
  }

  const onDecline = () => {
    setShowModal(!showModal)
  }

  return (
    <Card>
      <EmployeeForm />
      <CardSection>
        <Button onPress={onButtonPress}>Save Changes</Button>
      </CardSection>
      <CardSection>
        <Button onPress={onTextPress}>Text Schedule</Button>
      </CardSection>
      <CardSection>
        <Button onPress={() => setShowModal(!showModal)}>Fire Employee</Button>
      </CardSection>

      <Confirm visible={ showModal } onAccept={onAccept} onDecline={onDecline}>
        Are you sure you want to fire this employee?
      </Confirm>
    </Card>
  );
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(
  EmployeeEdit
);
