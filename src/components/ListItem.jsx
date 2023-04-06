import { Text, TouchableWithoutFeedback, View } from "react-native";
import { CardSection } from "./common";

const ListItem = ({ employee, navigation }) => {
  const onRowPress = () => {
    // Actions.employeeEdit({ employee: this.props.employee });
    navigation.navigate("employeeEdit", { employee });
  };

  const { name } = employee;

  return (
    <TouchableWithoutFeedback onPress={onRowPress.bind(this)}>
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>{name}</Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default ListItem;
