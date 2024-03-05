describe('parabank',()=>{

    it('parabankregistration',()=>{

cy.visit('https://parabank.parasoft.com/parabank/index.htm')
cy.contains('Register').click()
cy.get('[id="customer.firstName"]').type('sasi')
cy.get('[name="customer.lastName"]').type('kumar')
cy.get('[name="customer.address.street"]').type("bangalore")
cy.get('[type="text"][name="customer.address.city"]').type('srikantapura')
cy.get('[class="input"][id="customer.address.state"]').type('karnataka')
cy.get('[name="customer.address.zipCode"]').type('560073')
cy.get('[name="customer.phoneNumber"]').type('8310603996')
cy.get('[name="customer.ssn"]').type('123456789101')
cy.get('[name="customer.username"]').type('sasikumar')
cy.get('[id="customer.password"]').type('shashiks@123')
cy.get('[id="repeatedPassword"]').type('shashiks@123')
cy.get('[value="Register"]').click()
cy.wait(4000)
cy.get('[type="text"][name="username"]').type('sasikumar')
cy.get('[type="password"]').eq('0').type('shashiks@123')
cy.get('[type="submit"][value="Log In"]').click()
    })
})    