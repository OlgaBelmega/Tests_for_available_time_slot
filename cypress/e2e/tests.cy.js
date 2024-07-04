

describe('Book Appointment check', () => {
  it('check that user can select first free time in the list', () => {
   cy.visit('https://actionurgentcare.com/');
   cy.title().should('include', 'Action Urgent Care');
   cy.contains('a', 'In-Clinic Care').invoke("show");
    //cy.get('.dropdown-menu').should('be.visible');
    // cy.get('.dropdown-menu > [href="/clinics/blossom-hill"]').click();
   cy.visit('https://actionurgentcare.com/clinics/blossom-hill/');
   cy.contains('San Jose - Blossom Hill Rd.').should('be.visible');
   cy.get('.jss74 > :nth-child(1) > :nth-child(1)').click();
   cy.get('.jss74 > :nth-child(1) > :nth-child(1)').should('have.class', 'active');
   cy.get('button#select-button').should('not.have.attr', 'disabled');
   cy.contains('button', 'Select').should('be.visible').should('not.have.attr', 'disabled');
  });

  it('check that "Select" button is inactive without choosing available time', () => {
  cy.visit('https://actionurgentcare.com/clinics/blossom-hill/');
  cy.contains('San Jose - Blossom Hill Rd.').should('be.visible');
  cy.contains('button', 'Select').should('be.visible').should('have.attr', 'disabled');
    });
    
    it.only('check that user can choose next free time slot', () => {
      cy.visit('https://actionurgentcare.com/clinics/meridian');
      cy.wait(2000);
      cy.contains('San Jose - Blossom Hill Rd.').should('be.visible');
      cy.get('.jss86 > .MuiButtonBase-root').click();
      cy.contains('button', 'Previous').should('be.visible');
    });

});
