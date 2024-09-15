describe('challenging dom elements', () => {

    it('challenging dom element values', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains("Challenging DOM").click()
        cy.get('tbody>tr:nth-child(6)>td:nth-child(4)').then((test) => {
            var text = test.text()
            cy.log(text)
            // printed this text ('Definiebas5') from table

        })
    })
})
