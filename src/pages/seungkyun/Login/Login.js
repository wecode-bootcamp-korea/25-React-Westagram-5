import React from 'react';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }
  handleIdInput = e => {
    this.setState({
      id: e.target.value,
    });
  };
  handlePwInput = e => {
    this.setState({
      pw: e.target.value,
    });
  };
  goToMain = () => {
    this.props.history.push('../main/main');
  };

  render() {
    return (
      <main className="login-seungkyun">
        <div className="container">
          <div className="instagram_logo">WEstargram</div>
          <div className="textfield_wrapper">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              id="idfield"
              className="textfield"
              onChange={this.handleIdInput}
            />
            <input
              type="password"
              placeholder="비밀번호"
              id="pwfield"
              className="textfield"
              onChange={this.handlePwInput}
            />
            <button
              className="submitButton"
              onClick={this.goToMain}
              id="submitButton"
            >
              로그인
            </button>
          </div>
          <a href="" className="forgetpw">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </main>
    );
  }
}

export default Login;
