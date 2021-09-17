import React from 'react';
import './Login.scss';

class LoginYoonHee extends React.Component {
  goToMain = () => {
    this.props.history.push('/main-yoonhee');
  };

  render() {
    return (
      <article className="login-art">
        <div className="log-in__main">
          <h1 className="main-name">westagram</h1>
          <div className="log-in">
            <form>
              <input
                className="log-in__id"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                className="log-in__ps"
                type="password"
                placeholder="비밀번호"
              />
              <button className="log-in__btn" onClick={this.goToMain}>
                로그인
              </button>
            </form>
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
