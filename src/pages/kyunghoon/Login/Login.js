import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleIdInput = event => {
    this.setState({ email: event.target.value });
  };

  handlePwInput = event => {
    this.setState({ password: event.target.value });
  };

  goToMain = () => {
    this.props.history.push('/main-kyunghoon');
    fetch('http://10.58.6.202:8000/users/login/', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="loginInner">
          <h1 className="headline">Westagram</h1>
          <div className="userInformation">
            <input
              className="userId"
              type="text"
              placeholder="전화번호, 사용자이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              className="userPassword"
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
            <button
              className={
                this.state.email.indexOf('@') !== -1 &&
                this.state.password.length >= 5
                  ? 'activeButton'
                  : 'disabledButton'
              }
              buttonColorControl={
                this.state.email.indexOf('@') !== -1 &&
                this.state.password.length >= 5
                  ? 'false'
                  : 'true'
              }
              onClick={this.goToMain}
            >
              로그인
            </button>
          </div>
          <div className="forgetPassword">
            <a className="forget" href=" ">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
