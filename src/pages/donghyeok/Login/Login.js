import React from 'react';
import { Link } from 'react-router-dom';
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

  render() {
    // console.log('state>>>>>', this.state);
    return (
      <div className="container">
        <div className="headtitle">westargram</div>
        <div className="textline">
          <div className="input-wrap">
            <input
              type="text"
              id="userId"
              placeholder="전화번호,사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
            <Link to="/main-donghyeok">
              <button>로그인</button>
            </Link>
          </div>
        </div>
        <div className="footer">
          <a href="login.html">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    );
  }
}

export default Login;
