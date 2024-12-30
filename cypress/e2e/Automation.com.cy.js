//    //span[contains(.,"Registration")]     partial text xpath
//   //button[text()="Signup"]     full text
//    //button[@data-qa="signup-button"]  standard normal syntax
//    (//span[@class="pull-right"])[5]      indexing with number


import register from '../pages/Automation.com.po'
import automationdata from '../fixtures/Automation.com.data.json'
describe('automation excercise', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Return false to prevent the test from failing due to uncaught exceptions
        return false;
    });
    it('Test Case 1: Register User', () => {

        cy.visit(Cypress.env('Url_1'))
        register.signupbtn().click();
        register.signupbtnasrt().should('be.visible')
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.log(r)
        register.usernamefield().type(automationdata.username + r)
        register.email().type(automationdata.mailprefix + `${r}` + automationdata.mailsuffix)
        register.signuppbtn().click()
        cy.get('[id="id_gender1"]').check()
        cy.get('#password').type(automationdata.password + r)
        cy.get('#days').select('10')
        cy.get('#months').select('February')
        cy.get('#years').select('1990')
        cy.get('#newsletter').check()
        cy.get('[data-qa="first_name"]').type('ramaaa' + r)
        cy.get('input[data-qa="last_name"]').type('dffdfdf' + r)
        cy.get('input[data-qa="company"]').type('ghyhvvb' + r)
        cy.get('input[data-qa="address"]').type('iUFPUGpidfgi1349IGDICG9DSDFf' + r)
        cy.get('input[data-qa="address2"]').type('c7tftg ' + r)
        cy.get('select[data-qa="country"]').select('United States')
        cy.get('input[data-qa="state"]').type('ugiyfiy' + r)
        cy.get('input[data-qa="city"]').type('t7dtcu' + r)
        let randomTenDigitNumber = Math.floor(Math.random() * 9000000000 + 1000000000);
        cy.log(randomTenDigitNumber)
        cy.get('input[data-qa="zipcode"]').type(randomTenDigitNumber)
        cy.get('input[data-qa="mobile_number"]').type(randomTenDigitNumber)
        cy.get('button[data-qa="create-account"]').click()
        cy.contains('Account Created!').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
        cy.contains(' Delete Account').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.get('a[data-qa="continue-button"]').click()

    })

    it('Test Case 2: Login User with correct email and password', () => {


        cy.visit(Cypress.env('Url_1'))
        register.signupbtn().click();
        register.signupbtnasrt().should('be.visible')
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.log(r)
        register.usernamefield().type(automationdata.username + r)
        register.email().type(automationdata.mailprefix + `${r}` + automationdata.mailsuffix)
        register.signuppbtn().click()
        cy.get('[id="id_gender1"]').check()
        cy.get('#password').type(automationdata.password + r)
        cy.get('#days').select('10')
        cy.get('#months').select('February')
        cy.get('#years').select('1990')
        cy.get('#newsletter').check()
        cy.get('[data-qa="first_name"]').type('ramaaa' + r)
        cy.get('input[data-qa="last_name"]').type('dffdfdf' + r)
        cy.get('input[data-qa="company"]').type('ghyhvvb' + r)
        cy.get('input[data-qa="address"]').type('iUFPUGpidfgi1349IGDICG9DSDFf' + r)
        cy.get('input[data-qa="address2"]').type('c7tftg ' + r)
        cy.get('select[data-qa="country"]').select('United States')
        cy.get('input[data-qa="state"]').type('ugiyfiy' + r)
        cy.get('input[data-qa="city"]').type('t7dtcu' + r)
        let randomTenDigitNumber = Math.floor(Math.random() * 9000000000 + 1000000000);
        cy.log(randomTenDigitNumber)
        cy.get('input[data-qa="zipcode"]').type(randomTenDigitNumber)
        cy.get('input[data-qa="mobile_number"]').type(randomTenDigitNumber)
        cy.get('button[data-qa="create-account"]').click()
        cy.contains('Account Created!').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
        cy.contains(' Delete Account').click()
        cy.contains('Account Deleted!').should('be.visible')

    })
    
})

// str="welcome to the office"

// charcount=[]

// for(i=0;i<str.length;i++){
//     char=str[i]
//     if(charcount[char]){
//         charcount[char]++
//     }
//     else{
//         charcount[char]=1
//     }
    
// }
// console.log(charcount)