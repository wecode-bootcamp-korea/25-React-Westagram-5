import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = { id: '', ps: '', isBtn: false };
  }

  goToMain = () => {
    this.props.clickBtn.push('/main-yoonhee');
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { id, ps } = this.state;
    const isAble =
      id.includes('@') && ps.length >= 5 ? 'log-in__btn' : 'disabled';
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
        <button type="submit" className={isAble} onClick={this.goToMain}>
          로그인
        </button>
      </form>
    );
  }
}

export default LoginForm;
