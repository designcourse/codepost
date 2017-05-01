import { CodepostPage } from './app.po';

describe('codepost App', () => {
  let page: CodepostPage;

  beforeEach(() => {
    page = new CodepostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
