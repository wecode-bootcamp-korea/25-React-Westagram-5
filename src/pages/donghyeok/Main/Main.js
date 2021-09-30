import React from 'react';
import MainFeed from './MainFeed';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div>
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
        <main>
          <div className="feed">
            <MainFeed />
          </div>
          <div className="main_right">
            <div className="main_right_top">
              <img
                alt="profile icon"
                id="profile"
                src="images/donghyeok/profile.png"
              />
              <div className="main_right_profile">
                <span className="main_right_profile_name">wecode_bootcamp</span>
                <span className="main_right_profile_place">
                  Wecode | 위코드
                </span>
              </div>
            </div>
            <div className="main_right_center">
              <div className="main_right_center_top">
                <span id="story">스토리</span>
                <span className="add">모두 보기</span>
              </div>
              <div className="main_right_center_profile">
                <div className="main_right_center_profile1">
                  <img
                    alt="profile icon"
                    id="profile"
                    src="images/donghyeok/profile.png"
                  />
                  <span className="main_right_center_profile_id">_yum_s</span>
                </div>
                <div className="main_right_center_profile2">
                  <img
                    alt="profile icon"
                    id="profile"
                    src="images/donghyeok/profile.png"
                  />
                  <span className="main_right_center_profile_id">
                    drink_eat
                  </span>
                </div>
                <div className="main_right_center_profile3">
                  <img
                    alt="profile icon"
                    id="profile"
                    src="images/donghyeok/profile.png"
                  />
                  <span className="main_right_center_profile_id">hyukyc</span>
                </div>
              </div>
            </div>
            <div className="main_right_bottom">
              <div className="main_right_bottom_top">
                <span>회원님을 위한 추천</span>
                <span className="add">모두 보기</span>
              </div>
              <div className="main_right_centr_profile">
                <div className="main_right_bottom_profile1">
                  <img
                    alt="profile icon"
                    id="profile"
                    src="images/donghyeok/profile.png"
                  />
                  <span className="main_right_bottom_profile_id">_yum_s</span>
                  <span className="follow">팔로우</span>
                </div>
                <div className="main_right_bottom_profile2">
                  <img
                    alt="profile icon"
                    id="profile"
                    src="images/donghyeok/profile.png"
                  />
                  <span className="main_right_bottom_profile_id">drink_e</span>
                  <span className="follow">팔로우</span>
                </div>
                <div className="main_right_bottom_profile3">
                  <img
                    alt="profile icon"
                    id="profile"
                    src="images/donghyeok/profile.png"
                  />
                  <span className="main_right_bottom_profile_id">hyukyc</span>
                  <span className="follow">팔로우</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
