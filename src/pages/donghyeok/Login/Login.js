import React from 'react';
// import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      buttonColor: false,
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

  buttonChange = () => {
    const { id, pw } = this.state;
    id.includes('@') && pw.length >= 5
      ? this.setState({ buttonColor: true })
      : this.setState({ buttonColor: false });
  };

  goToMain = e => {
    const { id, pw } = this.state;
    id === 'dong@hyeok' && pw === '123456'
      ? this.props.history.push('/main-donghyeok')
      : alert('다시 확인해 주세요');
  };

  render() {
    // console.log('state>>>>>', this.state);

    return (
      <div className="container">
        <div className="headtitle">westargram</div>
        <div className="textline">
          <div className="input-wrap">
            <form onChange={this.buttonChange}>
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
              {/* <Link to="/main-donghyeok"> */}
              <button
                className={this.state.buttonColor ? 'loginOn' : 'loginOff'}
                onClick={this.goToMain}
              >
                로그인
              </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
        <div className="footer">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    );
  }
}

export default Login;
