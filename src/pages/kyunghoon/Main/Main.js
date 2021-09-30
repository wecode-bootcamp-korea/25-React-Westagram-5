import React from 'react';
import CommentList from '../Comment/CommentList';
import '../Main/Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentList: [],
    };
  }

  writeComment = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  addComment = () => {
    this.setState({
      commentList: this.state.commentList.concat(this.state.comment),
      comment: '',
    });
  };

  enterKey = e => {
    if (e.key === 'Enter') {
      this.addComment();
    }
  };

  render() {
    return (
      <div>
        <header className="headerContainer">
          <div className="headerContents">
            <div className="westagramTag">
              <a href=" ">
                <i className="fab fa-instagram"></i> | Westagram
              </a>
            </div>
            <div className="headerSearchBar">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="검색" />
            </div>
            <nav className="headerRightImage">
              <a href=" ">
                <i className="far fa-compass" />
              </a>
              <a href=" ">
                <i className="far fa-heart" />
              </a>
              <a href=" ">
                <i className="fas fa-user" />
              </a>
            </nav>
          </div>
        </header>
        <div className="body1">
          <article>
            <div className="feedHeader">
              <img
                alt=""
                src="./images/kyunghoon/hi1.png"
                width="32px"
                height="32px"
              />
              <span>hoonstagram</span>
              <a href=" ">
                <i className="fas fa-ellipsis-h"></i>
              </a>
            </div>
            <div className="feedImage">
              <img
                alt=""
                src="./images/kyunghoon/hi2.JPG"
                width="614px"
                height="614px"
              />
            </div>
            <div className="feedReactionButton">
              <div className="reactionButton1">
                <button>
                  <i className="far fa-heart"></i>
                </button>
                <button>
                  <i className="far fa-comment"></i>
                </button>
                <button>
                  <i className="fas fa-share-square"></i>
                </button>
              </div>
              <div className="reactionButton2">
                <button>
                  <i className="far fa-bookmark"></i>
                </button>
              </div>
            </div>
            <div className="feedReaction">
              <div className="ReactionImage">
                <img
                  alt=""
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
                  <a href=" ">더보기</a>
                </div>
              </div>
              <div className="time">
                <p>42분전</p>
              </div>
              <div id="friendsSentence">
                <ul id="comments">
                  <li>
                    <span>hm_son70</span>
                    <span>거봐 좋았잖아 ~~~😎</span>
                  </li>
                </ul>
                <CommentList />
              </div>
            </div>
            <ul className="comment_Lists">
              {this.state.commentList.map(comment => {
                return (
                  <li className="comment_box">
                    <span className="comment_id">hoonstagram {comment}</span>
                  </li>
                );
              })}
            </ul>
            <div className="feedCommentContainer">
              <input
                className="feedComment"
                type="text"
                value={this.state.comment}
                placeholder="댓글 달기..."
                onChange={this.writeComment}
                onKeyPress={this.enterKey}
              />
              <button className="submitbtn" onClick={this.addComment}>
                게시
              </button>
            </div>
          </article>
          <div>
            <aside className="asidenim" />
            <div className="asideHead">
              <img
                alt=""
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
                    alt=""
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
                    alt=""
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
                    alt=""
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
                    alt=""
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
                  alt=""
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
                  alt=""
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
                  alt=""
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
