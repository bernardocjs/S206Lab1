describe('steam cenarios', () => {

  it("searching for game fail", ()=> {

    cy.visit("https://store.steampowered.com/?l=portuguese")
    cy.get('#store_nav_search_term').type("sg54a5fg1as5g")
    cy.get('#store_search_link > img').click()
    cy.get('#search_results_filtered_warning_persistent > :nth-child(1)').should("have.text", "0 resultados correspondem à sua busca. Um título foi excluído de acordo com as suas preferências.")
  })

  it("searching for game sucess", ()=> {
      
      cy.visit("https://store.steampowered.com/?l=portuguese")
      cy.get('#store_nav_search_term').type("satisfactory")
      cy.get('#store_search_link > img').click()
      cy.get('.tag_dynamic > .label').should("contain.text", "satisfactory")
  })

  it('age verification fail', () => {
    cy.visit('https://store.steampowered.com')
    cy.get('#store_nav_search_term').type("satisfactory")
    cy.get('#store_search_link > img').click()
    cy.get('[href="https://store.steampowered.com/app/526870/Satisfactory/?snr=1_7_7_151_150_1"] > .search_capsule > img').click()
    cy.get('#view_product_page_btn > span').click()
    cy.get('.newmodal_content > :nth-child(1)').should('contain.text','Insira uma data válida')
  })

  it('age verification sucess', () => {
    cy.visit('https://store.steampowered.com')
    cy.get('#store_nav_search_term').type("satisfactory")
    cy.get('#store_search_link > img').click()
    cy.get('[href="https://store.steampowered.com/app/526870/Satisfactory/?snr=1_7_7_151_150_1"] > .search_capsule > img').click()
    cy.get('#ageYear').select('2000')
    cy.get('#view_product_page_btn > span').click()
    cy.url().should('include', 'https://store.steampowered.com/app/526870/Satisfactory/');
  })

  it("invalid login", ()=> {
    cy.visit('https://help.steampowered.com/pt-br/wizard/Login?redir=%2Fpt-br%2Fwizard%2FHome%3Fgamepad%3D0')
    cy.get(':nth-child(1) > ._2eKVn6g5Yysx9JmutQe7WV').type("$testee$")

    cy.get(':nth-child(2) > ._2eKVn6g5Yysx9JmutQe7WV').type("&testeeeeee&")
    cy.get('._2QgFEj17t677s3x299PNJQ').click()
    cy.get('._1Mcy9wnDnt1Q72FijsNtHC').should('have.text','Verifique a sua senha e nome de usuário e tente novamente.')
  })

  it("adding to cart", ()=> {

    cy.visit('https://store.steampowered.com')
    cy.get('#store_nav_search_term').type("satisfactory")
    cy.get('#store_search_link > img').click()
    cy.get('[href="https://store.steampowered.com/app/526870/Satisfactory/?snr=1_7_7_151_150_1"] > .search_capsule > img').click()
    cy.get('#ageYear').select('2000')
    cy.get('#view_product_page_btn > span').click()
    cy.get('#btn_add_to_cart_126218 > span').click()
    cy.get('.bCGAC51za6R_thjPd7_vw').should("contain.text", "Adicionado ao carrinho!")
  })

  it("changing language", ()=> {

    cy.visit("https://store.steampowered.com/")
    cy.get('#language_pulldown').click()
    cy.get('[href="?l=french"]').click()
    cy.get('.home_cluster_ctn > .home_page_content > .home_page_content_title').should("contain.text", "Populaires et recommandés")
  })


})