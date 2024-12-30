describe('shadowdom', () => {

    it('shadowroot', () => {

        cy.visit('https://practice.expandtesting.com/shadowdom')

        cy.get('#shadow-host').shadow().find('button[type="button"]').click().should('be.visible')

        cy.writeFile('cypress/fixtures/shashi.text', 'nagesh')
        cy.writeFile('cypress/fixtures/shashi.text', 'dfgdhfjhfgdmh', { flag: 'a+' })
    })

    it('scrolloption', () => {
        cy.on('uncaught:exception', () => {

            return false
        })

        cy.visit('https://github.com/abramenal/cypress-file-upload')
        cy.get('span[class="d-inline"]').eq(0).trigger('mouseover')
        cy.wait(3000)
        cy.contains('I want to contribute').scrollIntoView()
        cy.contains('Discussions').dblclick({ force: true })
        cy.reload()


    })
})
