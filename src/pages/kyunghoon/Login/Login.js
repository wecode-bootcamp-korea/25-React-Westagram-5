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

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
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
    const isvalidButton =
      this.state.email.indexOf('@') !== -1 && this.state.password.length >= 5;
    return (
      <div className="loginContainer">
        <div className="loginInner">
          <h1 className="headline">Westagram</h1>
          <div className="userInformation">
            <input
              className="userId"
              type="text"
              placeholder="전화번호, 사용자이름 또는 이메일"
              name="email"
              onChange={this.handleInput}
            />
            <input
              className="userPassword"
              type="password"
              placeholder="비밀번호"
              name="password"
              onChange={this.handleInput}
            />
            <button
              className={isvalidButton ? 'activeButton' : 'disabledButton'}
              disabled={!isvalidButton}
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
