cy.on('uncaught:exception', () => {

    return false
});
describe('demonobcommerce', () => {

    it('commerce', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.reload()
        cy.contains('Register').click()
        cy.get('#gender-male').check().should('be.checked')
        cy.get('[id="FirstName"]').type('IHFUg')
        cy.get('[id="LastName"]').type('fpgfpi')
        cy.get('[id="Email"]').type('gfPI@gmail.com')
        cy.get('[id="Company"]').type('FOYPYEGFOHJS')
        cy.get('[type="checkbox"]').check()
        cy.get('select[name="DateOfBirthDay"]').select("10")
        cy.get('[name="DateOfBirthMonth"]').select('May')
        cy.get('[name="DateOfBirthYear"]').select('1950')
        cy.go('back')
        cy.get('#customerCurrency').select('US Dollar')
cy.contains('Books ').click().should('be.visible')
cy.get('[id="products-orderby"]').select('Name: A to Z')





    })
})