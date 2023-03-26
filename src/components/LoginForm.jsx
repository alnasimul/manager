import { Card, CardSection, Input, Button } from "./common";
const LoginForm = () => {
  return (
    <Card>
      <CardSection>
        <Input label="Email" placeholder="email@gmail.com" />
      </CardSection>
      <CardSection>
        <Input secureTextEntry label="Password" placeholder="password" />
      </CardSection>
      <CardSection>
        <Button>Login</Button>
      </CardSection>
    </Card>
  );
};

export default LoginForm;
