import moment from 'moment'
describe('practice', () => {

    it('web', () => {


        cy.visit('https://practice.expandtesting.com/#examples')
        cy.contains('Web inputs').click()
        cy.get('[id="input-number"]').click().type('1')
        cy.get('[name="input-text"]').type('hi')
        cy.get('[type="password"]').type('123jahf')
        cy.get('[id="btn-display-inputs"]').click()
       

        
        


    })
})