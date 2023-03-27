import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Card, CardSection, Input, Button, Spinner } from "./common";
const LoginForm = (props) => {
  const onEmailChange = (text) => {
    props.emailChanged(text);
  };

  const onPasswordChange = (text) => {
    props.passwordChanged(text);
  };

  const onButtonPress = () => {
    const { email, password } = props;

    props.loginUser({ email, password });
  };

  const renderError = () => {
    if (props.error) {
      return (
        <View style={{ backgroundColor: "#fff" }}>
          <Text style={styles.errorText}>{props.error}</Text>
        </View>
      );
    }
  };

  const renderButton = () => {
    if (props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={onButtonPress.bind(this)}>Login</Button>;
  };

  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={onEmailChange.bind(this)}
          value={props.email}
        />
      </CardSection>
      <CardSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={onPasswordChange.bind(this)}
          value={props.password}
        />
      </CardSection>

      {renderError()}

      <CardSection>
        {renderButton()}
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 20,
    alignSelf: "center",
    color: "red",
  },
});

const mapStateToProps = ({ auth }) => {
  return {
    email: auth.email,
    password: auth.password,
    error: auth.error,
    loading: auth.loading,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
