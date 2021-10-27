import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps';

describe('HOME - Filtering Posts', () => {
  const selectors = {
    searchbar: 'searchbar',
    searchResults: 'search-results'
  };

  Given('that I am on the homepage', () => {
    cy.visit('/');
  });

  And('I enter a post title into the search field', () => {
    cy.getBySel(selectors.searchbar).type('qui est esse');
  });

  Then('I should only see a result for that on particilar post', () => {
    cy.getBySel(selectors.searchResults)
      .find('div')
      .should('be.visible')
      .and('have.length', 1);
  });
});
