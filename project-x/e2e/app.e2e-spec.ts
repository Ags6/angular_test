import { NdisArPage } from './app.po';

describe('ndis-ar App', () => {
  let page: NdisArPage;

  beforeEach(() => {
    page = new NdisArPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
