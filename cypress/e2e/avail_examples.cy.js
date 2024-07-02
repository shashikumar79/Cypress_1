describe('add element', () => {

    it('add element', () => {


        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Add/Remove Elements').click()
        cy.wait(6000)
        cy.url().should('eq','https://the-internet.herokuapp.com/add_remove_elements/')
        cy.title().should('eq','The Internet')
        cy.contains('Add/Remove Elements').should('be.visible')
        cy.get('[onclick="addElement()"]').click()
        cy.wait(6000)
        cy.get('[class="added-manually"]').click()
        cy.wait(6000)
        

    })
    it.only('challenging dom', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Challenging DOM').click()
    cy.get('tbody>tr:nth-child(6)>td:nth-child(4)').should('be.visible')

    cy.get('tbody>tr:nth-child(6)>td:nth-child(4)').invoke('text').then((value)=>{
        expect(value).to.equals('Definiebas5')

        cy.log(value)
    })


    })

})