/*eslint-disable*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackspace,
  faHeart as fasheart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

class AddComment extends React.Component {
  render() {
    const { id, content, isLiked, deleteComment, toggleLikeBtn } = this.props;
    return (
      <div className="commentLines" id={id}>
        <div>
          <a href="#">user9999</a>
          <span>{content}</span>
        </div>
        <div className="buttons">
          <button className="delete_button" onClick={() => deleteComment(id)}>
            <FontAwesomeIcon className="far fa-backspace" icon={faBackspace} />
          </button>
          <button className="like_button" onClick={() => toggleLikeBtn(id)}>
            <FontAwesomeIcon
              className={isLiked ? 'fas fa-heart' : 'disabled'}
              icon={isLiked ? fasheart : farHeart}
            />
          </button>
        </div>
      </div>
    );
  }
}

export default AddComment;
