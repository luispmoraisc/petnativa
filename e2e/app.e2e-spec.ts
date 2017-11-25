import { PetNativaPage } from './app.po';

describe('pet-nativa App', () => {
  let page: PetNativaPage;

  beforeEach(() => {
    page = new PetNativaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
