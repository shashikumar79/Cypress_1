describe('alerts ', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    })
    it('simple alertsjs', () => {
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', (alert) => {  //in alert place any word we can use
            expect(alert).to.equal('I am a JS Alert');//for assertion purpose only this line
            return true
        })
    })

    it('confirm alertsjs', () => {
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', () => {
            return true
        })
    })

    it('alert prompt click ok', () => {


        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('Cypress Test Response'); // Stub the prompt and set the return value

            cy.contains('Click for JS Prompt').click()
        });


    })
   
    it('alert prompt click cancel', () => {


        cy.window().then(($win) => {
            cy.stub($win, 'prompt').callsFake(() => null)

            cy.contains('Click for JS Prompt').click()
        });
    })

})
