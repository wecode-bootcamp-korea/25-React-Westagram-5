import React from 'react';

class Comment extends React.Component {
  render() {
    const { id, innerText } = this.props;
    return <li key={id}>{innerText}</li>;
  }
}

export default Comment;
