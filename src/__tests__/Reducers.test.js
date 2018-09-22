import { tweet } from '../website/reducers/tweet';
import { search } from '../website/reducers/search';
import { mainPages } from '../website/reducers/mainPages';
import { loggedPage } from '../website/reducers/loggedPage';
import { getUsers } from '../website/reducers/getUsers';
import { interaction } from '../website/reducers/interaction';
import view from '../website/reducers/view';
import reducers from '../website/reducers/index';
import * as actions from '../website/actions/index';

const tweetInitialState = '';
const searchInitialState = '';
const randomText = 'fowireaspcqowmi';
const randomName = 'fowipywmi';
/*
const mainPagesToTrue =  {
  loginPageShowing: true,
  unloggedPageShowing: true,
  tweetsShowing: true,
  followingShowing: true,
  followersShowing: true,
  homePageShowing: true,
  profileBoxShowing: true,
  loggedPagesShowing: true,
};
*/
const mainPagesInitialState = {
  loginPageShowing: false,
  unloggedPageShowing: false,
  loggedPagesShowing: false,
};
const loggedPageInitialState = {
  profileBoxShowing: false,
  threadShowing: false,
  newTweetsButtonShowing: false,
  backgroundIsHidden: false,
  createNewTweetIsShowing: false,
};
const getUsersInitialState = {
  tweetsShowing: false,
  followingShowing: false,
  followersShowing: false,
  homePageShowing: false,
};
const viewInitialState = {
  mainPages: mainPagesInitialState,
  loggedPage: loggedPageInitialState,
  getUsers: getUsersInitialState,
};
const interactionInitialState = {
  likeButtonPressed: false,
  replyTweetPressed: false,
  retweetPressed: false,
  followButtonPressed: false,
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
  /*
  it('SHOW_HOMEPAGE should shut down the other main pages', () => {
    const combinedState = {
      ...viewInitialState,
      homePageShowing: true,
    };
    const initialStage = {
      ...viewInitialState,
      ...mainPagesToTrue,
    }
    expect(view(initialStage, {
      type: actions.SHOW_HOMEPAGE,
    })).toEqual(combinedState);
  });
  */
  it('mainPages reducer should start with unloggedPageShowing:true', () => {
    const combinedState = {
      ...mainPagesInitialState,
      unloggedPageShowing: true,
    };
    expect(mainPages(undefined, {})).toEqual(combinedState);
  });
  it('mainPages reducer should handle SHOW_UNLOGGED_PAGE', () => {
    const combinedState = {
      ...mainPagesInitialState,
      unloggedPageShowing: true,
    };
    expect(mainPages(undefined, {
      type: actions.SHOW_UNLOGGED_PAGE,
    })).toEqual(combinedState);
  });
  it('mainPages reducer should handle SHOW_LOGIN_PAGE', () => {
    const combinedState = {
      ...mainPagesInitialState,
      loginPageShowing: true,
    };
    expect(mainPages(undefined, {
      type: actions.SHOW_LOGIN_PAGE,
    })).toEqual(combinedState);
  });
  it('mainPages reducer should handle SHOW_LOGGED_PAGES', () => {
    const combinedState = {
      ...mainPagesInitialState,
      loggedPagesShowing: true,
    };
    expect(mainPages(undefined, {
      type: actions.SHOW_LOGGED_PAGES,
    })).toEqual(combinedState);
  });
  it('getUsers reducer should start with homePageShowing:true', () => {
    const combinedState = {
      ...getUsersInitialState,
      homePageShowing: true,
    };
    expect(getUsers(undefined, {})).toEqual(combinedState);
  });
  it('getUsers reducer should handle SHOW_TWEETS', () => {
    const combinedState = {
      ...getUsersInitialState,
      tweetsShowing: true,
    };
    expect(getUsers(undefined, {
      type: actions.SHOW_TWEETS,
    })).toEqual(combinedState);
  });
  it('getUsers reducer should handle SHOW_FOLLOWING', () => {
    const combinedState = {
      ...getUsersInitialState,
      followingShowing: true,
    };
    expect(getUsers(undefined, {
      type: actions.SHOW_FOLLOWING,
    })).toEqual(combinedState);
  });
  it('getUsers reducer should handle SHOW_FOLLOWERS', () => {
    const combinedState = {
      ...getUsersInitialState,
      followersShowing: true,
    };
    expect(getUsers(undefined, {
      type: actions.SHOW_FOLLOWERS,
    })).toEqual(combinedState);
  });
  it('loggedPage should handle SHOW_THREAD', () => {
    const combinedState = {
      ...loggedPageInitialState,
      threadShowing: !loggedPageInitialState.threadShowing,
      backgroundIsHidden: !loggedPageInitialState.backgroundIsHidden,
    };
    expect(loggedPage(undefined, {
      type: actions.SHOW_THREAD,
    })).toEqual(combinedState);
  });
   it('loggedPage reducer should handle SHOW_HOMEPAGE', () => {
    const combinedState = {
      ...loggedPageInitialState,
      homePageShowing: true,
    };
    expect(loggedPage(undefined, {
      type: actions.SHOW_HOMEPAGE,
    })).toEqual(combinedState);
  });
  it('loggedPage should handle SHOW_BACKGROUND', () => {
    const combinedState = {
      ...loggedPageInitialState,
      backgroundIsHidden: false,
      threadShowing: false,
    };
    expect(loggedPage(undefined, {
      type: actions.SHOW_BACKGROUND,
    })).toEqual(combinedState);
  });
  it('loggedPage should handle HANDLE_NEWTWEETS', () => {
    const combinedState = {
      ...loggedPageInitialState,
      newTweetsButtonShowing: !loggedPageInitialState.newTweetsButtonShowing,
    };
    expect(loggedPage(undefined, {
      type: actions.HANDLE_NEWTWEETS,
    })).toEqual(combinedState);
  });
  it('loggedPage should handle HANDLE_PROFILEBOX', () => {
    const combinedState = {
      ...loggedPageInitialState,
      profileBoxShowing: !loggedPageInitialState.profileBoxShowing,
    };
    expect(loggedPage(undefined, {
      type: actions.HANDLE_PROFILEBOX,
    })).toEqual(combinedState);
  });
  it('loggedPage should handle SHOW_CREATENEWTWEET', () => {
    const combinedState = {
      ...loggedPageInitialState,
      createNewTweetIsShowing: !loggedPageInitialState.createNewTweetIsShowing,
      backgroundIsHidden: !loggedPageInitialState.backgroundIsHidden,
    };
    expect(loggedPage(undefined, {
      type: actions.SHOW_CREATENEWTWEET,
    })).toEqual(combinedState);
  });
  
  it('interaction reducer should return the initial state', () => {
    expect(interaction(undefined, {})).toEqual(interactionInitialState);
  });
  it('interaction reducer should handle REPLY_TWEET', () => {
    const combinedState = {
      ...interactionInitialState,
      replyTweetPressed: !interactionInitialState.replyTweetPressed,
    };
    expect(interaction(undefined, {
      type: actions.REPLY_TWEET,
    })).toEqual(combinedState);
  });
  it('interaction reducer should handle RETWEET', () => {
    const combinedState = {
      ...interactionInitialState,
      retweetPressed: !interactionInitialState.retweetPressed,
    };
    expect(interaction(undefined, {
      type: actions.RETWEET,
    })).toEqual(combinedState);
  });
  it('interaction reducer should handle FOLLOW_SOMEONE', () => {
    const combinedState = {
      ...interactionInitialState,
      followButtonPressed: !interactionInitialState.followButtonPressed,
    };
    expect(interaction(undefined, {
      type: actions.FOLLOW_SOMEONE,
    })).toEqual(combinedState);
  });
  it('interaction reducer should handle LIKE_TWEET', () => {
    const combinedState = {
      ...interactionInitialState,
      likeButtonPressed: !interactionInitialState.likeButtonPressed,
    };
    expect(interaction(undefined, {
      type: actions.LIKE_TWEET,
    })).toEqual(combinedState);
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
