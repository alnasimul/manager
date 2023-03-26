import { connect } from "react-redux";
import { emailChanged, passwordChanged } from "../actions";
import { Card, CardSection, Input, Button } from "./common";
const LoginForm = (props) => {
  const onEmailChange = (text) => {
    props.emailChanged(text)
  };

  const onPasswordChange = (text) => {
    props.passwordChanged(text)
  }

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
      <CardSection>
        <Button>Login</Button>
      </CardSection>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged }) (LoginForm);
