import { connect } from "react-redux";
import { Picker } from "@react-native-picker/picker";
import { employeeUpdate, employeeCreate } from "../actions/EmployeeActions";
import { Button, Card, CardSection, Input } from "./common";
import { Text, StyleSheet } from "react-native";
import { View } from "react-native";

const EmployeeCreate = (props) => {
  const onButtonPress = () => {
    const { name, phone, shift } = props;

    props.employeeCreate ({ navigation: props.navigation, name, phone, shift: shift || 'Monday' });
  }
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
      <CardSection >
        <View style={{padding: 5, flex: 1,  justifyContent: 'space-between',  alignItems:'center', flexDirection: 'row'}}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1.68}}
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
        </View>
      </CardSection>
      <CardSection>
        <Button onPress={onButtonPress.bind(this)}>Create</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  pickerTextStyle: {
    flex: 2,
    fontSize: 18,
    paddingLeft: 20,
   
  },
});

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
