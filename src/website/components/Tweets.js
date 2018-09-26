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
  fetchUserTweet = () => {
    const { url } = this.props;
    fetchData(url, 'GET').then((res) => {
      if (res) {
        this.setState({
          tweets: res,
        });
      }
    });
  }
  componentDidMount() {
    this.fetchUserTweet();
  }
  componentDidUpdate(prevProps) {
    if (this.props.userName !== prevProps.userName) {
      this.fetchUserTweet();
    }
  }
  generateTweets() {
    const { showThread, setThreadId } = this.props;
    const { tweets } = this.state;
    let myTweets = [];
    for(let i = 0; i < tweets.length; i++){
      myTweets.push(
        <Tweet showThread={ showThread } setThreadId={setThreadId}
          key={i}
          tweet={ tweets[i] }
        />
      );
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