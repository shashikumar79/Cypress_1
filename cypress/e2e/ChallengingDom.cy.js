describe('challenging dom elements', () => {

    it('challenging dom element values', () => {
        
        
        cy.visit('https://www.amazon.in/gp/aw/c')

        cy.get('#nav-xshop-container').then((tess) => {

            var txt = tess.text()
            cy.log(txt)
        })

    })

it('text print',()=>{



        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains("Challenging DOM").click()
        cy.get('tbody>tr:nth-child(6)>td:nth-child(4)').then((test) => {
             var txt = test.text()
           // cy.log(typeof(test))
           cy.log(txt)
            // printed this text ('Definiebas5') from table
    })
    })
})
