import { TokenAuthUIPage } from './app.po';

describe('token-auth-ui App', function() {
  let page: TokenAuthUIPage;

  beforeEach(() => {
    page = new TokenAuthUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
