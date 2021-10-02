/*eslint-disable*/
import React from 'react';

class AddComment extends React.Component {
  render() {
    const { commentList } = this.props;

    return (
      <>
        {commentList.map((comment, i) => {
          return (
            <div className="commentLines" key={i}>
              <div>
                <a href="#">user9999</a>
                <span>{comment}</span>
              </div>
              <img
                alt="heart img"
                className="commentHeart"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default AddComment;
