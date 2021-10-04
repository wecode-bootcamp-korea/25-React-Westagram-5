import React from 'react';
import Footer from './Footer/Footer';
import Suggestions from './Suggestions/Suggestions';
import './Aside.scss';

class Aside extends React.Component {
  constructor() {
    super();
    this.state = {
      contents: [],
    };
  }

  componentDidMount() {
    fetch('/data/suggestionData.json')
      .then(result => result.json())
      .then(data => {
        this.setState({
          contents: data,
        });
      });
  }

  render() {
    return (
      <aside className="aside_seungkyun">
        <div className="login_user">
          <img
            alt="personalPictureInFeed"
            src="./images/seungkyun/IMG_1113.JPG"
          />
          <div className="user_info">
            <div>
              <a>seungkyun_y</a>
              <a>SEUNGKYUN HONG</a>
            </div>
            <button>전환</button>
          </div>
        </div>
        <Suggestions contents={this.state.contents} />
        <Footer />
      </aside>
    );
  }
}
export default Aside;
