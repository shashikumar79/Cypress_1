describe('rediff.com test suite',()=>{

    it('rediff.com',()=>{

cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
cy.get('table[align="center"]').first().its('width').then((width)=>{
    cy.log(width)
})

cy.get('[name^="name"]').type('shashijackson')
cy.get('[onclick="javascript:UncheckAllOptions();"]').type('kumarmatheo@rediffmail.com')
cy.get('[name^="passwd"]').type('shashijhon@12')
cy.get('input[type="password"][id="newpasswd1"]').type('shashijhon@12')
cy.get('[type="checkbox"]').check()
cy.get('[name^="hintq"]').select('What is your favourite food?')
cy.get('[type="password"]').last().type("biryani")
cy.get('[type="text"]').eq('3').type('maatha')
cy.get('#mobno').type('7745366889')
// cy.get('[name^="DOB_Day"]').select(26)
cy.get('[name^="DOB_Day"]').then((resp)=>{
    const value=resp.text()
    cy.log(value)
})

cy.get('[name^="DOB_Month"]').select('MAY')
cy.get('[name^="DOB_Year"]').select('1993')
cy.get('[checked="checked"]').check()
cy.get('#country').select('India')
cy.get('[name^="city"]').select('Goa')


    })
})