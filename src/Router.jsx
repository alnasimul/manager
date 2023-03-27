import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="root">
            <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
      </Router>
    );
};

export default RouterComponent;