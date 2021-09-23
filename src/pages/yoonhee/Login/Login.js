import React from 'react';
import './Login.scss';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = { id: '', ps: '', isBtn: false };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value }, () => this.btnChange());
  };

  btnChange = () => {
    const { id, ps } = this.state;
    if (id.includes('@') && ps.length >= 5) {
      this.setState({ isBtn: true });
    } else {
      this.setState({ isBtn: false });
    }
  };

  render() {
    return (
      <form>
        <input
          name="id"
          className="log-in__id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={this.handleInput}
        />
        <input
          name="ps"
          className="log-in__ps"
          type="password"
          placeholder="비밀번호"
          onChange={this.handleInput}
        />
        <button
          type="submit"
          className={this.state.clickBtn ? 'log-in__btn' : 'disabled'}
          onClick={this.props.onBtn}
        >
          로그인
        </button>
      </form>
    );
  }
}

class LoginYoonHee extends React.Component {
  // constructor() {
  //   super();
  //   this.state = { isAct: false };
  // }
  goToMain = () => {
    this.props.history.push('/main-yoonhee');
  };

  render() {
    return (
      <article className="login-art">
        <div className="log-in__main">
          <h1 className="main-name">westagram</h1>
          <div className="log-in">
            <LoginForm clickBtn={this.goToMain} />
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
