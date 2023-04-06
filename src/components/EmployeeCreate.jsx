import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions/EmployeeActions";
import { Button, Card, CardSection } from "./common";
import EmployeeForm from "./EmployeeForm";

const EmployeeCreate = (props) => {
  const onButtonPress = () => {
    const { name, phone, shift } = props;

    props.employeeCreate ({ navigation: props.navigation, name, phone, shift: shift || 'Monday' });
  }
  return (
    <Card>
      <EmployeeForm/>
      <CardSection>
        <Button onPress={onButtonPress.bind(this)}>Create</Button>
      </CardSection>
    </Card>
  );
};

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
