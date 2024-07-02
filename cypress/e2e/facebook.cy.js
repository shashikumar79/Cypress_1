describe('verify the facebook create account functionality',()=>{
    it('verify the date of birth functionality',()=>{
        cy.visit('https://www.facebook.com/')

        cy.get('#u_0_0_D1').click()
        //cy.get('a[href="/r.php?locale=kn_IN"]').click()
        cy.get('#month').select("12")
        cy.get("##u_5_5_mB").check()
    })

    it.only('verify the date of birth functionality',()=>{

        cy.visit("https://the-internet.herokuapp.com/")
        cy.contains("Digest Authentication").click()
       
        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns(["admin", "admin"])
            
        })

        
    })
})