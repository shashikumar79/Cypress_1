describe('flip',()=>{

    it('flip',()=>{


cy.visit(Cypress.env('baseUrl'))
cy.get('[class="_3sdu8W emupdz"]').each(($element, index, $list) => {
    cy.wrap($element).invoke('text').then((text) => {
        cy.log(text)
    })
})


    })

 })