import * as React from 'react';
import { styled } from 'styledComponents';
import { Header, LoginForm, Footer } from '../components';

const Component = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    135deg,
    var(--bgcolor),
    var(--bgcolor),
    var(--primary-color),
    var(--primary-color)
  );
`;

interface IProps {}

class Login extends React.Component<IProps> {
  render() {
    return (
      <Component>
        <Header />
        <LoginForm />
        <Footer />
      </Component>
    );
  }
}

export default Login;
