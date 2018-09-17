import React, { Component } from 'react';
import Tweet from './Tweet';
import fetchData from '../common/fetchData';

const ContainerStyle = {
  backgroundColor: '#ababab',
  width: '100%',
};
class Tweets extends Component {
  state = {
    tweets : '',
  }
  componentDidMount() {
    fetchData('/api/user', 'GET').then((res) => {
      if (res) {
        this.setState({
          tweets: res.tweets,
        });
      }
    });
  }
  generateTweets() {
    const { showThread } = this.props;
    const { tweets } = this.state;
    let myTweets = [];
    for(let i = 0; i < tweets.length; i++){
      myTweets.push(<Tweet showThread={ showThread }
                           key={tweets[i].id} 
                           tweet={ tweets[i] }
                    />);
    }
    return myTweets;
  }
  render() {
    return (
      <div style={ ContainerStyle }>
        { this.generateTweets() }
      </div>
    );
  }
}

export default Tweets;