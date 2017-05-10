import { ZmagsTestPage } from './app.po';

describe('zmags-test App', () => {
  let page: ZmagsTestPage;

  beforeEach(() => {
    page = new ZmagsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
