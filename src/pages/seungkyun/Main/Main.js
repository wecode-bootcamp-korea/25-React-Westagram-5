/*eslint-disable*/
import React from 'react';
import Feed from './Feed/Feed';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json')
      .then(result => result.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

  render() {
    return (
      <div className="main-seungkyun">
        <main className="bodyContainer">
          <div className="feedContainer">
            {this.state.feedList.map(item => {
              return (
                <Feed
                  key={item.idfeed}
                  username={item.usernamefeed}
                  userImg={item.userImgfeed}
                  feedImg={item.feedImgfeed}
                  content={item.contentfeed}
                  commentData={item.commentData}
                />
              );
            })}
          </div>
          <aside>
            <div className="aboutMeInSide">
              <img
                alt="personalPictureInFeed"
                className="myImageInSide"
                src="./images/seungkyun/IMG_1113.JPG"
              />
              <div className="aboutMeNames">
                <div>
                  <a>seungkyun_y</a>
                  <a>SEUNGKYUN HONG</a>
                </div>
                <button>전환</button>
              </div>
            </div>
            <div className="personalRecommendHeader">
              <span>회원님을 위한 추천</span>
              <a href="#">모두 보기</a>
            </div>
            <div className="personalRecommendMain">
              <img
                alt=""
                className="recommendForYouPic"
                src="./images/seungkyun/IMG_1455.jpeg"
              />
              <div className="personalRecommendID">
                <div>
                  <a>seungkyun_y</a>
                  <span>회원님을 팔로우합니다</span>
                </div>
                <button>팔로우</button>
              </div>
            </div>
            <footer>
              <p>
                <a href="#">소개</a>﹒<a href="#">도움말</a>﹒
                <a href="#">홍보 센터</a>﹒<a href="#">API</a>﹒
                <a href="#">채용</a>﹒<a href="#">정보</a>﹒
                <a href="#">개인정보관리방침</a>﹒<a href="#">약관</a>﹒
                <a href="#">위치</a>﹒
                <a href="#">인기계정</a>﹒<a href="#">해시태그</a>﹒
                <a href="#">언어</a>
              </p>
              <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
            </footer>
          </aside>
        </main>
      </div>
    );
  }
}

export default Main;
