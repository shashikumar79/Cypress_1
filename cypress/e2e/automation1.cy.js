
describe('automationdemo', () => {
    
    it('demotool', () => {
        
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.on('uncaught:exception',()=>{

            return false
        });

        cy.contains('Register').click()
        cy.get('[type="text"]').first().type('shashi')
        cy.get('[placeholder="Last Name"]').type('kumar')
        cy.get('[ng-model="Adress"]').type('mycity')
        cy.get('[type="email"]').type('shashks705@gmail.com')
        cy.get('[ng-model="Phone"]').type('8310603996')
        cy.get('[ng-model="radiovalue"][value="Male"]').check()
        cy.get('#checkbox1').check(["Cricket","Movies"])
        cy.get('[id="Skills"]').select('Android')
        // cy.pause()
        // cy.get('[class="select2-selection__rendered"]').click()
        cy.get('.select2-selection').click()
        // cy.pause()
        // cy.get('[type="search"]').type('India{enter}')
        cy.get('[class="select2-results"] ul li').contains('Denmark').click()
        cy.get('[placeholder="Year"]').select('1918')
        cy.get('[placeholder="Month"]').select('March')


    })
})