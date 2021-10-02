import React from 'react';
// import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      // buttonColor: false, //=============수정 1
    };
  }

  // handleIdInput = e => {
  //   this.setState({
  //     id: e.target.value,
  //   });
  // };

  // handlePwInput = e => {
  //   this.setState({
  //     pw: e.target.value,
  //   });
  // };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //============== 수정 2

  // buttonChange = () => {
  //   const { id, pw } = this.state;
  //   id.includes('@') && pw.length >= 5
  //     ? this.setState({ buttonColor: true })
  //     : this.setState({ buttonColor: false });
  // };

  goToMain = e => {
    e.preventDefault();
    const { id, pw } = this.state;
    // id === 'dong@hyeok' && pw === '123456'
    id.includes('@') && pw.length >= 5
      ? // 기용님 연결
        // ? fetch('http://10.58.4.21:8000/users/signup', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //       email: this.state.id,
        //       password: this.state.pw,
        //     }),
        //   })
        //     .then(response => response.json())
        //     .then(
        //       response => {
        //         console.log(response.token);
        //       }
        //======================
        //   {
        //   if (response.token) {
        //     localStorage.setItem('token', response.token);
        this.props.history.push('/main-donghyeok')
      : //   }
        // }
        // )
        alert('다시 확인해 주세요');
  };

  render() {
    const { id, pw } = this.state;
    const isValid = id.includes('@') && pw.length >= 5; //수정3 함수로 말고 그냥 const {id, pw} = this.state하는법은? 꼭 함수로 안하도 바로가능
    return (
      <div className="loginContainer">
        <div className="headtitle">westargram</div>
        <div className="textline">
          <div className="input-wrap">
            {/* <form onChange={this.buttonChange}> */}
            <form>
              <input
                id="userId"
                name="id"
                placeholder="전화번호,사용자 이름 또는 이메일"
                onChange={this.handleInput}
              />
              <input
                type="password"
                id="password"
                name="pw"
                placeholder="비밀번호"
                onChange={this.handleInput}
              />
              {/* <Link to="/main-donghyeok"> */}
              <button
                className={isValid ? 'loginOn' : 'loginOff'}
                onClick={this.goToMain} //여기에 fetch 함수넣기
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
