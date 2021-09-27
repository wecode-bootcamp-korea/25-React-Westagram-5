import React from 'react';
// import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      userPassword: '',
    };
  }

  handleIdInput = event => {
    this.setState({ userId: event.target.value });
  };

  handlePwInput = event => {
    this.setState({ userPassword: event.target.value });
  };

  goToMain = () => {
    this.props.history.push('/main-kyunghoon');
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
            {/* <Link to="/main-kyunghoon"> */}
            <button onClick={this.goToMain}>로그인</button>
            {/* </Link> */}
          </div>
          <div className="forgetPassword">
            <a className="forget" href="">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
