describe("Testes da criação, resgistro e login", ()=>{
  it("Teste criação de usuario com sucesso", ()=>{
  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type("Vitinho")
  cy.get('#Text1').type("Vitinho")
  cy.get('#username').type("Vitinho")
  cy.get('#password').type("Vitinho")
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should("contain.text", "Registration successful")
  })
  
  it("Teste criação de usuario com falha", ()=>{
  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type("Vitinho")
  cy.get('#Text1').type("Vitinho")
  cy.get('#username').type("Vitinho")
  cy.get('.btn-primary').should("be.disabled")
  })

  it("Teste de login com sucesso", () => {
    let infos = criarUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get("#username").type(infos[0])
    cy.get("#password").type(infos[0])
  })

  function criarUser() {
      console.log('deu bom')
      let hora = new Date().getHours().toString()
      let minuto = new Date().getMinutes().toString()
      let seg = new Date().getSeconds().toString()
      let ID = hora + minuto + seg + "ID"
      let Senha = hora + minuto + seg + "Senha"
      let infos = [ID, Senha]

      console.log('deu bom')
      
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
      cy.get('.btn-link').click()
      cy.get('#firstName').type(ID)
      cy.get('#Text1').type(ID)
      cy.get('#username').type(ID)
      cy.get('#password'). type(Senha)
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should("contain.text", "Registration successful")
      return infos
  }

  it("Teste de delete", () => {
    let infos = criarUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get("#username").type(infos[0])
    cy.get("#password").type(infos[0])
    cy.get('.ng-binding > a').click()
    cy.get('div.ng-scope > :nth-child(5)').should("contain.text", "")
    cy.get('.btn').click()
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', "Username or password is incorrect")
})
})
  
