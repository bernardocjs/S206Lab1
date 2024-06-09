describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  });

  const login = () => {
    cy.get('.borderM > :nth-child(1) > .btn').click();
    cy.get('label').should('contain','Your Name :');
    cy.get('#userSelect').select('Hermoine Granger').should('have.value', '1');
    cy.get('#userSelect').should('contain','Hermoine Granger');
    cy.get('form.ng-valid > .btn').click();
    cy.get('.fontBig').should('contain','Hermoine Granger');
  };

  it('should access the login page', () => {
    cy.get('.mainHeading').should('contain','XYZ Bank');
  });

  it('should login', () => {
    login();
  });

  it('should make a deposit', () => {
    login();
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('label').should('contain','Amount to be Deposited :')
    cy.get('.form-control').type('11111')
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('contain', 'Deposit Successful');
  })

  it('should make a withdrawal', () => {
    login();
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('label').should('contain','Amount to be Withdrawn :')
    cy.get('.form-control').type('1')
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('contain', 'Transaction successful');
  })

  it('should fail a withdrawal', () => {
    login();
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('label').should('contain','Amount to be Withdrawn :')
    cy.get('.form-control').type('9999999')
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('contain', 'Transaction Failed. You can not withdraw amount more than the balance.');
  })

  it('should see transactions', () => {
    login();
    cy.get('[ng-class="btnClass1"]').click()
    cy.get('.table').should('have.length', 1)
  })
});