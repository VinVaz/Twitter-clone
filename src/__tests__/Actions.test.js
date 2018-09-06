import * as actions from '../website/actions/index';

const testingText = 'forhxiehrpkj';

describe('Test action creators', () => {
  it('createTweet should return an action containing some text', () => {
    const text = testingText;
    const expectedAction = {
      text,
      type: actions.CREATE_TWEET,
    };
    expect(actions.createTweet(text)).toEqual(expectedAction);
  });

  it('searchTwitter should return an action containing some text', () => {
    const text = testingText;
    const expectedAction = {
      name,
      type: actions.SEARCH_TWITTER,
    };
    expect(actions.searchTwitter(name)).toEqual(expectedAction);
  });
});
