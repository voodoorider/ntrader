import { NtraderPage } from './app.po';

describe('ntrader App', () => {
  let page: NtraderPage;

  beforeEach(() => {
    page = new NtraderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
