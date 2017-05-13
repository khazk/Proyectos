import { PrjPruebaPage } from './app.po';

describe('prj-prueba App', () => {
  let page: PrjPruebaPage;

  beforeEach(() => {
    page = new PrjPruebaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
