
import data from '../fixtures/buzzdata.json'


 
describe('practice', () => {

    it('practicceee', () => {
        // cy.fixture('fixtures/buzzdata.json').then((data) => {
   
        //     this.data=data
        
        // })
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz')
        cy.get('[name="username"]').type(data.username)
        cy.get('[name="password"]').type(data.password)
        cy.contains(' Login ').click()
        cy.contains('Buzz').click()
        cy.get('[class="oxd-buzz-post-input"]').type(data.postcreate)
        cy.get('[type="submit"]').click()
        cy.contains("Successfully Saved").should('be.visible')
        cy.get('li[class="oxd-main-menu-item-wrapper"]').each((realtext)=>{
            var orgtext=realtext.text()
            cy.log(orgtext)
            cy.writeFile('C:/Users/USER/Documents/Cypress_1/cypress/fixtures/buzzdata222.json',{orgtext},{ flag: 'a+' })
       
        })
    })
})
