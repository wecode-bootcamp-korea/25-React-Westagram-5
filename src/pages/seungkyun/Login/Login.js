/*eslint-disable*/
import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMainByEnterkey = e => {
    if (e.key === 'Enter') {
      this.goToMain();
    }
  };

  goToMain = () => {
    const isBtnValid = this.state.id.includes('@') && this.state.pw.length > 5;
    isBtnValid && this.props.history.push('/main-seungkyun');
  };

  render() {
    const isBtnValid = this.state.id.includes('@') && this.state.pw.length > 5;
    return (
      <main className="Seungkyun_login">
        <div className="container_login">
          <div className="instagram_logo">WEstargram</div>
          <div className="textfield_wrapper">
            <input placeholder="전화번호, 사용자 이름 또는 이메일" name="id" className="text_field" onKeyUp={this.goToMainByEnterkey} onChange={this.handleInput} />
            <input type="password" placeholder="비밀번호" name="pw" className="text_field" onKeyUp={this.goToMainByEnterkey} onChange={this.handleInput} />
            <button className={`submit_button ${isBtnValid ? 'btn_on' : ''}`} disabled={!isBtnValid} onClick={this.goToMain}>
              로그인
            </button>
          </div>
          <a href="" className="forget_pw">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </main>
    );
  }
}

export default Login;
