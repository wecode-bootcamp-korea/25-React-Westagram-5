import React from 'react';
import Feed from './Feed';

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feed.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ feeds: data });
      });
  }

  render() {
    const { feeds } = this.state;
    return (
      <div className="feeds">
        {feeds.map(feeds => (
          <Feed key={feeds.id} img={feeds.img} text={feeds.text} />
        ))}
      </div>
    );
  }
}

export default Feeds;
