import React from 'react';
import '../Main/Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div>
        <header className="headerContainer">
          <div className="headerContents">
            <div className="westagramTag">
              <a href=" ">
                <i class="fab fa-instagram"></i> | Westagram
              </a>
            </div>
            <div className="headerSearchBar">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="검색" />
            </div>
            <nav className="headerRightImage">
              <a href=" ">
                <i class="far fa-compass" />
              </a>
              <a href=" ">
                <i class="far fa-heart" />
              </a>
              <a href=" ">
                <i class="fas fa-user" />
              </a>
            </nav>
          </div>
        </header>
        <div className="body1">
          <article>
            <div className="feedHeader">
              <img
                src="./images/kyunghoon/hi1.png"
                width="32px"
                height="32px"
              />
              <span>hoonstagram</span>
              <a href="">
                <i class="fas fa-ellipsis-h"></i>
              </a>
            </div>
            <div className="feedImage">
              <img
                src="./images/kyunghoon/hi2.JPG"
                width="614px"
                height="614px"
              />
            </div>
            <div className="feedReactionButton">
              <div className="reactionButton1">
                <button>
                  <i class="far fa-heart"></i>
                </button>
                <button>
                  <i class="far fa-comment"></i>
                </button>
                <button>
                  <i class="fas fa-share-square"></i>
                </button>
              </div>
              <div className="reactionButton2">
                <button>
                  <i class="far fa-bookmark"></i>
                </button>
              </div>
            </div>
            <div className="feedReaction">
              <div className="ReactionImage">
                <img
                  src="./images/kyunghoon/hi1.png"
                  width="32px"
                  height="32px"
                />
                <span>messi_messi100, hm_son7님 외 4명이 좋아합니다.</span>
              </div>
              <div className="reactionSentence">
                <div className="surfSentence">
                  <span>hoonstagram</span>
                  <p>서핑 가즈아~~~...</p>
                </div>
                <div className="moreView">
                  <a href="">더보기</a>
                </div>
              </div>
              <div id="friendsSentence">
                <ul id="comments">
                  <li>
                    <span>hm_son70</span>
                    <span>거봐 좋았잖아 ~~~😎</span>
                  </li>
                </ul>
                <div className="time">
                  <p>42분전</p>
                </div>
              </div>
              <div className="feedCommentContainer">
                <input
                  id="feedComment"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button id="submitbtn">게시</button>
              </div>
            </div>
          </article>
          <div>
            <aside className="asidenim" />
            <div className="asideHead">
              <img
                src="./images/kyunghoon/hi1.png"
                width="56px"
                height="56px"
              />
              <div className="asideHeadText">
                <p>hoonstagram</p>
                <p>hoonstagram | 훈스타그램</p>
              </div>
            </div>
            <div className="asideBody">
              <div className="asideBodyStory">
                <span>스토리</span>
                <p>모두보기</p>
              </div>
              <div className="asideBodyImgId">
                <div className="asidehi">
                  <img
                    src="./images/kyunghoon/hi3.jpg"
                    width="32px"
                    height="32px"
                  />
                  <div className="asidehi2">
                    <span>messi_messi100</span>
                    <p>16분전</p>
                  </div>
                </div>
                <div className="asidehi">
                  <img
                    src="./images/kyunghoon/hi4.jpg"
                    width="32px"
                    height="32px"
                  />
                  <div className="asidehi2">
                    <span>hm_son70</span>
                    <p>45분전</p>
                  </div>
                </div>
                <div className="asidehi">
                  <img
                    src="./images/kyunghoon/hi5.jpg"
                    width="32px"
                    height="32px"
                  />
                  <div className="asidehi2">
                    <span>stephncurry300</span>
                    <p>1시간 전</p>
                  </div>
                </div>
                <div className="asidehi">
                  <img
                    src="./images/kyunghoon/hi6.jpg"
                    width="32px"
                    height="32px"
                  />
                  <div className="asidehi2">
                    <span>MLB_Korea_Official1</span>
                    <p>3시간 전</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="asideTails">
              <div className="asideTailsRecommend">
                <span>회원님을 위한 추천</span>
                <p>모두 보기</p>
              </div>
              <div className="asideTailsRecommend1">
                <img
                  src="./images/kyunghoon/hi7.jpg"
                  width="32px"
                  height="32px"
                />
                <div className="asideTailsRecommend2">
                  <span>King_James</span>
                  <p>전 세계인이 팔로우 하고있습니다.</p>
                </div>
              </div>
              <div className="asideTailsRecommend1">
                <img
                  src="./images/kyunghoon/hi8.jpg"
                  width="32px"
                  height="32px"
                />
                <div className="asideTailsRecommend2">
                  <span>Trash_C.Ronaldo</span>
                  <p>대한민국이 언팔로우 하고있습니다.</p>
                </div>
              </div>
              <div className="asideTailsRecommend1">
                <img
                  src="./images/kyunghoon/hi9.jpg"
                  width="32px"
                  height="32px"
                />
                <div className="asideTailsRecommend2">
                  <span>I LOVE SPORTS</span>
                  <p>스포츠인들이 팔로우 하고있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
