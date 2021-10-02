import React from 'react';
import MainFeed from './MainFeed';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        {/* <nav>
          <div className="header">
            <div className="nav-left">
              <img
                alt="instagram icon"
                id="instagram"
                src="./images/instagram-brands.svg"
              />
              <h2>westagram</h2>
            </div>
            <div className="nav-center">
              <input type="text" id="search" placeholder="검색" />
              <span className="search">
                <i alt="search" className="fas fa-search"></i>
              </span>
            </div>
            <div className="nav-right">
              <img
                alt="explore icon"
                id="explore"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
              <img
                alt="heart icon"
                id="heart"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                alt="profile icon"
                id="profile"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
            </div>
          </div>
        </nav> */}
        <main className="main">
          <div className="feed">
            <MainFeed />
          </div>
          <div className="mainRight">
            <div className="mainRightTop">
              <img
                alt="profile icon"
                id="profile"
                src="images/donghyeok/profile.png"
              />
              <div className="mainRightProfile">
                <span className="mainRightProfileName">wecode_bootcamp</span>
                <span className="mainRightProfilePlace">Wecode | 위코드</span>
              </div>
            </div>
            <div className="mainRightCenter">
              <div className="mainRightCenterTop">
                <span id="story">스토리</span>
                <span className="add">모두 보기</span>
              </div>
              <div className="mainRightCenterProfile">
                <div className="mainRightCenterProfile1">
                  <img
                    alt="profile icon"
                    id="profile"
                    src="images/donghyeok/profile.png"
                  />
                  <span className="mainRightCenterProfileId">_yum_s</span>
                </div>
                <div className="mainRightCenterProfile2">
                  <img
                    alt="profile icon"
                    id="profile"
                    src="images/donghyeok/profile.png"
                  />
                  <span className="mainRightCenterProfileId">drink_eat</span>
                </div>
                <div className="mainRightCenterProfile3">
                  <img
                    alt="profile icon"
                    id="profile"
                    src="images/donghyeok/profile.png"
                  />
                  <span className="mainRightCenterProfileId">hyukyc</span>
                </div>
              </div>
            </div>
            <div className="mainRightBottom">
              <div className="mainRightBottomTop">
                <span>회원님을 위한 추천</span>
                <span className="add">모두 보기</span>
              </div>
              <div className="mainRightCentrProfile">
                <div className="mainRightBottomProfile1">
                  <img
                    alt="profile icon"
                    id="profile"
                    src="images/donghyeok/profile.png"
                  />
                  <span className="mainRightBottomProfileId">_yum_s</span>
                  <span className="follow">팔로우</span>
                </div>
                <div className="mainRightBottomProfile2">
                  <img
                    alt="profile icon"
                    id="profile"
                    src="images/donghyeok/profile.png"
                  />
                  <span className="mainRightBottomProfileId">drink_e</span>
                  <span className="follow">팔로우</span>
                </div>
                <div className="mainRightBottomProfile3">
                  <img
                    alt="profile icon"
                    id="profile"
                    src="images/donghyeok/profile.png"
                  />
                  <span className="mainRightBottomProfileId">hyukyc</span>
                  <span className="follow">팔로우</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Main;
