
describe('automation exercise practice',()=>{
    it('automationexercise e commerce',()=>{

        // buttons
        // textFields
        // checkbox
        // radiobox
        // alerts
        // iframes
        // Tabss
        // mouseevents
        // draganddrop
        // shadowElement
        // links
        // tablesss
        // customcommand
        // fileupload
        // filedowload
        // readfile
        // writefiless
        // sessionn

cy.visit('https://automationexercise.com/')
cy.get('[class="title text-center"]').first().scrollIntoView()
cy.contains('Add to cart').click()
cy.contains('View Cart').click()
cy.contains('Blue Top').should('be.visible').and('contain','Blue Top')
cy.contains('Home').click()
cy.contains('Men Tshirt').scrollIntoView()
cy.contains('View Product').click()
cy.get('[alt="ecommerce website products"]').first().should('be.visible')
cy.contains('Rs. 500').should('contain','Rs. 500')
cy.url().should('eq','https://automationexercise.com/product_details/1')


    })

})