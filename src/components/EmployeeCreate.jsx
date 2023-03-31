import { connect } from "react-redux";
import {Picker} from '@react-native-picker/picker';
import { employeeUpdate } from "../actions/EmployeeActions";
import { Button, Card, CardSection, Input } from "./common";

const EmployeeCreate = (props) => {
  return (
    <Card>
      <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
          value={props.name}
          onChangeText={(value) =>
            props.employeeUpdate({ prop: "name", value })
          }
        />
      </CardSection>
      <CardSection>
        <Input
          label="Phone"
          placeholder="555-555-5555"
          value={props.phone}
          onChangeText={(value) =>
            props.employeeUpdate({ prop: "phone", value })
          }
        />
      </CardSection>
      <CardSection>
        <Picker
          style={{ flex: 1 }}
          selectedValue={props.shift}
          onValueChange={(value) =>
            props.employeeUpdate({ prop: "shift", value })
          }
        >
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thrursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>
      <CardSection>
        <Button>Create</Button>
      </CardSection>
    </Card>
  );
};

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
