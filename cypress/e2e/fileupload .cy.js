describe('fileupload', () => {

    it('upload a file', () => {

        cy.visit('https://practice-automation.com/file-upload/')
        cy.get('input[id="file-upload"]').attachFile('Passport Size Photo_page-0001.jpg')
        cy.get('[id="upload-btn"]').click()
        cy.contains('Thank you for your message. It has been sent.').should('be.visible').and('have.text', 'Thank you for your message. It has been sent.')
    })
    it('downloadfile', () => {
        cy.on('uncaught:exception', () => {

            return false
        })
        cy.visit('https://demo.automationtesting.in/FileDownload.html')
        cy.get('a[type="button"]').click()

        cy.readFile('cypress/downloads/samplefile.pdf').should('exist')
        
        cy.writeFile('cypress/fixtures/sample.text', 'saiKumar')
    })
})

