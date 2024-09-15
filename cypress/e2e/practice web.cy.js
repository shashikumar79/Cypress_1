
describe('practice website', () => {

    it('web inputs', () => {
        cy.visit('https://practice.expandtesting.com/#examples')
        cy.contains('Web inputs').click()
        cy.get('[id="input-number"]').click().type('1')
        cy.get('[name="input-text"]').type('hi')
        cy.get('[type="password"]').type('123jahf')
        cy.get('[id="btn-display-inputs"]').click()
    })
        it('loginform should log in with environment variables', () => {
            cy.visit(Cypress.env('Url'))
            cy.get('[name="username"]').type(Cypress.env('username'))
            cy.get('[name="password"]').type(Cypress.env('password'))
            cy.get('[type="submit"]').click({force:true})
            cy.contains('Home').click()
        })
it("dynamic table",()=>{

    cy.visit('https://practice.expandtesting.com/')
    cy.get('a[href="/dynamic-table"]').click()
    cy.wait(6000)
    cy.get('tbody>tr:nth-child(2)>td:nth-child(1)').should('be.visible').and('contain','System')
})
        })
