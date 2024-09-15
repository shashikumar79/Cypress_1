describe('internetdropdown', () => {

    it('dropdown', () => {

        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Dropdown').click()
        cy.get('[id="dropdown"]').select('Option 1')
        cy.get('[id="dropdown"]').contains('Option 2')
        cy.get('[id="dropdown"]').select(1)

    })
    it.only('filedownload', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        // cy.contains('File Download').click()
        // cy.downloadfile('lamp.jpg','cypress/downloads','lamp.jpg')

        // To click on the 'File Download' button or link
        cy.contains('File Download').click();

        // To download the file 'lamp.jpg' to 'cypress/downloads' folder with the same name 'lamp.jpg'
       cy.downloadFile('https://the-internet.herokuapp.com/download/Image1.png', 'cypress/downloads', 'lamp.jpg');


    })

})