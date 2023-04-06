import { StyleSheet, Text, View } from "react-native";
import { CardSection, Input } from "./common";
import { Picker } from "@react-native-picker/picker";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions/EmployeeActions";

const EmployeeForm = (props) => {
  return (
    <View>
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
        <View
          style={{
            padding: 5,
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1.68 }}
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
    </View>
  );
};
const styles = StyleSheet.create({
  pickerTextStyle: {
    flex: 2,
    fontSize: 18,
    paddingLeft: 20,
  },
});

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
