import React from 'react';
import Footer from './Footer';
import Story from './Story';
import Recommend from './Recommend';

class MainR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-right">
        <div className="user main-right__user">
          <img
            className="user__img user__img--big"
            alt="user"
            src="images/yoonhee/star.jpeg"
          />
          <div className="user-text2">
            <div className="user__id">yoooon0w0</div>
            <div className="text--gray">yoon0w0/윤윤윤</div>
          </div>
        </div>
        <div className="main-right__story">
          <div className="box box-padding">
            <div className="main-right__header">
              <span className="text--gray">스토리</span>
              <span className="text user__id">모두보기</span>
            </div>
            <ul>
              {USER.map(user => (
                <Story key={user.id} nickname={user.nickname} img={user.img} />
              ))}
            </ul>
          </div>
          <div className=" box box-padding">
            <div className="main-right__header">
              <span className="text--gray">회원님을 위한 추천</span>
              <span className="text user__id">모두보기</span>
            </div>
            <ul>
              {USER.map(user => (
                <Recommend
                  key={user.id}
                  nickname={user.nickname}
                  img={user.img}
                />
              ))}
            </ul>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default MainR;

const USER = [
  { id: 1, img: 'images/yoonhee/star.jpeg', nickname: 'yon0w0' },
  { id: 2, img: 'images/yoonhee/star.jpeg', nickname: 'yoon0w0' },
  { id: 3, img: 'images/yoonhee/star.jpeg', nickname: 'yooon0w0' },
  { id: 4, img: 'images/yoonhee/star.jpeg', nickname: 'yoooon0w0' },
];
