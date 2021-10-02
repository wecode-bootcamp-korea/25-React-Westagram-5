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

  validatePattern = () => {
    const { id, pw } = this.state;
    const emailPattern =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const pwPattern =
      /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    return emailPattern.test(id) && pwPattern.test(pw);
  };

  goToMainByEnterkey = e => {
    if (e.key === 'Enter' && this.validatePattern()) {
      this.goToMain();
    }
  };

  goToMain = () => {
    this.validatePattern() && this.props.history.push('/main-seungkyun');

    /* (참고) backend와 계정 검증하기!
  fetch('http://주소:포트/endpoint', {
  method: 'POST',
  body: JSON.stringify({
  email: this.state.id,
  password: this.state.pw,
  phone: '010-0000-0000',
  name: 'SK.Hong',
  })
  .then(result => result.json())
  .then(data => {
    if (data.token) {
      localStorage.setItem('token', response.token)
      this.props.history.push('/main-seungkyun)
    } else {
      alert(data.message)
    }
  })
  */
  };

  render() {
    const isBtnValid = this.validatePattern();
    return (
      <main className="Seungkyun_login">
        <div className="container_login">
          <div className="instagram_logo">WEstargram</div>
          <div className="textfield_wrapper">
            <input
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="id"
              className="text_field"
              onKeyUp={this.goToMainByEnterkey}
              onChange={this.handleInput}
            />
            <input
              type="password"
              placeholder="비밀번호"
              name="pw"
              className="text_field"
              onKeyUp={this.goToMainByEnterkey}
              onChange={this.handleInput}
            />
            <button
              className={`submit_button ${isBtnValid ? 'btn_on' : ''}`}
              disabled={!isBtnValid}
              onClick={this.goToMain}
            >
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
