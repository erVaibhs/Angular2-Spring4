import { AccedovideoproductPage } from './app.po';

describe('accedovideoproduct App', function() {
  let page: AccedovideoproductPage;

  beforeEach(() => {
    page = new AccedovideoproductPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
