import { tweet } from '../website/reducers/tweet';
import { search } from '../website/reducers/search';
import { view } from '../website/reducers/view';
import { interaction } from '../website/reducers/interaction';
import reducers from '../website/reducers/index';
import * as actions from '../website/actions/index';

const tweetInitialState = '';
const searchInitialState = '';
const randomText = 'fowireaspcqowmi';
const randomName = 'fowipywmi';

const interactionInitialState = {
  likeButtonPressed: false,
  replyTweetPressed: false,
  retweetPressed: false,
  followButtonPressed: false,
};
const viewInitialState = {
  tweetsShowing: false,
  followersShowing: false,
  followingShowing: false,
  homePageShowing: false,
  profileBoxShowing: false,
  threadShowing: false,
  newTweetsButtonShowing: false,
  backgroundIsHidden: false,
  createNewTweetIsShowing: false,
};
const reducersInitialState = {
  tweet: tweetInitialState,
  search: searchInitialState,
  interaction: interactionInitialState,
  view: viewInitialState,
};

describe('Test reducers', () => {
  it('tweet reducer should return the initial state', () => {
    expect(tweet(undefined, {})).toEqual(tweetInitialState);
  });
  it('tweet should handle CREATE_TWEET', () => {
    expect(tweet(undefined, {
      type: actions.CREATE_TWEET,
      text: randomText,
    })).toEqual(randomText);
  });
  it('search should return the initial state', () => {
    expect(search(undefined, {})).toEqual(searchInitialState);
  });
  it('search should handle SEARCH_TWITTER', () => {
    expect(search(undefined, {
      type: actions.SEARCH_TWITTER,
      name: randomName,
    })).toEqual(randomName);
  });

  it('view reducer should return the initial state', () => {
    expect(view(undefined, {})).toEqual(viewInitialState);
  });
  it('view reducer should handle SHOW_HOMEPAGE', () => {
    const viewState = {
      ...viewInitialState,
      homePageShowing: true,
    };
    expect(view(undefined, {
      type: actions.SHOW_HOMEPAGE,
    })).toEqual(viewState);
  });
  it('view reducer should handle SHOW_TWEETS', () => {
    const viewState = {
      ...viewInitialState,
      tweetsShowing: true,
    };
    expect(view(undefined, {
      type: actions.SHOW_TWEETS,
    })).toEqual(viewState);
  });
  it('view reducer should handle SHOW_FOLLOWING', () => {
    const viewState = {
      ...viewInitialState,
      followingShowing: true,
    };
    expect(view(undefined, {
      type: actions.SHOW_FOLLOWING,
    })).toEqual(viewState);
  });
  it('view reducer should handle SHOW_FOLLOWERS', () => {
    const viewState = {
      ...viewInitialState,
      followersShowing: true,
    };
    expect(view(undefined, {
      type: actions.SHOW_FOLLOWERS,
    })).toEqual(viewState);
  });
  it('view should handle SHOW_THREAD', () => {
    const combinedState = {
      ...viewInitialState,
      threadShowing: !viewInitialState.threadShowing,
      backgroundIsHidden: !viewInitialState.backgroundIsHidden,
    };
    expect(view(undefined, {
      type: actions.SHOW_THREAD,
    })).toEqual(combinedState);
  });
  it('view should handle SHOW_BACKGROUND', () => {
    const combinedState = {
      ...viewInitialState,
      backgroundIsHidden: false,
      threadShowing: false,
    };
    expect(view(undefined, {
      type: actions.SHOW_BACKGROUND,
    })).toEqual(combinedState);
  });
  it('view should handle HANDLE_NEWTWEETS', () => {
    const combinedState = {
      ...viewInitialState,
      newTweetsButtonShowing: !viewInitialState.newTweetsButtonShowing,
    };
    expect(view(undefined, {
      type: actions.HANDLE_NEWTWEETS,
    })).toEqual(combinedState);
  });
  it('view should handle HANDLE_PROFILEBOX', () => {
    const combinedState = {
      ...viewInitialState,
      profileBoxShowing: !viewInitialState.profileBoxShowing,
    };
    expect(view(undefined, {
      type: actions.HANDLE_PROFILEBOX,
    })).toEqual(combinedState);
  });
  it('view should handle SHOW_CREATENEWTWEET', () => {
    const combinedState = {
      ...viewInitialState,
      createNewTweetIsShowing: !viewInitialState.createNewTweetIsShowing,
    };
    expect(view(undefined, {
      type: actions.SHOW_CREATENEWTWEET,
    })).toEqual(combinedState);
  });
  
  it('interaction reducer should return the initial state', () => {
    expect(interaction(undefined, {})).toEqual(interactionInitialState);
  });
  it('interaction reducer should handle REPLY_TWEET', () => {
    const viewState = {
      ...interactionInitialState,
      replyTweetPressed: !interactionInitialState.replyTweetPressed,
    };
    expect(interaction(undefined, {
      type: actions.REPLY_TWEET,
    })).toEqual(viewState);
  });
  it('interaction reducer should handle RETWEET', () => {
    const viewState = {
      ...interactionInitialState,
      retweetPressed: !interactionInitialState.retweetPressed,
    };
    expect(interaction(undefined, {
      type: actions.RETWEET,
    })).toEqual(viewState);
  });
  it('interaction reducer should handle FOLLOW_SOMEONE', () => {
    const viewState = {
      ...interactionInitialState,
      followButtonPressed: !interactionInitialState.followButtonPressed,
    };
    expect(interaction(undefined, {
      type: actions.FOLLOW_SOMEONE,
    })).toEqual(viewState);
  });
  it('interaction reducer should handle LIKE_TWEET', () => {
    const viewState = {
      ...interactionInitialState,
      likeButtonPressed: !interactionInitialState.likeButtonPressed,
    };
    expect(interaction(undefined, {
      type: actions.LIKE_TWEET,
    })).toEqual(viewState);
  });

  it('reducers should return initial state', () => {
    expect(reducers(undefined, {})).toEqual(reducersInitialState);
  });
  it('reducers should handle SEARCH_TWITTER', () => {
    const combinedState = {
      ...reducersInitialState,
      search: randomName,
    };
    expect(reducers(undefined, {
      type: actions.SEARCH_TWITTER,
      name: randomName,
    })).toEqual(combinedState);
  });
});
