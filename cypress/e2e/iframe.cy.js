describe('iframe handling', () => {



    it('iframe checkbox', () => {

        cy.visit('https://jqueryui.com/checkboxradio/')
        cy.get('iframe[class="demo-frame"]').then((radio) => {

            let radio1 = radio.contents().find('label[for="radio-1"]')
            cy.wrap(radio1).click()

        })


    })
})