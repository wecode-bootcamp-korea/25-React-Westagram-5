/*eslint-disable*/
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
      isBtnActive: false,
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

  handleBtn = () => {
    const { id, pw } = this.state;
    id.includes('@') && pw.length > 5
      ? this.setState({ isBtnActive: true })
      : this.setState({ isBtnActive: false });
  };

  goToMain = () => {
    this.props.history.push('/main-seungkyun');
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
              onKeyUp={this.handleBtn}
              onChange={this.handleIdInput}
            />
            <input
              type="password"
              placeholder="비밀번호"
              id="pwfield"
              className="textfield"
              onKeyUp={this.handleBtn}
              onChange={this.handlePwInput}
            />
            <button
              className={
                this.state.isBtnActive ? 'submitButton btnOn' : 'submitButton'
              }
              disabled={!this.state.isBtnActive}
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
