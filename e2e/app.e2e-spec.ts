import { CimsPage } from './app.po';

describe('cims App', () => {
  let page: CimsPage;

  beforeEach(() => {
    page = new CimsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
