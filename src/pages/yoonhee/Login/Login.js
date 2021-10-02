import React from 'react';
import './Login.scss';
import LoginForm from './LoginForm';

class LoginYoonHee extends React.Component {
  render() {
    return (
      <article className="login-art">
        <div className="log-in__main">
          <h1 className="main-name">westagram</h1>
          <div className="log-in">
            <LoginForm />
          </div>
          <a className="find-ps" href="#!">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </article>
    );
  }
}

export default LoginYoonHee;
