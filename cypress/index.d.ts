declare namespace Cypress {
  interface Chainable<Subject> {
    getBySel(value: string): Chainable<Subject>;
    getBySelLike(value: string): Chainable<Subject>;
  }
}
