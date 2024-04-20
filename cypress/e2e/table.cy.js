import moment from 'moment'
describe('describe', () => {

    // tbody>tr:nth-child(51)>td:nth-child(9)----traversing for particular cell data

   

    it('1 fill textboxes', () => {
        cy.on('uncaught:exception', () => {

            return false
        });
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#name').type('gdsahGH')
        cy.get('#email').type('galhfgl@gmail')
        cy.get('#phone').type('8877667899')
        cy.get('#textarea').type('bangalore')
    })
    it('2radio checkbox', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[id="male"]').click()
        cy.get('#country').select('United States').should('contain', 'United States')
        cy.contains('Red').click().should('be.visible')
    })
    it('3calender', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        var cureentdate = moment().subtract(-1, "days").format("MM/DD/YYYY ");

        // HH:mm:ss a (to get exact time with min sec )
        // moment().subtract(1, "days").format("YYYY-MM-DD");
        // moment().subtract(0, "days").format("YYYY-MM-DD")
        // moment().subtract(-1, "days").format("YYYY-MM-DD");
        // https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/02-fromnow/
        // https://stackoverflow.com/questions/31448557/how-to-get-yesterdays-date-with-momentjs

        cy.log(cureentdate)
        cy.get('[class="hasDatepicker"]').click().type(cureentdate)
    })
    it('4 origin opencart', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[href="https://demo.opencart.com/"]').click()
        cy.wait(5000)
        cy.origin('https://demo.opencart.com/', () => {
            cy.contains('MacBook').should('be.visible')
            cy.url().should('eq', 'https://demo.opencart.com/')
            cy.go('back')
        })
        cy.wait(5000)
    })
    it('5 origin orange', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('a[href="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"]').click()
        cy.wait(5000)
        cy.origin('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', () => {
            cy.get('[class="orangehrm-login-error"]').contains('Username : Admin').should('exist')
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.go('back')
        })
    })
    it('6 table', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('tbody > tr:nth-child(4) > td:nth-child(3)').first().contains('Javascript').should('be.visible')
        cy.get('tbody > tr:nth-child(1) > th:nth-child(3)').contains('Subject').should('exist')
        cy.get('input[type="checkbox"]').first().click().should('be.checked')
        cy.get('input[type="checkbox"]').check({ multiple: true }).should('be.checked')
    })
    it('7 newtab with origin', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#Wikipedia1_wikipedia-search-input').type('check')
        cy.get('.wikipedia-search-button').click()
        cy.get('a[href="https://en.wikipedia.org/wiki/Check"]').invoke('removeAttr', 'target').click()
        cy.wait(3000)
        cy.origin('https://en.wikipedia.org/wiki/Check', () => {
            cy.contains('Arts, entertainment, and media').should('be.visible')
            cy.url().should('eq', 'https://en.wikipedia.org/wiki/Check')
            cy.go('back')
        })
    })
    it('8 simple alertk', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[onclick="myFunctionAlert()"]').click()
        cy.on('window:alert', (alert) => {
            expect(alert).to.contains('I am an alert box!')
        })
    })
    it('9 confirm alert ', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[onclick="myFunctionConfirm()"]').click()
        cy.on('window:confirm', (alert) => {
            expect(alert).to.contains('Press a button!')
        })
        it('10 prompt alert', () => {
            cy.visit('https://testautomationpractice.blogspot.com/')
            cy.window().then((win) => {
                cy.stub(win, 'prompt').returns('welcome')
            })
            cy.get('[onclick="myFunctionPrompt()"]').click()
            cy.get('#demo').should('have.text', 'Hello welcome! How are you today?')
        })
    })
    it('11 new browser window', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.contains('New Browser Window').invoke('removeAttr', 'target').click()
        cy.get('[ondblclick="myFunction1()"]').dblclick()
    })
    it('12 drog and drop', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        const datatranfer = new DataTransfer()
        cy.get('[id="draggable"]').trigger('dragstart', { datatranfer })
        cy.get('[id="droppable"]').trigger('drop', { datatranfer })
    })
    it('13 slider', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[style="left: 0%;"]').trigger('dragstart', { datatranfer })
        cy.get('[style="left: 34%;"]').trigger('drop', { datatranfer })

    })

    it('14 frames', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('div[class="widget-content"]').eq(7).then(($iframe)=>{
            let checkbox=$iframe.contents().find('input[id="RESULT_TextField-0"]')
            cy.wrap(checkbox).type('ffjgyfcj,h')

        })

    })

})
